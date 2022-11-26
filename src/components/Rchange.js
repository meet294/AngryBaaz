import ReactDOM from "react-dom";
import styles from "./Rchange.module.css";

function Ptype({ Ropen, rOnClose }) {
  if (!Ropen) return null;

  return ReactDOM.createPortal(
    <>
      <div id={styles.overlay} onClick={rOnClose} />
      <div id={styles.cont}>
        <form>
            <div id={styles.heading} class="container">
                <h3>Request Change Details</h3>
            </div>
            <p id={styles.para}>Select categories that you want to change</p>
          <div id={styles.check} class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Change Shop Name/Address
            </label>
          </div>
          <div id={styles.check} class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label class="form-check-label" for="flexCheckChecked">
              Change Vendor Name
            </label>
          </div>
          <div id={styles.check} class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Add Shop Photos
            </label>
          </div>
          <div id={styles.check} class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label class="form-check-label" for="flexCheckChecked">
              Add New Bank/UPI Details
            </label>
          </div>
          <br />
          <div class="d-grid gap-2 " id={styles.button}>
          <button type="button" class="btn btn-primary" onClick={rOnClose}>
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
