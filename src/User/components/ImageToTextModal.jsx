import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { createWorker } from "tesseract.js";
import Spinner from "react-bootstrap/Spinner";

const ImageToTextModal = ({ file }) => {
  const [show, setShow] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [textResult, setTextResult] = useState("");

  useEffect(() => {
    if (file) {
      setShow(true);
      convertImageToText(file);
    }
  }, [file]);

  const convertImageToText = async (image) => {
    setIsLoading(true);
    let worker = null;
    try {
      worker = await createWorker();
      await worker.loadLanguage("eng");
      await worker.initialize("eng");
      const result = await worker.recognize(image);
      console.log(result.data.text);
      setTextResult(result.data.text);
    } catch (error) {
      console.error("Error recognizing image:", error);
      setTextResult("Error recognizing image. Please try again.");
    } finally {
      setIsLoading(false);
      if (worker) {
        await worker.terminate();
      }
    }
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoading ? (
            <div className="text-center text-dark">
              <Spinner animation="border" variant="info" />
              <p>Processing image, please wait...</p>
            </div>
          ) : (
            <div className="text-dark">
              <p>
                <strong>Extracted Text:</strong>
              </p>
              <p className="text-dark">{textResult}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImageToTextModal;
