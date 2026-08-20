import React from "react";

function Hero() {
  return (
    <div className="container text-center mt-2 text-muted mb-5 border-bottom p-5">
      <h1 className="mt-5 fs-3 mb-3">Zerodha Products</h1>
      <h4 className="fs-4">Sleek, modern, and intuitive trading platforms</h4>
      <p className="mt-4 fs-5 mb-5 pb-5">
        Check out our{" "}
        <a href="#" style={{ textDecoration: "none" }}>
          investment offerings <i class="fa-solid fa-arrow-right-long"></i>
        </a>
      </p>
    </div>
  );
}

export default Hero;
