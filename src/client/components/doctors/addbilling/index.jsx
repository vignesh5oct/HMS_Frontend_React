import React from "react";
import { Link } from "react-router";
import IMG01 from "../../../assets/images/patient.jpg";
import Header from "../../header";
import Footer from "../../footer";
import StickyBox from "react-sticky-box";

const AddBilling = (props) => {
  return (
    <div>
      <Header {...props} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Add Billing</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home-1">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Add Billing
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox>
                <div className="card widget-profile pat-widget-profile">
                  <div className="card-body">
                    <div className="pro-widget-content">
                      <div className="profile-info-widget">
                        <Link className="booking-doc-img">
                          <img src={IMG01} alt="User" />
                        </Link>
                        <div className="profile-det-info">
                          <h3>
                            <Link to="doctor/patient-profile">
                              Richard Wilson
                            </Link>
                          </h3>
                          <div className="patient-details">
                            <h5>
                              <b>Patient ID :</b> PT0016
                            </h5>
                            <h5 className="mb-0">
                              <i className="fas fa-map-marker-alt"></i> Newyork,
                              USA
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="patient-info">
                      <ul>
                        <li>
                          Phone <span>+1 952 001 8563</span>
                        </li>
                        <li>
                          Age <span>38 Years, Male</span>
                        </li>
                        <li>
                          Blood Group <span>AB+</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </StickyBox>
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Add Billing</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="biller-info">
                        <h4 className="d-block">Dr. Darren Elder</h4>
                        <span className="d-block text-sm text-muted">
                          Dentist
                        </span>
                        <span className="d-block text-sm text-muted">
                          Newyork, United States
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6 text-sm-end">
                      <div className="billing-info">
                        <h4 className="d-block">1 November 2019</h4>
                        <span className="d-block text-muted">#INV0001</span>
                      </div>
                    </div>
                  </div>

                  <div className="add-more-item text-end">
                    <Link to="#0">
                      <i className="fas fa-plus-circle"></i> Add Item
                    </Link>
                  </div>

                  <div className="card card-table">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center">
                          <thead>
                            <tr>
                              <th style={{ minWidth: 200 }}>Title</th>
                              <th style={{ minWidth: 200 }}>Amount</th>
                              <th style={{ width: 80 }} />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <input type="text" className="form-control" />
                              </td>
                              <td>
                                <input type="text" className="form-control" />
                              </td>
                              <td>
                                <Link className="btn bg-danger-light trash">
                                  <i className="isax isax-trash"></i>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input type="text" className="form-control" />
                              </td>
                              <td>
                                <input type="text" className="form-control" />
                              </td>
                              <td>
                                <Link className="btn bg-danger-light trash">
                                  <i className="isax isax-trash"></i>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 text-end">
                      <div className="signature-wrap">
                        <div className="signature">Click here to sign</div>
                        <div className="sign-name">
                          <p className="mb-0">( Dr. Darren Elder )</p>
                          <span className="text-muted">Signature</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="submit-section">
                        <button
                          type="submit"
                          className="btn btn-primary submit-btn">
                          Save
                        </button>
                        <button
                          type="reset"
                          className="btn btn-secondary submit-btn">
                          Clear
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default AddBilling;
