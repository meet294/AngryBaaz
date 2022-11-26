import styles from "./Pform.module.css";
import shirt from "./images/shirt.webp";
import { useState } from "react";
import Ptype from "./Ptype";
import Rchange from "./Rchange";

function Pform() {
  const [isOpen, setIsOpen] = useState(false);
  const [rIsOpen, setRIsOpen] = useState(false);

  return (
    <>
      <div id={styles.cont} class="container">
        <form>
          <h4>Personal Information</h4>
          <div class="container">
            <div id={styles.row} class="row">
              <div class="col-md-3">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Your Name:
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Meet Goswami"
                    disabled
                  />
                </div>
              </div>
              <div class="col">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Email Address:
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="meetgoswami294@gmail.com"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div id={styles.row} class="row">
              <div class="col">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Phone No:
                  </span>
                  <input type="text" class="form-control" placeholder="Phone" />
                </div>
              </div>
            </div>
          </div>

          <h4>Store Information</h4>
          <div class="container">
            <div id={styles.row} class="row">
              <div class="col-md-3">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Shop Name:
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Shop Name"
                  />
                </div>
              </div>
              <div class="col">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    GST Number:
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="824516"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div id={styles.row} class="row">
              <div class="col">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Location:
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Address"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id={styles.foot}>
            <h4>Store Information</h4>

            <h6>
              <button
                type="button"
                class="btn btn-link"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Add printing type
              </button>
            </h6>
            <Ptype open={isOpen} onClose={() => setIsOpen(false)} />
          </div>
          <div class="container">
            <div id={styles.row} class="row">
              <div class="col-md-3">
                <div class="card" style={{ width: "200px" }}>
                  <img src={shirt} class="card-img-top" alt="..." />
                  <div id={styles.cardbody} class="card-body">
                    <p class="card-title">Sublimation</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card" style={{ width: "200px" }}>
                  <img src={shirt} class="card-img-top" alt="..." />
                  <div id={styles.cardbody} class="card-body">
                    <p class="card-title">Sublimation</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card" style={{ width: "200px" }}>
                  <img src={shirt} class="card-img-top" alt="..." />
                  <div id={styles.cardbody} class="card-body">
                    <p class="card-title">Sublimation</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card" style={{ width: "200px" }}>
                  <img src={shirt} class="card-img-top" alt="..." />
                  <div id={styles.cardbody} class="card-body">
                    <p class="card-title">Sublimation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer id={styles.foot}>
            <h6>
              <button
                type="button"
                class="btn btn-link"
                onClick={() => {
                  setRIsOpen(true);
                }}
              >
                Request Change Details
              </button>
            </h6>
            <Rchange Ropen={rIsOpen} rOnClose={() => setRIsOpen(false)} />
            <h6>
              <a href="/">Setup Stores</a>
            </h6>
          </footer>
        </form>
      </div>
    </>
  );
}

export default Pform;
