import React, { useState } from "react";
import StickyBox from "react-sticky-box";
import { Product } from "./image";
import { Link } from "react-router";
import Header from "../header";
import Footer from "../footer";
import ImageWithBasePath from "../../../core/img/imagewithbasebath";

const ProductDescription = (props) => {
  const [value, setValue] = useState(10);
  const handleClickPlus = () => {
    setValue(value + 1);
  };
  const handleClickMinus = () => {
    setValue(value - 1);
  };
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
                      Pharmacy
                    </li>
                    <li className="breadcrumb-item active">Product Description</li>
                  </ol>
                  <h2 className="breadcrumb-title">Product Description</h2>
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 col-lg-9 col-xl-9">
              {/* Doctor Widget */}
              <div className="card">
                <div className="card-body product-description">
                  <div className="doctor-widget">
                    <div className="doc-info-left">
                      <div className="doctor-img1">
                        <img
                          src={Product}
                          className="img-fluid"
                          alt="User Image"
                        />
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name mb-2">Benzaxapine Croplex</h4>
                        <p>
                          <span className="text-muted">Manufactured By </span>{" "}
                          Hamdard (Wakf) Laboratories
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industrys standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled
                        </p>
                        <div className="feature-product pt-4">
                          <span>Applied for:</span>
                          <ul>
                            <li>Moisturization &amp; Nourishment</li>
                            <li>Blackhead Removal</li>
                            <li>Anti-acne &amp; Pimples</li>
                            <li>Whitening &amp; Fairness</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Widget */}
              {/* Doctor Details Tab */}
              <div className="card">
                <div className="card-body pt-0">
                  {/* Tab Menu */}
                  <h3 className="pt-4">Product Details</h3>
                  <hr />
                  {/* /Tab Menu */}
                  {/* Tab Content */}
                  <div className="tab-content pt-3">
                    {/* Overview Content */}
                    <div
                      role="tabpanel"
                      id="doc_overview"
                      className="tab-pane fade show active"
                    >
                      <div className="row">
                        <div className="col-md-9">
                          {/* About Details */}
                          <div className="widget about-widget">
                            <h4 className="widget-title">Description</h4>
                            <p>
                              Safi syrup is best for purifying the blood. As it
                              contains herbal extracts it can cure indigestion,
                              constipation, nose bleeds and acne boils. It helps
                              in the removal of the toxins from the blood. It
                              improves the complexion and gives you a healthy
                              life
                            </p>
                          </div>
                          {/* /About Details */}
                          {/* Awards Details */}
                          <div className="widget awards-widget">
                            <h4 className="widget-title">Highlights</h4>
                            <div className="experience-box">
                              <ul className="experience-list">
                                <li>
                                  <div className="experience-user">
                                    <div className="before-circle" />
                                  </div>
                                  <div className="experience-content">
                                    <div className="timeline-content">
                                      <p>
                                        Safi syrup is known for its best
                                        purifying syrup for blood.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="experience-user">
                                    <div className="before-circle" />
                                  </div>
                                  <div className="experience-content">
                                    <div className="timeline-content">
                                      <p>
                                        It helps in eliminating the toxins from
                                        the bloodstream.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="experience-user">
                                    <div className="before-circle" />
                                  </div>
                                  <div className="experience-content">
                                    <div className="timeline-content">
                                      <p>It improves digestion.</p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="experience-user">
                                    <div className="before-circle" />
                                  </div>
                                  <div className="experience-content">
                                    <div className="timeline-content">
                                      <p>
                                        It also helps in indigestion and
                                        constipation.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* /Awards Details */}
                          {/* About Details */}
                          <div className="widget about-widget">
                            <h4 className="widget-title">Directions for use</h4>
                            <p>
                              Adults: Take 2 tablespoons once a day in a glass
                              full of water.
                            </p>
                          </div>
                          {/* /About Details */}
                          {/* About Details */}
                          <div className="widget about-widget">
                            <h4 className="widget-title">Storage</h4>
                            <p>
                              Store this syrup at room temperature protected
                              from sunlight, heat, and moisture. Keep away from
                              reaching out of children and pets. Ensure that the
                              unused medicine is disposed of properly.
                            </p>
                          </div>
                          {/* /About Details */}
                          {/* About Details */}
                          <div className="widget about-widget">
                            <h4 className="widget-title">
                              Administration Instructions
                            </h4>
                            <p>
                              Shake the bottle before its use. This syrup can be
                              taken with or without food. The quantity consumed
                              should not be lesser or greater than the
                              prescribed one.
                            </p>
                          </div>
                          {/* /About Details */}
                          {/* About Details */}
                          <div className="widget about-widget">
                            <h4 className="widget-title">Warning</h4>
                            <p>
                              This is not recommended for the pregnant women and
                              lactating mothers.
                            </p>
                          </div>
                          {/* /About Details */}
                          {/* About Details */}
                          <div className="widget about-widget mb-3">
                            <h4 className="widget-title">Precaution</h4>
                            <p className="mb-0">
                              Syrup has to be disposed of properly after 3 years
                              from manufactured date and it is not recommended
                              to use after the date.
                            </p>
                          </div>
                          {/* /About Details */}
                        </div>
                      </div>
                    </div>
                    {/* /Overview Content */}
                  </div>
                </div>
              </div>
              {/* /Doctor Details Tab */}
            </div>
            <div className="col-md-5 col-lg-3 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                {/* Right Details */}
                <div className="card search-filter">
                  <div className="card-body">
                    <div className="clini-infos mt-0">
                      <h2>
                        $19 <b className="text-lg strike">$45</b>{" "}
                        <span className="text-lg text-success">
                          <b>10% off</b>
                        </span>
                      </h2>
                    </div>
                    <span className="badge badge-primary">In stock</span>
                    <div className="custom-increment pt-4">
                      <div className="input-group1">
                        <span className="input-group-btn float-start">
                          <button
                            type="button"
                            onClick={handleClickMinus}
                            className="quantity-left-minus btn btn-danger btn-number"
                            data-type="minus"
                            data-field
                          >
                            <span>
                              <i className="fas fa-minus" />
                            </span>
                          </button>
                        </span>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={value}
                          className=" input-number"
                          defaultValue={10}
                        />
                        <span className="input-group-btn float-end">
                          <button
                            type="button"
                            onClick={handleClickPlus}
                            className="quantity-right-plus btn btn-success btn-number"
                            data-type="plus"
                            data-field
                          >
                            <span>
                              <i className="fas fa-plus" />
                            </span>
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="clinic-details mt-4">
                      <div className="clinic-booking">
                        <Link className="apt-btn" to="/Pharmacy/cart">
                          Add To Cart
                        </Link>
                      </div>
                    </div>
                    <div className="card flex-fill mt-4 mb-0">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          SKU <span className="float-end">201902-0057</span>
                        </li>
                        <li className="list-group-item">
                          Pack Size <span className="float-end">100g</span>
                        </li>
                        <li className="list-group-item">
                          Unit Count <span className="float-end">200ml</span>
                        </li>
                        <li className="list-group-item">
                          Country <span className="float-end">Japan</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card search-filter">
                  <div className="card-body">
                    <div className="card flex-fill mt-0 mb-0">
                      <ul className="list-group list-group-flush benifits-col">
                        <li className="list-group-item d-flex align-items-center">
                          <div>
                            <i className="fas fa-shipping-fast" />
                          </div>
                          <div>
                            Free Shipping
                            <br />
                            <span className="text-sm">For orders from $50</span>
                          </div>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                          <div>
                            <i className="far fa-question-circle" />
                          </div>
                          <div>
                            Support 24/7
                            <br />
                            <span className="text-sm">Call us anytime</span>
                          </div>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                          <div>
                            <i className="fas fa-hands" />
                          </div>
                          <div>
                            100% Safety
                            <br />
                            <span className="text-sm">
                              Only secure payments
                            </span>
                          </div>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                          <div>
                            <i className="fas fa-tag" />
                          </div>
                          <div>
                            Hot Offers
                            <br />
                            <span className="text-sm">Discounts up to 90%</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Right Details */}
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

export default ProductDescription;
