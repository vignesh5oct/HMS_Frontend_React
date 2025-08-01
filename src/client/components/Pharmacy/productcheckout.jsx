import React from "react";
import StickyBox from "react-sticky-box";
import { Link } from "react-router";
import Header from "../header";
import Footer from "../footer";
import ImageWithBasePath from "../../../core/img/imagewithbasebath";

const ProductCheckout = (props) => {
  const config = "/react/template";

  return (
    <div className="main-wrapper">
      <Header {...props} />
      <>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">
                        <i className="isax isax-home-15" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Patient
                    </li>
                    <li className="breadcrumb-item active">Checkout</li>
                  </ol>
                  <h2 className="breadcrumb-title">Checkout</h2>
                </nav>
              </div>
            </div>
          </div>
          <div className="breadcrumb-bg">
            <ImageWithBasePath
              src="assets/img/bg/breadcrumb-bg-01.png"
              alt="img"
              className="breadcrumb-bg-01"
            />
            <ImageWithBasePath
              src="assets/img/bg/breadcrumb-bg-02.png"
              alt="img"
              className="breadcrumb-bg-02"
            />
            <ImageWithBasePath
              src="assets/img/bg/breadcrumb-icon.png"
              alt="img"
              className="breadcrumb-bg-03"
            />
            <ImageWithBasePath
              src="assets/img/bg/breadcrumb-icon.png"
              alt="img"
              className="breadcrumb-bg-04"
            />
          </div>
        </div>
        {/* /Breadcrumb */}
      </>


      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-7">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Billing details</h3>
                </div>
                <div className="card-body">
                  {/* Checkout Form */}
                  <form action={`${config}/Pharmacy/payment-success`}>
                    {/* Personal Information */}
                    <div className="info-widget">
                      <h4 className="card-title">Personal Information</h4>
                      <div className="row">
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>First Name</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>Last Name</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>Email</label>
                            <input className="form-control" type="email" />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>Phone</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="exist-customer">
                        Existing Customer?{" "}
                        <Link to="#">Click here to login</Link>
                      </div>
                    </div>
                    {/* /Personal Information */}
                    {/* Shipping Details */}
                    <div className="info-widget">
                      <h4 className="card-title">Shipping Details</h4>
                      <div className="terms-accept">
                        <div className="custom-checkbox">
                          <input type="checkbox" id="terms_accept" />
                          <label htmlFor="terms_accept">
                            Ship to a different address?
                          </label>
                        </div>
                      </div>
                      <div className="form-group card-label">
                        <label className="pl-0 ms-0 mb-2">
                          Order notes (Optional)
                        </label>
                        <textarea
                          rows={5}
                          className="form-control"
                          name="shipping"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    {/* /Shipping Details */}
                    <div className="payment-widget">
                      <h4 className="card-title">Payment Method</h4>
                      {/* Credit Card Payment */}
                      <div className="payment-list">
                        <label className="payment-radio credit-card-option">
                          <input type="radio" name="radio" defaultChecked />
                          <span className="checkmark" />
                          Credit card
                        </label>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group card-label">
                              <label htmlFor="card_name">Name on Card</label>
                              <input
                                className="form-control"
                                id="card_name"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group card-label">
                              <label htmlFor="card_number">Card Number</label>
                              <input
                                className="form-control"
                                id="card_number"
                                placeholder="1234  5678  9876  5432"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group card-label">
                              <label htmlFor="expiry_month">Expiry Month</label>
                              <input
                                className="form-control"
                                id="expiry_month"
                                placeholder="MM"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group card-label">
                              <label htmlFor="expiry_year">Expiry Year</label>
                              <input
                                className="form-control"
                                id="expiry_year"
                                placeholder="YY"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group card-label">
                              <label htmlFor="cvv">CVV</label>
                              <input
                                className="form-control"
                                id="cvv"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Credit Card Payment */}
                      {/* Paypal Payment */}
                      <div className="payment-list">
                        <label className="payment-radio paypal-option">
                          <input type="radio" name="radio" />
                          <span className="checkmark" />
                          Paypal
                        </label>
                      </div>
                      {/* /Paypal Payment */}
                      {/* Terms Accept */}
                      <div className="terms-accept">
                        <div className="custom-checkbox">
                          <input type="checkbox" id="terms_accept1" />
                          <label htmlFor="terms_accept1">
                            I have read and accept{" "}
                            <Link to="#">Terms &amp; Conditions</Link>
                          </label>
                        </div>
                      </div>
                      {/* /Terms Accept */}
                      {/* Submit Section */}
                      <div className="submit-section mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary submit-btn"
                        >
                          Confirm and Pay
                        </button>
                      </div>
                      {/* /Submit Section */}
                    </div>
                  </form>
                  {/* /Checkout Form */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                {/* Booking Summary */}
                <div className="card booking-card">
                  <div className="card-header">
                    <h3 className="card-title">Your Order</h3>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-center mb-0">
                        <tbody>
                          <tr>
                            <th>Product</th>
                            <th className="text-end">Total</th>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td>
                              Safi Natural Blood Purifier Syrup 200 ml
                              Manufactured By Hamdard (Wakf) Laboratories
                            </td>
                            <td className="text-end">$200</td>
                          </tr>
                          <tr>
                            <td>Safi Natural Blood Purifier Syrup 200 ml</td>
                            <td className="text-end">$200</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="booking-summary pt-5">
                      <div className="booking-item-wrap">
                        <ul className="booking-date d-block pb-0">
                          <li>
                            Subtotal <span>$5,877.00</span>
                          </li>
                          <li>
                            Shipping <span>$25.00</span>
                          </li>
                        </ul>
                        <ul className="booking-fee">
                          <li>
                            Tax <span>$0.00</span>
                          </li>
                        </ul>
                        <div className="booking-total">
                          <ul className="booking-total-list">
                            <li>
                              <span>Total</span>
                              <span className="total-cost">$160</span>
                            </li>
                            <li></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Booking Summary */}
              </StickyBox>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer {...props} />
    </div>
  );
};

export default ProductCheckout;
