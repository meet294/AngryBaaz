import React from "react";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a className={classes.brand} class="navbar-brand " href="/">
            <span style={{ color: "aliceblue" }}>ANGRY</span>
            <span style={{ color: "orange" }}>BAZAAR</span>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className={classes.links} class="navbar-nav ms-auto">
              <a
                class="nav-link"
                aria-current="page"
                href="/"
                style={{ color: "aliceblue" }}
              >
                Dashboard
              </a>
              <a class="nav-link" href="/" style={{ color: "aliceblue" }}>
                Profile
              </a>
              <a class="nav-link" href="/" style={{ color: "aliceblue" }}>
                Orders
              </a>
              <a class="nav-link" href="/" style={{ color: "aliceblue" }}>
                Enquiry
              </a>

              <a class="nav-link" href="/" style={{ color: "aliceblue" }}>
                Revenue
              </a>

              <a class="nav-link" href="/" style={{ color: "aliceblue" }}>
                Store
              </a>

              <a class="nav-link" href="/" style={{ color: "aliceblue" }}>
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
