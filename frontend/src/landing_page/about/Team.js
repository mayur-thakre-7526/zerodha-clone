import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row mt-5 mb-3">
        <h1 className="text-center fs-3 mb-5 mt-3" style={{ color: "#424242" }}>
          About the Project
        </h1>
      </div>

      <div
        className="row text-muted"
        style={{ lineHeight: "1.8rem", fontSize: "1.2rem" }}
      >
        <div className="col mt-5 text-center">
          <img
            src="media\images\mayur.png"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h5 className="mt-3">Mayur Thakre</h5>
          <h6 className="mt-3">Developer / Creator</h6>
        </div>
        <div className="col mt-5 p-5">
          <p>
            This is a frontend-focused Zerodha-inspired trading platform clone
            built as a learning project. I recreated the UI and implemented the
            major pages and interactions while learning React, routing, and
            modern frontend development.
          </p>

          <p>
            Connect on{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              GitHub
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              LinkedIn
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Live Demo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
