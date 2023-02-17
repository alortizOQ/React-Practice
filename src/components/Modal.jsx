import "./Modal.css";

function Modal({ confirmation }) {
  return (
    <>
      {/* You can also use divs to wrap things but use empty tags */}
      <div className="modal">
        <p className="modal__title">{confirmation}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={() => {console.log("Cancel")}}>Cancel</button>
          <button className="btn" onClick={() => {console.log("Confirm")}}>Confirm</button>
        </div>
      </div>
      <div className="backdrop" />
    </> /* Use empty tags to wrap everything */
  );
}

export default Modal;
