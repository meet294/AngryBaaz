import ReactDOM from "react-dom";
import styles from "./Ptype.module.css";

function Ptype({ open, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div id={styles.overlay} onClick={onClose} />
      <div id={styles.cont}>
        <form>
          <div id={styles.heading} class="container">
            <h5>Add All Printing Types available on Your Store</h5>
          </div>
          <div id={styles.input}>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Type Printing Name.."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <label for="floatingInput">Type Printing Name..</label>
            </div>
            <div class="input-group-sm mb-3">
              <input type="file" class="form-control" id="inputGroupFile02" />
            </div>
          </div>
          <div class="d-grid gap-2 col-6 mx-auto" id={styles.button}>
            <button type="button" class="btn btn-primary" onClick={onClose}>
              Done
            </button>
          </div>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Ptype;
