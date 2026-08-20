import React from "react";

function RightSection({ imageUrl, title, description, linkName }) {
  return (
    <div className="container text-muted">
      <div className="row">
        <div className="col mt-5 p-5">
          <h3 className="fs-4 mt-5">{title}</h3>
          <p>{description}</p>
          <div>
            <a href="#" style={{ textDecoration: "none" }}>
              {linkName} &nbsp;
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>

        <div className="col">
          <img src={imageUrl} alt="Product Image" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
