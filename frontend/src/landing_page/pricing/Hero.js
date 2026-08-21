import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 p-5 border-bottom mb-5">
        <h1>Pricing</h1>
        <p className="mt-3 text-muted fs-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </p>
      </div>
      <div className="row text-center mt-5 fs-6 p-5">


        <div className="col-4 mt-5 p-3">
          <img
            src="media/images/pricingEquity.svg"
            alt="PricingEquity Image"
            style={{ width: "70%" }}
          />
          <h2 className="mt-3" >Free equity delivery</h2>
          <p className="text-muted mt-3 p-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        <div className="col-4 mt-5 p-3">
          <img
            src="media/images/intradayTrades.svg"
            alt="PricingEquity Image"
            style={{ width: "70%" }}
          />
          <h2 className="mt-3" >Intraday and F&O trades</h2>
          <p className="text-muted mt-3 p-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

        <div className="col-4 mt-5 p-3">
          <img
            src="media/images/pricingEquity.svg"
            alt="PricingEquity Image"
            style={{ width: "70%" }}
          />
          <h2 className="mt-3">Free direct MF</h2>
          <p className="text-muted mt-3 p-3">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
