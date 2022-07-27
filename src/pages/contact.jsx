import React from "react";
import Layout from "../components/layout/layout";
function Contact() {
  return (
    <div>
      <Layout>
        <div className="container py-4">
          <p className=" lh-lg fw-bold h4">Contact Us</p>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <form id="contactForm">
                <div className="mb-3">
                  <label className="form-label" for="name">
                    Name
                  </label>
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Name"
                    data-sb-validations="required"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" for="emailAddress">
                    Email Address
                  </label>
                  <input
                    className="form-control"
                    id="emailAddress"
                    type="email"
                    placeholder="Email Address"
                    data-sb-validations="required, email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" for="message">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    type="text"
                    placeholder="Message"
                    style={{ "height": "10rem" }}
                    data-sb-validations="required"
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button className="btn btn-primary btn-lg" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="row">
                <div className="col-12 border">
                  <span className="fw-bold">Visit Us :</span>
                  <p>Example.com</p>
                </div>
                <div className="col-12 border mt-3">
                <span className="fw-bold">Phone :</span>
                  <p>+91 637217831</p>
                </div>
                <div className="col-12 border mt-3">
                <span className="fw-bold">Visit Us :</span>
                  <p>Example.com <br></br>Box 564, Disneyland<br></br>USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Contact;
