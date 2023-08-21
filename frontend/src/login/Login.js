// import React, { useState } from "react";
// import styled from "styled-components";

// export const Login = () => {
//   const [data, setData] = useState({
//     username: "",
//     password: "",
//   });
//   const { username, password } = data;

//   const changehandler = (e) => {
//     setData({ ...data, [e.target.name]: [e.target.value] });
//   };
//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(data);
//   };
//   return (
//     <Wrapper>
//       <section className="login">
//         <div className="container box">
//           <div className="login-box">
//             <h3>Login</h3>

//             <form className="form" onSubmit={submitHandler}>
//               <span>Username or email address *</span>
//               <input
//                 type="text"
//                 name={username}
//                 required
//                 onChange={changehandler}
//               />
//               <span>Password *</span>
//               <input
//                 type="password"
//                 name={password}
//                 required
//                 onChange={changehandler}
//               />
//               <button className="btn button" type="submit">
//                 Log in
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .login {
//     background-image: url("https://img.freepik.com/premium-vector/blue-background-with-abstract-pattern_573652-1365.jpg?w=900");
//     background-size: cover;
//     background-repeat: no-repeat;

//     .box {
//       padding: 50px 0;
//       .login-box {
//         align-items: center;
//         justify-content: center;
//         display: flex;
//         flex-direction: column;
//         gap: 20px;
//         h3 {
//           color: ${({ theme }) => theme.colors.white};
//           font-family: "Montserrat Alternates", sans-serif;
//         }
//         .form {
//           background-image: url("/project-konnect/images/k-10.png");
//           background-size: cover;
//           background-repeat: no-repeat;
//           background-color: white;
//           display: flex;
//           flex-direction: column;
//           padding: 50px;
//           border-radius: 15px;
//           width: 40%;
//           box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
//           input {
//             border-radius: 5px;
//             border: none;
//             height: 35px;
//             background-color: ${({ theme }) => theme.colors.primary90};
//           }
//           span {
//             color: ${({ theme }) => theme.colors.secondary};
//             font-size: 1rem;
//             font-weight: 500;
//             margin: 15px 0 5px;
//           }
//           button {
//             border: none;
//             align-items: center;
//             margin-top: 25px;
//             width: 100px;
//             color: ${({ theme }) => theme.colors.white};
//             background-color: ${({ theme }) => theme.colors.secondary};
//           }
//         }
//       }
//     }
//   }
// `;


// ----------------------------------------------------
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://konnectserver.infocusrx.work/login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
        } else {
          alert(res.data.Error);
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <section className="p-5">
      <div className="container p-5 h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="SampleImg"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <div>
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-bold mb-0 me-3">Sign in with</p>
            <button
              type="button"
              className="btn btn-primary btn-floating mx-1"
              style={{ borderRadius: "20px" }}
            >
              <i className="fab fa-facebook-f  text-white"></i>
            </button>

            <button
              type="button"
              className="btn btn-primary btn-floating mx-1"
              style={{ borderRadius: "20px" }}
            >
              <i className="fab fa-twitter text-white"></i>
            </button>

            <button
              type="button"
              className="btn btn-primary btn-floating mx-1"
              style={{ borderRadius: "20px" }}
            >
              <i className="fab fa-linkedin-in text-white"></i>
            </button>
          </div>

          <div className="my-4">
            <hr />
            <p className="fw-bold mx-3 mb-0" style={{ background: "white" }}>
              Or
            </p>
            <hr />
          </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-2">
                <input
                  type="email"
                  className="form-control form-control-md"
                  placeholder="Enter a valid email address"
                  onChange={ e => setValues({...values, email: e.target.value}) }
                />
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  className="form-control form-control-md"
                  placeholder="Enter password"
                  onChange={ e => {setValues({...values, password: e.target.value})}}
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-md btn-block w-100"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <Link to="/register" className="link-danger">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

