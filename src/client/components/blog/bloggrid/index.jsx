import React from "react";
import { Link } from "react-router";
import StickyBox from "react-sticky-box";
//images
import {
  IMG01,
  IMG02,
  IMG03,
  IMG04,
  IMG05,
  IMG06,
  IMG_th01,
  IMG_th02,
  IMG_th03,
  IMG_th04,
  IMG_th05,
  IMG_th06,
} from "./img.jsx";
//components
import BlogListSearch from "../search/search.jsx";
import LastestBlog from "../lastestblog";
import CategoryWidget from "../categoryWidget";
import TagsWidget from "../tagswidget";
import Header from "../../header";
import Footer from "../../footer";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath.jsx";

const BlogGrid = (props) => {
  return (
    <div>
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
                    <li className="breadcrumb-item">Blogs</li>
                    <li className="breadcrumb-item active">Blog Grid</li>
                  </ol>
                  <h2 className="breadcrumb-title">Blog Grid</h2>
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

      <>
        {/* Page Content */}
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="row blog-grid-row">
                  <div className="col-md-6 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to="/blog/blog-grid">
                          <ImageWithBasePath
                            className="img-fluid"
                            src="assets/img/blog/blog-37.jpg"
                            alt="Post Image"
                          />
                        </Link>
                        <span className="badge badge-cyan category-slug">
                          Health Tips
                        </span>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <Link to="/patient/doctor-profile">
                                <ImageWithBasePath
                                  src="assets/img/patients/patient21.jpg"
                                  alt="Post Author"
                                />
                                <span>Arthur Hetzel</span>
                              </Link>
                            </div>
                          </li>
                          <li>
                            <i className="isax isax-calendar-1 me-1" />4 Dec 2025
                          </li>
                        </ul>
                        <h3 className="blog-title">
                          <Link to="/blog/blog-grid">
                            10 Tips for Maintaining a Healthy Lifestyle Year-Round
                          </Link>
                        </h3>
                        <p className="mb-0">
                          Discover practical, everyday tips to help you stay healthy
                          throughout the year.
                        </p>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to="/blog/blog-grid">
                          <ImageWithBasePath
                            className="img-fluid"
                            src="assets/img/blog/blog-32.jpg"
                            alt="Post Image"
                          />
                        </Link>
                        <span className="badge badge-cyan category-slug">
                          Awareness
                        </span>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <Link to="/patient/doctor-profile">
                                <ImageWithBasePath
                                  src="assets/img/patients/patient20.jpg"
                                  alt="Post Author"
                                />
                                <span>Robin Frost</span>
                              </Link>
                            </div>
                          </li>
                          <li>
                            <i className="isax isax-calendar-1 me-1" />
                            14 Apr 2025
                          </li>
                        </ul>
                        <h3 className="blog-title">
                          <Link to="/blog/blog-grid">
                            Understanding Common Symptoms: When to See a Doctor
                          </Link>
                        </h3>
                        <p className="mb-0">
                          Learn how to identify common symptoms and when it's
                          important to seek medical attention.
                        </p>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to="/blog/blog-grid">
                          <ImageWithBasePath
                            className="img-fluid"
                            src="assets/img/blog/blog-33.jpg"
                            alt="Post Image"
                          />
                        </Link>
                        <span className="badge badge-cyan category-slug">
                          Nutrition
                        </span>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <Link to="/patient/doctor-profile">
                                <ImageWithBasePath
                                  src="assets/img/patients/patient23.jpg"
                                  alt="Post Author"
                                />{" "}
                                <span>Alyce Buck</span>
                              </Link>
                            </div>
                          </li>
                          <li>
                            <i className="isax isax-calendar-1 me-1" />
                            21 May 2025
                          </li>
                        </ul>
                        <h3 className="blog-title">
                          <Link to="/blog/blog-grid">
                            Nutrition and Wellness: A Guide to Balanced Eating
                          </Link>
                        </h3>
                        <p className="mb-0">
                          Good nutrition is the foundation of wellness. Explore tips
                          for creating a balanced diet
                        </p>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to="/blog/blog-grid">
                          <ImageWithBasePath
                            className="img-fluid"
                            src="assets/img/blog/blog-34.jpg"
                            alt="Post Image"
                          />
                        </Link>
                        <span className="badge badge-cyan category-slug">
                          Prevention
                        </span>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <Link to="/patient/doctor-profile">
                                <ImageWithBasePath
                                  src="assets/img/patients/patient22.jpg"
                                  alt="Post Author"
                                />{" "}
                                <span>Bernadette Vogel</span>
                              </Link>
                            </div>
                          </li>
                          <li>
                            <i className="isax isax-calendar-1 me-1" />
                            11 May 2025
                          </li>
                        </ul>
                        <h3 className="blog-title">
                          <Link to="/blog/blog-grid">
                            Top Preventive Health Measures Everyone Should Take
                          </Link>
                        </h3>
                        <p className="mb-0">
                          Prevention is key to a long, healthy life. Discover the top
                          preventive health measures you can adopt.
                        </p>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to="/blog/blog-grid">
                          <ImageWithBasePath
                            className="img-fluid"
                            src="assets/img/blog/blog-35.jpg"
                            alt="Post Image"
                          />
                        </Link>
                        <span className="badge badge-cyan category-slug">
                          Wellness
                        </span>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <Link to="/patient/doctor-profile">
                                <ImageWithBasePath
                                  src="assets/img/patients/patient12.jpg"
                                  alt="Post Author"
                                />{" "}
                                <span>Gregory Johnson</span>
                              </Link>
                            </div>
                          </li>
                          <li>
                            <i className="isax isax-calendar-1 me-1" />
                            15 Jun 2025
                          </li>
                        </ul>
                        <h3 className="blog-title">
                          <Link to="/blog/blog-grid">
                            Mental Health Matters: Tips for Managing Stress and
                            Anxiety
                          </Link>
                        </h3>
                        <p className="mb-0">
                          Earn practical techniques to manage stress and anxiety, and
                          improve your emotional well-being.
                        </p>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* Blog Post */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to="/blog/blog-grid">
                          <ImageWithBasePath
                            className="img-fluid"
                            src="assets/img/blog/blog-36.jpg"
                            alt="Post Image"
                          />
                        </Link>
                        <span className="badge badge-cyan category-slug">
                          Technology
                        </span>
                      </div>
                      <div className="blog-content">
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <Link to="/patient/doctor-profile">
                                <ImageWithBasePath
                                  src="assets/img/patients/patient13.jpg"
                                  alt="Post Author"
                                />
                                <span>Teresa Baxter</span>
                              </Link>
                            </div>
                          </li>
                          <li>
                            <i className="isax isax-calendar-1 me-1" />
                            22 Jun 2025
                          </li>
                        </ul>
                        <h3 className="blog-title">
                          <Link to="/blog/blog-grid">
                            Advancements in Medical Technology: What’s New in
                            Healthcare?
                          </Link>
                        </h3>
                        <p className="mb-0">
                          From AI in diagnostics to cutting-edge treatments, discover
                          how innovation is use in healthcare.
                        </p>
                      </div>
                    </div>
                    {/* /Blog Post */}
                  </div>
                </div>
                {/* Blog Pagination */}
                <div className="row">
                  <div className="col-md-12">
                    {/* Pagination */}
                    <div className="pagination dashboard-pagination mt-md-3 mt-0 mb-4">
                      <ul>
                        <li>
                          <Link to="#" className="page-link prev">
                            Prev
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="page-link">
                            1
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="page-link active">
                            2
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="page-link">
                            3
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="page-link">
                            4
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="page-link next">
                            Next
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* /Pagination */}
                  </div>
                </div>
                {/* /Blog Pagination */}
              </div>
              {/* Blog Sidebar */}
              <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
                <StickyBox>
                  {/* Search */}
                  <div className="card search-widget">
                    <div className="card-body">
                      <form className="search-form">
                        <div className="input-group">
                          <input
                            type="text"
                            placeholder="Search..."
                            className="form-control"
                          />
                          <button type="submit" className="btn btn-primary">
                            <i className="isax isax-search-normal" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* /Search */}
                  {/* Latest Posts */}
                  <div className="card post-widget">
                    <div className="card-body">
                      <h5 className="mb-3">Latest News</h5>
                      <ul className="latest-posts">
                        <li>
                          <div className="post-thumb">
                            <Link to="/blog/blog-grid">
                              <ImageWithBasePath
                                className="img-fluid"
                                src="assets/img/blog/blog-thumb-11.jpg"
                                alt="blog-image"
                              />
                            </Link>
                          </div>
                          <div className="post-info">
                            <p>06 Nov 2025</p>
                            <h4>
                              <Link to="/blog/blog-grid">
                                Managing Chronic Conditions: Expert Advice for Better
                                Living
                              </Link>
                            </h4>
                          </div>
                        </li>
                        <li>
                          <div className="post-thumb">
                            <Link to="/blog/blog-grid">
                              <ImageWithBasePath
                                className="img-fluid"
                                src="assets/img/blog/blog-thumb-12.jpg"
                                alt="blog-image"
                              />
                            </Link>
                          </div>
                          <div className="post-info">
                            <p>15 Nov 2025</p>
                            <h4>
                              <Link to="/blog/blog-grid">
                                Understanding Common Symptoms: When to See a Doctor
                              </Link>
                            </h4>
                          </div>
                        </li>
                        <li>
                          <div className="post-thumb">
                            <Link to="/blog/blog-grid">
                              <ImageWithBasePath
                                className="img-fluid"
                                src="assets/img/blog/blog-thumb-13.jpg"
                                alt="blog-image"
                              />
                            </Link>
                          </div>
                          <div className="post-info">
                            <p>08 Dec 2025</p>
                            <h4>
                              <Link to="/blog/blog-grid">
                                Nutrition and Wellness: A Guide to Balanced Eating
                              </Link>
                            </h4>
                          </div>
                        </li>
                        <li>
                          <div className="post-thumb">
                            <Link to="/blog/blog-grid">
                              <ImageWithBasePath
                                className="img-fluid"
                                src="assets/img/blog/blog-thumb-14.jpg"
                                alt="blog-image"
                              />
                            </Link>
                          </div>
                          <div className="post-info">
                            <p>17 Dec 2025</p>
                            <h4>
                              <Link to="/blog/blog-grid">
                                Top Preventive Health Measures Everyone Should Take
                              </Link>
                            </h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Latest Posts */}
                  {/* Categories */}
                  <div className="card category-widget">
                    <div className="card-body">
                      <h5 className="mb-3">Categories</h5>
                      <ul className="categories">
                        <li>
                          <Link to="#">
                            Health Care <span>(2)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            Nutritions <span>(4)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            Health Tips <span>(5)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            Medical Research <span>(4)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            Health Treatment <span>(6)</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Categories */}
                  {/* Tags */}
                  <div className="card tags-widget">
                    <div className="card-body">
                      <h5 className="mb-3">Tags</h5>
                      <ul className="tags">
                        <li>
                          <Link to="#" className="tag">
                            Health Tips
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="tag">
                            Awareness
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="tag">
                            Health
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="tag">
                            Wellness
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="tag">
                            Treatments
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="tag">
                            Checkup
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="tag">
                            Prevention
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Tags */}
                </StickyBox>

              </div>
              {/* /Blog Sidebar */}
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>

      <Footer {...props} />
    </div>
  );
};

export default BlogGrid;
