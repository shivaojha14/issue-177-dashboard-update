import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SignatureCanvas from "react-signature-canvas";

const ESign = ({ show, handleClose }) => {
  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(0);
  const [result, setResult] = useState("");
  const ref = useRef(null);
  const [signature, setSignature] = useState();

  useEffect(() => {
    const updateCanvasSize = () => {
      const modalBody = document.querySelector(".modal-body");
      if (!modalBody) return;

      const modalBodyWidth = modalBody.offsetWidth;
      const aspectRatio = 1200 / 400;
      const canvasWidth = modalBodyWidth;
      const canvasHeight = canvasWidth / aspectRatio;

      setCanvasWidth(canvasWidth);
      setCanvasHeight(canvasHeight);
    };

    // Call the function once when the component mounts and each time the modal is shown
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, [show]);

  const saveSignature = () => {
    if (signature) {
      const res = signature.getTrimmedCanvas().toDataURL();
      setResult(res);
    }
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={handleClose}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">E-Sign</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #000",
          }}
        >
          <SignatureCanvas
            ref={(ref) => setSignature(ref)}
            penColor="red"
            backgroundColor="white"
            canvasProps={{
              width: canvasWidth,
              height: canvasHeight,
              className: "penCursor",
            }}
          />
        </div>
        {result && (
          <div>
            <img src={result} alt="Signature" />
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={saveSignature}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ESign;
