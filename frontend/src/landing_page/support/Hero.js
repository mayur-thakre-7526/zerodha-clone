import React from "react";

function Hero() {
  return (
    <section className="container-fluid mb-5" id="supportHero">
      <div className="p-5" id="supportWrappers">
        <h5>Support Portal</h5>
        <a href="">Track Tickets</a>
      </div>

      <div className="row mx-5">
        <div className="col p-5" style={{ marginLeft: "230px" }}>
          <p className="fs-4">
            Search for an answer or browse help topics to create a ticket
          </p>
          <input placeholder="Eg: how do i activate F&O" /> <br />
          <a href="">Track account opening</a> &nbsp;
          <a href="">Track segment activation</a> &nbsp;
          <a href="">Intraday margins</a> &nbsp;
          <a href="">Kite user manual</a>
        </div>
        <div className="col p-5">
          <p className="fs-4">Featured</p>
          <ol>
            <li className="mb-3">
              <a href=""> Current Takeovers and Delisting - January 2024</a>
            </li>

            <li>
              <a href=""> Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
