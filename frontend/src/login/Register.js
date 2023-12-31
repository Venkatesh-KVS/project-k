import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";


export const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });
  // const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // axios.post("https://konnectserver.infocusrx.work/register", {values})
    axios.post("http://localhost:3210/register", {values})
        .then(response => {
            console.log(response.data);
            // navigate("/login");
        })
        .catch(err => {
            console.log(err);
        });
  }
  
  return (
    <>
      <Wrapper className="p-5">
        <div className="container mainSec">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-12 col-xl-11">
              <div className="">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <h1 className="fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up</h1>

                      <form onSubmit={handleSubmit} className="mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" name="name" className="form-control" placeholder="Your Name"
                              onChange={e => setValues({...values, name: e.target.value})}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" className="form-control" placeholder="Your Email"
                              onChange={e => setValues({...values, email: e.target.value})}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" className="form-control" placeholder="Password" 
                              onChange={e => setValues({...values, password: e.target.value})}
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-end mb-3 mb-lg-4  ">
                          <button type="submit" className="btn btn-primary btn-md btn-block w-100">Register</button>
                        </div>

                        <div>
                          <p className="small fw-bold text-center mt-2 pt-1 mb-0">
                            Already a User? 
                            <Link to="/login" className="link-danger">Login</Link>
                          </p>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Register;

const Wrapper = styled.section`
.mainSec{
  margin: auto;
  background: white;
  background-size: "500px";
  background-position: "center center";
  background-repeat: "no-repeat";
  box-shadow: rgba(50, 50, 93, 0.1) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px;
  border-radius: 10px;
}
`


