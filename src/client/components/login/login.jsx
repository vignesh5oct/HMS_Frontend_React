import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Header from "../header";
import Footer from "../footer";
import ImageWithBasePath from "../../../core/img/imagewithbasebath";
import { useNavigate } from "react-router";

const LoginContainer = (props) => {

  useEffect(() => {
    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);

  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const resData = await response.json();

      if (response.ok) {
        alert(resData.message || "Login successful!");
        navigate("/dashboard");
      } else {
        alert(resData.error || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while logging in.\n" + error.message);
    }
  };

  return (
    <>
      <Header {...props} />

      <>
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Login Tab Content */}
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6 login-left">
                      <ImageWithBasePath
                        src="assets/img/login-banner.png"
                        className="img-fluid"
                        alt="Doccure Login"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>
                          Login <span>Doccure</span>
                        </h3>
                      </div>
                      <form onSubmit={handleSubmit} action="/home">
                        <div className="mb-3">
                          <label className="form-label">E-mail</label>
                          <input
                            type="text"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {errors.email && (
                            <div className="text-danger">{errors.email}</div>
                          )}
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
                              // className="form-control pass-input-sub"
                              className={`form-control pass-input ${errors.password ? "is-invalid" : ""}`}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                              className={`feather toggle-password-sub ${isPasswordVisible ? "feather-eye" : "feather-eye-off"
                                }`}
                              onClick={togglePasswordVisibility}
                            />
                            {errors.password && (
                              <div className="text-danger mt-1">{errors.password}</div>
                            )}
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
                          <button
                            className="btn btn-primary-gradient w-100"
                            type="submit"
                          >
                            Sign in
                          </button>
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
                            Don't have an account ?{" "}
                            <Link to="/register">Sign up</Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* /Login Tab Content */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>


      <Footer {...props} />
    </>
  );
};

export default LoginContainer;
