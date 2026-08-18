import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 fs-3 mb-4">404 Not Found</h1>
        <p className="mb-2">The page you are looking for does not exist.</p>
        <p>
          Visit {""}
          <Link to="/">Zerodha’s home page</Link>
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
