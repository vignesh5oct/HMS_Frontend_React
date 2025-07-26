import React, { useState } from "react";
import { Link } from "react-router";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import AuthenticationHeader from "../../authiticationHeader";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
const LoginEmail = () => {
  // let inputRef = useRef();
  const config = "/react/template";
  // const showIcon = () => (
  //   <i aria-hidden="true">
  //     <FeatherIcon icon="eye" style={{ width: "16px" }} />
  //   </i>
  // );
  // const hideIcon = () => (
  //   <i className="feather feather-eye-slash" aria-hidden="true">
  //     <FeatherIcon icon="eye-off" style={{ width: "16px" }} />
  //   </i>
  // );
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  return (
    <>
      {/* Page Content */}
      <div className="login-content-info">
        <div className="container">
          {/* Login Email */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="account-content">
                <div className="account-info">
                  <div className="login-title">
                    <h3>Sign in</h3>
                    <p>We'll send a confirmation code to your email.</p>
                    <span>
                      Sign in with <Link to="/pages/login-phone">Phone Number</Link>
                    </span>
                  </div>
                  <form>
                    <div className="mb-3">
                      <label className="form-label">E-mail</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <div className="form-group-flex">
                        <label className="form-label">Password</label>
                        <Link to="/pages/forgot-password" className="forgot-link">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="pass-group">
                        <input
                          type={isPasswordVisible ? "text" : "password"}
                          className="form-control pass-input-sub"
                        />
                        <span
                          className={`feather toggle-password-sub ${isPasswordVisible ? "feather-eye" : "feather-eye-off"
                            }`}
                          onClick={togglePasswordVisibility}
                        />
                      </div>
                    </div>
                    <div className="mb-3 form-check-box">
                      <div className="form-group-flex">
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="remember"
                            defaultChecked=""
                          />
                          <label className="form-check-label" htmlFor="remember">
                            Remember Me
                          </label>
                        </div>
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="remember1"
                          />
                          <label className="form-check-label" htmlFor="remember1">
                            Login with OTP
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <Link to='/pages/email-otp'
                        className="btn btn-primary-gradient w-100"
                      >
                        Sign in
                      </Link>
                    </div>
                    <div className="login-or">
                      <span className="or-line" />
                      <span className="span-or">or</span>
                    </div>
                    <div className="social-login-btn">
                      <Link to="#" className="btn w-100">
                        <ImageWithBasePath
                          src="assets/img/icons/google-icon.svg"
                          alt="google-icon"
                        />
                        Sign in With Google
                      </Link>
                      <Link to="#" className="btn w-100">
                      <ImageWithBasePath
                          src="assets/img/icons/facebook-icon.svg"
                          alt="fb-icon"
                        />
                        Sign in With Facebook
                      </Link>
                    </div>
                    <div className="account-signup">
                      <p>
                        Don't have an account ? <Link to="/signup">Sign up</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Login Email */}
        </div>
      </div>
      {/* /Page Content */}
    </>

  );
};

export default LoginEmail;
