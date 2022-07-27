import React from 'react'
import Layout from '../components/layout/layout';
import img from '../assets/grocery.png'
import SignUp from '../components/register/signup';
function Landing() {
  return (
    <div>
      <Layout>
        <div className='container-fluid '>
          <section  style={{ "backgroundColor": "#eee" }}>
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black" style={{ "borderRadius": "25px" }}>
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center">

                          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                            className="img-fluid" />

                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-5">

                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                          <form className="mx-1 mx-md-4">
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input type="email" id="form3Example3c" className="form-control" />
                                <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input type="password" id="form3Example4c" className="form-control" />
                                <label className="form-label" htmlFor="form3Example4c">Password</label>
                              </div>
                            </div>

                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button type="button" className="btn btn-primary btn-lg">Register</button>
                            </div>


                            <div className="form-check d-flex justify-content-center mb-5">
                              <label className="form-check-label" htmlFor="form2Example3">
                                New to our family ? <a href="register">Join US!!</a>
                              </label>
                            </div>
                          </form>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  )
}

export default Landing