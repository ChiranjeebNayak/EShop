import React from "react";

function Address() {
  return (
    <div className="container p-3">
      <div className="card mb-4">
        <div className="card-header py-3">
          <h5 className="mb-0 text-font text-uppercase">Delivery address</h5>
        </div>
        <div className="card-body">
          <form>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form11Example1"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form11Example1">
                    First name
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form11Example2"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form11Example2">
                    Last name
                  </label>
                </div>
              </div>
            </div>
            {/* <div className="form-outline mb-4">
              <input type="text" id="form11Example3" className="form-control" />
              <label className="form-label" htmlFor="form11Example3">
                Company name
              </label>
            </div> */}

            <div className="form-outline mb-4">
              <input type="text" id="form11Example4" className="form-control" />
              <label className="form-label" htmlFor="form11Example4">
                Address
              </label>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form11Example1"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form11Example1">
                    City
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form11Example2"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form11Example2">
                    State
                  </label>
                </div>
              </div>
            </div>
            <div className="form-outline mb-4">
              <input type="number" id="form11Example4" className="form-control" />
              <label className="form-label" htmlFor="form11Example4">
                Pincode
              </label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="number"
                id="form11Example6"
                className="form-control"
              />
              <label className="form-label" htmlFor="form11Example6">
                Phone
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center">
        <button type="button" className="btn btn-success col-md-10">
          Place order
        </button>
      </div>
    </div>
  );
}

export default Address;
