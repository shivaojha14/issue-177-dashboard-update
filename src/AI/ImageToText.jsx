import React, { useEffect, useState } from "react";
import { createWorker } from "tesseract.js";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

const ImageToText = () => {
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [textResult1, setTextResult1] = useState("Result displays here");
  const [textResult2, setTextResult2] = useState(null);
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const url = process.env.REACT_APP_API_URL;
  const worker_id = process.env.REACT_APP_WORKER_EXTRACTOR_ID;
  const worker_token = process.env.REACT_APP_WORKER_TOKEN;
  console.log(url);

  useEffect(() => {
    const convertImageToText = async (image) => {
      setIsLoading1(true);
      let worker = null;
      try {
        worker = await createWorker();
        await worker.loadLanguage("eng");
        await worker.initialize("eng");
        const result = await worker.recognize(image);
        console.log(result.data.text);
        setTextResult1(result.data.text);
      } catch (error) {
        console.error("Error recognizing image:", error);
        setTextResult1("Error recognizing image. Please try again.");
      } finally {
        setIsLoading1(false);
        if (worker) {
          await worker.terminate();
        }
      }
    };

    if (selectedImage1) {
      convertImageToText(selectedImage1);
    }
  }, [selectedImage1]);

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  useEffect(() => {
    const handleOtherApi = async (file) => {
      setIsLoading2(true);

      try {
        const base64String = await fileToBase64(file);
        const body = `data:image/jpeg;name=${file.name};base64,${base64String}`;

        const options = {
          method: "POST",
          headers: {
            "Content-type": "image/*",
            "X-WORKER-EXTRACTOR-ID": worker_id,
            "X-WORKER-TOKEN": worker_token,
          },
        };

        const response = await axios.post(url, body, options);
        console.log(response.data);
        setTextResult2(response.data);
      } catch (error) {
        console.error("Error processing file:", error);
        setTextResult2("Error processing file. Please try again.");
      } finally {
        setIsLoading2(false);
      }
    };

    if (selectedFile2) {
      handleOtherApi(selectedFile2);
    }
  }, [selectedFile2]);

  return (
    <Container>
      <h2>Image to Text</h2>
      <Row>
        <Col xs={12} sm={6}>
          <div className="input-wrapper">
            <Form>
              <Form.Group controlId="formFile1" className="mb-3">
                <Form.Label>Upload Image 1</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) => setSelectedImage1(e.target.files[0])}
                />
              </Form.Group>
            </Form>
          </div>

          <div className="image-container" style={{ border: "2px solid lime" }}>
            {selectedImage1 && (
              <img
                src={URL.createObjectURL(selectedImage1)}
                alt="uploaded-image-1"
                className="img-fluid"
                style={{ maxWidth: "100%", height: "auto", maxHeight: "500px" }}
              />
            )}
          </div>

          <div className="result-text">
            {isLoading1 ? (
              <p style={{ color: "black" }}>Loading...</p>
            ) : (
              <p style={{ color: "black" }}>{textResult1}</p>
            )}
          </div>
        </Col>

        <Col xs={12} sm={6} className="mt-4 mt-sm-0">
          <div className="input-wrapper">
            <Form>
              <Form.Group controlId="formFile2" className="mb-3">
                <Form.Label>Upload Image or PDF</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => setSelectedFile2(e.target.files[0])}
                />
              </Form.Group>
            </Form>
          </div>

          <div className="file-container" style={{ border: "2px solid blue" }}>
            {selectedFile2 && selectedFile2.type.startsWith("image") && (
              <img
                src={URL.createObjectURL(selectedFile2)}
                alt="uploaded-file-2"
                className="img-fluid"
                style={{ maxWidth: "100%", height: "auto", maxHeight: "500px" }}
              />
            )}
            {selectedFile2 && selectedFile2.type === "application/pdf" && (
              <p>PDF uploaded: {selectedFile2.name}</p>
            )}
          </div>

          <div className="result-text">
            {isLoading2 ? (
              <p style={{ color: "black" }}>Loading...</p>
            ) : (
              <pre style={{ color: "black" }}>
                {textResult2 ? JSON.stringify(textResult2, null, 2) : "No data"}
              </pre>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageToText;
