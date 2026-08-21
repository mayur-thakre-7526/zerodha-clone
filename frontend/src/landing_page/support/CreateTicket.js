import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row mt-4 p-4">
        <h3>To create a ticket, select a relevant topic</h3>

        <div className="col-4 mt-5" style={{lineHeight:"2.5"}}>
          <h4 className="mb-5 fs-5"><i class="fa-solid fa-circle-plus fa-xs"></i> Account Opening</h4>
            <a href="" style={{textDecoration: "none"}}>Resident individual</a>
            <br/>
            <a href="" style={{textDecoration: "none"}}>Minor</a> <br/>
            <a href="" style={{textDecoration: "none"}}>Non Resident Indian (NRI)</a> <br/>
            <a href="" style={{textDecoration: "none"}}>Company, Partnership, HUF and LLP</a> <br/>
            <a href="" style={{textDecoration: "none"}}>Glossary </a> <br/>
        </div>

        <div className="col-4 mt-5" style={{lineHeight:"2.8"}}>
          <h4 className="mb-5 fs-5"><i class="fa-regular fa-circle-user fa-xs"></i> Your Zerodha Account</h4>
            <a href="" style={{textDecoration: "none"}}>Your Profile</a>
            <br/>
            <a href="" style={{textDecoration: "none"}}>Account modification</a> <br/>
            <a href="" style={{textDecoration: "none"}}>Client Master Report (CMR) and Depository Participant (DP)</a> <br/>
            <a href="" style={{textDecoration: "none"}}>Nomination</a> <br/>
            <a href="" style={{textDecoration: "none"}}>Transfer and conversion of securities </a> <br/>
        </div>

        <div className="col-4 mt-5 px-5" style={{lineHeight:"2.5"}}>
          <h4 className="mb-5 fs-5"><i class="fa-solid fa-bolt fs-xs"></i> Kite</h4>
            <a href="" style={{textDecoration: "none"}}>IPO</a>
            <br/>
            <a href="" style={{textDecoration: "none"}}>Trading FAQs
</a> <br/>
            <a href="" style={{textDecoration: "none"}}>Margin Trading Facility (MTF) and Margins</a> <br/>
            <a href="" style={{textDecoration: "none"}}>Charts and orders</a> <br/>
            <a href="" style={{textDecoration: "none"}}>Alerts and Nudges </a> <br/>
            <a href="" style={{textDecoration: "none"}}>General</a> <br/>
        </div>



        <div className="col-4 mt-5" style={{lineHeight:"2.5"}}>
          <h4 className="mb-5 fs-5 mt-2"><i class="fa-solid fa-indian-rupee-sign fs-xs"></i> Funds</h4>
            <a href="" style={{textDecoration: "none"}}>Add money
</a>
            <br/>
            <a href="" style={{textDecoration: "none"}}>Withdraw money</a> <br/>
            <a href="" style={{textDecoration: "none"}}>Add bank accounts
</a> <br/>
            <a href="" style={{textDecoration: "none"}}>eMandates</a> <br/>
        </div>



        <div className="col-4 mt-5" style={{lineHeight:"2.8"}}>
          <h4 className="mb-5 fs-5  mt-2"><i class="fa-brands fa-xbox fa-xs"></i> Console</h4>
            <a href="" style={{textDecoration: "none"}}>Portfolio</a>
            <br/>
            <a href="" style={{textDecoration: "none"}}>Corporate actions
</a> <br/>
            <a href="" style={{textDecoration: "none"}}>Funds statement</a> <br/>
            <a href="" style={{textDecoration: "none"}}>Reports</a> <br/>
            <a href="" style={{textDecoration: "none"}}>Profile
 </a> <br/>
        </div>




        <div className="col-4 mt-5 px-5" style={{lineHeight:"2.5"}}>
          <h4 className="mb-5 fs-5  mt-2"><i class="fa-solid fa-cent-sign fs-xs"></i> Coins</h4>
            <a href="" style={{textDecoration: "none"}}>Mutual funds
</a>
            <br/>
            <a href="" style={{textDecoration: "none"}}>National Pension Scheme (NPS)
</a> <br/>
            <a href="" style={{textDecoration: "none"}}>Fixed Deposit (FD)</a> <br/>
            <a href="" style={{textDecoration: "none"}}>Features on Coin
</a> <br/>
            <a href="" style={{textDecoration: "none"}}>Payments and Orders</a> <br/>
            <a href="" style={{textDecoration: "none"}}>General</a> <br/>
        </div>


      </div>
    </div>
  );
}

export default CreateTicket;
