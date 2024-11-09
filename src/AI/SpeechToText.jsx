import { useFormikContext } from "formik";
import React, { useState } from "react";

const predefinedFields = [
  { key: "company name", value: "companyname" },
  { key: "company", value: "companyname" },
  { key: "first name", value: "firstname" },
  { key: "last name", value: "lastname" },
  { key: "mobile", value: "mobile" },
  { key: "phone", value: "altphone" },
  { key: "email", value: "email" },
  { key: "department", value: "department" },
  { key: "designation", value: "designation" },
  { key: "category", value: "category" },
  { key: "report to", value: "reportTo" },
  { key: "report", value: "reportTo" },
  { key: "gst number", value: "gstnumber" },
  { key: "gst in", value: "gstnumber" },
  { key: "gst", value: "gstnumber" },
  { key: "website", value: "website" },
  { key: "address one", value: "add1" },
  { key: "address 1", value: "add1" },
  { key: "address two", value: "add2" },
  { key: "address 2", value: "add2" },
  { key: "address to", value: "add2" },
  { key: "address to h", value: "add2" },
  { key: "address 3", value: "add3" },
  { key: "address three", value: "add3" },
  { key: "address", value: "add1" },
  { key: "city", value: "city" },
  { key: "pin code", value: "pincode" },
  { key: "state", value: "state" },
  { key: "country", value: "country" },
  { key: "notes", value: "notes" },
];

const SpeechToText = ({ inputId }) => {
  const [recognizing, setRecognizing] = useState(false);
  const [recognition, setRecognition] = useState(null);

  const { setFieldValue } = useFormikContext();

  function capitalizeFirstLetter(string) {
    const a = string.charAt(0).toUpperCase() + string.slice(1);
    return a;
  }

  const setInputValue = (inputId, value) => {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.value = value;
    }
  };

  //function to handle full name
  const handleName = (transcript) => {
    const modifiedTranscript = transcript
      .toLowerCase()
      .replace(/name|full\sname/g, "")
      .trim();

    const words = modifiedTranscript.split(" ");

    if (words.length < 2) {
      setFieldValue("firstname", modifiedTranscript);
      setFieldValue("lastname", "");
    } else {
      const firstName = words[0].trim();
      const lastName = words.slice(1).join(" ").trim();

      setFieldValue("firstname", capitalizeFirstLetter(firstName));
      setFieldValue("lastname", capitalizeFirstLetter(lastName));
    }
  };

  //funtion to handle mobile number
  const handleMobileOrPhone = (transcript) => {
    const modifiedTranscript = transcript
      .toLowerCase()
      // .replace(/mobile|phone/g, "")
      .trim();

    // Check if the first word in the transcript is "mobile"
    if (modifiedTranscript.startsWith("mobile")) {
      const value = modifiedTranscript
        .substring("mobile".length)
        .replace(/\s+/g, "")
        .trim();
      setFieldValue("mobile", value);
    }
    // Check if the first word in the transcript is "phone"
    else if (modifiedTranscript.startsWith("phone")) {
      const value = modifiedTranscript
        .substring("phone".length)
        .replace(/\s+/g, "")
        .trim();
      setFieldValue("altphone", value);
    }
  };

  const startRecognition = () => {
    if (!("webkitSpeechRecognition" in window)) {
      console.error("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setRecognizing(true);
    };

    recognition.onerror = (event) => {
      console.error("Error occurred in recognition: " + event.error);
      stopRecognition();
    };

    recognition.onend = () => {
      setRecognizing(false);
    };

    //this function will recogize you voice input and accordingly fill the form
    recognition.onresult = (event) => {
      const latestResult = event.results[event.results.length - 1];

      if (latestResult.isFinal) {
        const transcript = latestResult[0].transcript.trim();

        if (/^(name|full name)/i.test(transcript.trim())) {
          handleName(transcript);
          return;
        }

        if (/^(mobile|phone)/i.test(transcript.trim())) {
          handleMobileOrPhone(transcript);
          return;
        }

        // Check if the transcript includes the keyword "is"
        if (transcript.includes("is")) {
          const modifiedTranscript = transcript.replace("is", ":").trim();
          setInputValue(inputId, modifiedTranscript);

          const parts = modifiedTranscript.split(":");
          if (parts.length === 2) {
            // let key = parts[0].replace(/\s+/g, "").toLowerCase(); // regular expression to remove all white spaces in between
            let key = parts[0].toLowerCase().trim();
            let value = capitalizeFirstLetter(parts[1].trim());

            const predefinedField = predefinedFields.find(
              (field) => field.key === key
            );

            if (predefinedField) {
              key = predefinedField.value;
            }

            setFieldValue(key, value);
          }
        } else {
          setInputValue(inputId, transcript);

          const modifiedTranscript = transcript.toLowerCase().trim();

          const predefinedField = predefinedFields.find((field) =>
            modifiedTranscript.includes(field.key)
          );

          if (predefinedField) {
            const key = predefinedField.value;
            const value = modifiedTranscript
              .replace(predefinedField.key, "")
              .trim();
            setFieldValue(key, capitalizeFirstLetter(value));
          }
        }
        //notes can include "is" keyword multiple times so specially handled
        if (transcript.includes("notes")) {
          setInputValue(inputId, transcript);
          const key = transcript.split(" ")[0].toLowerCase().trim();
          const value = transcript.replace(key, "").trim();
          setFieldValue(key, value);
        }
      }
    };

    recognition.start();
    setRecognition(recognition);
  };

  const stopRecognition = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        onClick={recognizing ? stopRecognition : startRecognition}
      >
        <i className={`fas ${recognizing ? "fa-stop" : "fa-microphone"}`}></i>
        {recognizing ? " Stop" : " Speak"}
      </button>
    </>
  );
};

export default SpeechToText;
