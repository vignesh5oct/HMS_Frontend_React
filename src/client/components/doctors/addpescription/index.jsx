import React from "react";
import Footer from "../../footer";
import PatientSidebar from "../patienttsidebar";
import Header from "../../header";
import { Link } from "react-router";

const AddPescription = (props) => {
  return (
    <div>
      <Header {...props} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Add Prescription</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home-1">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Add Prescription
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
              <div className="profile-sidebar">
                <PatientSidebar />
              </div>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Add Prescription</h4>
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
                              <th style={{ minWwidth: "200p" }}>Name</th>
                              <th style={{ minWidth: "80px" }}>Quantity</th>
                              <th style={{ minWidth: "80px" }}>Days</th>
                              <th style={{ minwWidth: "100px" }}>Time</th>
                              <th style={{ minWidth: "80px" }}></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <input className="form-control" type="text" />
                              </td>
                              <td>
                                <input className="form-control" type="text" />
                              </td>
                              <td>
                                <input className="form-control" type="text" />
                              </td>
                              <td>
                                <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                    />{" "}
                                    Morning
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                    />{" "}
                                    Afternoon
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                    />{" "}
                                    Evening
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <label className="form-check-label">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                    />{" "}
                                    Night
                                  </label>
                                </div>
                              </td>
                              <td>
                                <Link
                                  to="#0"
                                  className="btn bg-danger-light trash"
                                >
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
                          className="btn btn-primary submit-btn"
                        >
                          Save
                        </button>
                        <button
                          type="reset"
                          className="btn btn-secondary submit-btn"
                        >
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

export default AddPescription;
