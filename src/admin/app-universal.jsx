/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import Header from "./components/header/index";
import Dashboard from "./components/dashboard";
import Appointments from "./components/appointments";
import Specialities from "./components/specialities";
import Doctors from "./components/doctors";
import Patients from "./components/patients";
import Reviews from "./components/reviews";
import Transaction from "./components/transaction";
import Settings from "./components/settings";
import InvoiceReport from "./components/Reports/InvoiceReport/InvoiceReport";
import ProductList from "./components/productlist";
import PharmacyList from "./components/pharmacylist";
import Categories from "./components/pharmacylist/Categories";
import Blog from "./components/Blog/blog";
import BlogDetails from "./components/Blog/blogdetails";
import AddBlog from "./components/Blog/addblog";
import EditBlog from "./components/Blog/editblog";
import PendingBlog from "./components/Blog/pendingblog";
import Profile from "./components/profile/Profile";
import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/forgotpassword";
import Lockscreen from "./components/lockscreen";
import Error from "./components/error404";
import ErrorPage from "./components/error500";
import BasicInput from "./components/forms/baiscinput";
import FormInput from "./components/forminput";
import FormHorizontal from "./components/formhorizontal";
import FormVertical from "./components/formvertical";
import FormMask from "./components/formask";
import FormValidation from "./components/formvalidation";
import BlankPage from "./components/blankpage";
import Components from "./components/component";
import DataTables from "./components/datatables";
import BasicTables from "./components/basictables";
import ProductCategories from "./components/productlist/ProductCategories";
import { Appcontext } from "../approuter";
import InvoiceReportList from "./components/Reports/InvoiceReport/InvoiceReportList";

const AppUniversal = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const { setIsAuth } = useContext(Appcontext);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const authPaths = [
      "/admin/login",
      "/admin/register",
      "/admin/forgotPassword",
      "/admin/lockscreen",
      "/admin/conform-email",
      "/admin/404",
      "/admin/500"
    ];

    if (authPaths.includes(location.pathname)) {
      setIsAuth("admin");
    } else {
      setIsAuth("user");
    }
  }, [location.pathname, setIsAuth]);

  const isAuthPage = [
    "/admin/login",
    "/admin/register",
    "/admin/forgotPassword",
    "/admin/lockscreen",
    "/admin/404",
    "/admin/500"
  ].includes(location.pathname);

  return (
    <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
      {!isAuthPage && <Header onMenuClick={toggleMobileMenu} />}
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/lockscreen" element={<Lockscreen />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/appointment-list" element={<Appointments />} />
        <Route path="/specialities" element={<Specialities />} />
        <Route path="/doctor-list" element={<Doctors />} />
        <Route path="/patient-list" element={<Patients />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/transactions-list" element={<Transaction />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/invoicerepot" element={<InvoiceReport />} />
        <Route path="/invoice" element={<InvoiceReportList />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/edit-blog" element={<EditBlog />} />
        <Route path="/pending-blog" element={<PendingBlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/pharmacy-list" element={<PharmacyList />} />
        <Route path="/pharmacy-category" element={<Categories />} />
        <Route path="/404" element={<Error />} />
        <Route path="/500" element={<ErrorPage />} />
        <Route path="/blank-page" element={<BlankPage />} />
        <Route path="/components" element={<Components />} />
        <Route path="/basic-input" element={<BasicInput />} />
        <Route path="/form-input-group" element={<FormInput />} />
        <Route path="/form-horizontal" element={<FormHorizontal />} />
        <Route path="/form-vertical" element={<FormVertical />} />
        <Route path="/form-mask" element={<FormMask />} />
        <Route path="/form-validation" element={<FormValidation />} />
        <Route path="/tables-basic" element={<BasicTables />} />
        <Route path="/data-tables" element={<DataTables />} />
        <Route path="/product-category" element={<ProductCategories />} />
      </Routes>
    </div>
  );
};

export default AppUniversal;