import React from "react";

function LeftSection({ imageUrl, title, description, tryDemo, LearnMore }) {
  return (
    <div className="container text-muted p-5">
      <div className="row">
        <div className="col p-5">
          <img src={imageUrl} alt="Product Image" />
        </div>

        <div className="col p-5 mt-5" style={{marginLeft: "100px"}}>
          <h3 className="mt-5 fs-4 mb-4">{title}</h3>
          <p>{description}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try demo &nbsp;<i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a
              href={LearnMore}
              style={{ marginLeft: "90px", textDecoration: "none" }}
            >
              Learn more &nbsp;<i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>

          <div className="mt-4">
            <img src="media\images\googlePlayBadge.svg" />
            <img
              src="media\images\appstoreBadge.svg"
              style={{ marginLeft: "50px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
