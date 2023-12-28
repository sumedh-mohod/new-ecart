import React from "react";

const Signup = () => {
  return (
    <div className="container mt-4">
      <div className="card text-bark">
        <img src="/assets/bbb.jpg" className="card-img" alt="..." />
        <div className="card-img-overlay">
        <h2 className="card-title mt-3 mb-5 text-center">Registration Form</h2>
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="col-12">
              <label for="inputAddress2" className="form-label">
                Address 2
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="col-md-6">
              <label for="inputCity" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-2">
              <label for="inputZip" className="form-label">
                Zip
              </label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-outline-dark">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
