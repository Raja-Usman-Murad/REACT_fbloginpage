import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-4 justify-content-center">
          <h1 id="heading" className="text-primary">
            facebook
          </h1>
          <p id="headpara">
            Connect with friends and the world around you on Facebook.
          </p>
        </div>
        <div className="col-lg-4 col-sm-12">
          <form id="form">
            <input id="input" type="text" className="form-control" />
            <input id="input" type="password" className="form-control" />
            <button className="btn btn-primary w-100">Log In</button>
            <br />
            <a href="#" className="text-center d-block mt-3">
              Forgot Password
            </a>
            <hr />
            <button className="btn btn-success d-block m-auto">
              Create New Account
            </button>
          </form>
          <p className="text-center">
            <a href="#">
              <b>Create a Page</b>
            </a>{" "}
            for a celebrity, band or business.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
