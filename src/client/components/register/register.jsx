import React, { useEffect ,useState } from "react";
import { Link } from "react-router";
// import loginBanner from "../../assets/images/login-banner.png";
import loginBanner from "../../assets/images/login-banner.png";
import Header from "../header";
import Footer from "../footer";
import { Button } from "antd";

const Register = (props) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits"; 
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.confirm_password !== formData.password) {
      newErrors.confirm_password = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

     const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      confirm_password: formData.confirm_password,
    };

    try {
      const res = await fetch("http://localhost:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Registered successfully");
        // Optionally redirect to login
      } else {
        alert("Registration failed: " + JSON.stringify(data));
      }
    } catch (error) {
      console.error("Register error:", error);
      alert("Error occurred. Please try again later.");
    }
  };


  useEffect(() => {
    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);



  return (
    <>
      <Header {...props} />

      <>
        {/* Page Content */}
        <div className="content top-space">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Register Content */}
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6 login-left">
                      <img
                        src={loginBanner}
                        className="img-fluid"
                        alt="Doccure Register"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>
                          Patient Register{" "}
                          <Link to="/doctor/doctor-register">
                            Are you a Doctor?
                          </Link>
                        </h3>
                      </div>
                      {/* Register Form */}
                      <form onSubmit={handleSubmit}>
                        <div className="form-group form-focus">
                          <input
                            type="text" name="name" value={formData.name} onChange={handleChange}
                            className="form-control floating"
                          />
                          <label className="focus-label">Name</label>
                          {errors.name && <small className="text-danger">{errors.name}</small>}
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="text" name="phone" maxLength={10} value={formData.phone} onChange={handleChange}
                            className="form-control floating"
                          />
                          <label className="focus-label">Mobile Number</label>
                          {errors.phone && <small className="text-danger">{errors.phone}</small>}
                        </div>

                         <div className="form-group form-focus">
                          <input
                            type="text" name="email" value={formData.email} onChange={handleChange}
                            className="form-control floating"
                          />
                          <label className="focus-label">Email</label>
                          {errors.email && <small className="text-danger">{errors.email}</small>}
                        </div>

                        <div className="form-group form-focus">
                          <input
                            type="password" name="password" value={formData.password} onChange={handleChange}
                            className="form-control floating"
                          />
                          <label className="focus-label">Password</label>
                          {errors.password && <small className="text-danger">{errors.password}</small>}
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="password" name="confirm_password" value={formData.confirm_password} onChange={handleChange}
                            className="form-control floating"
                          />
                          <label className="focus-label">Confirm Password</label>
                          {errors.confirm_password && <small className="text-danger">{errors.confirm_password}</small>}
                        </div>
                        <div className="text-end">
                          <Link className="forgot-link" to="/login">
                            Already have an account?
                          </Link>
                        </div>
                        {/* <Link 
                          to="/patient/patientregisterstep-1"
                          className="btn btn-primary w-100 btn-lg login-btn"
                          type="submit"
                        >
                          Signup
                        </Link> */}
                        <button 
                          className="btn btn-primary w-100 btn-lg login-btn"
                          type="submit"
                        >
                          Signup
                        </button>
                        <div className="login-or">
                          <span className="or-line" />
                          <span className="span-or">or</span>
                        </div>
                        <div className="row form-row social-login">
                          <div className="col-6">
                            <Link to="#" className="btn btn-facebook w-100">
                              <i className="fab fa-facebook-f me-1" /> Login
                            </Link>
                          </div>
                          <div className="col-6">
                            <Link to="#" className="btn btn-google w-100">
                              <i className="fab fa-google me-1" /> Login
                            </Link>
                          </div>
                        </div>
                      </form>
                      {/* /Register Form */}
                    </div>
                  </div>
                </div>
                {/* /Register Content */}
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

export default Register;
