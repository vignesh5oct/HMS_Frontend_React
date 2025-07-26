import React from "react";
import { Routes, Route, useLocation } from "react-router";
import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap.min.css";
import Header from "./components/header/index";
import Dashboard from "./components/dashboard";
import Products from "./components/Products/product";
import AddProduct from "./components/Products/addproduct";
import EditProduct from "./components/Products/editproduct";
import OutStock from "./components/Products/outstock";
import Expired from "./components/Products/expired";
import Categories from "./components/categories";
import Purchase from "./components/purchase/purchase";
import Order from "./components/purchase/order";
import AddPurchase from "./components/purchase/addpurchase";
import EditPurchase from "./components/purchase/editpurchase";
import Sales from "./components/Sales";
import Supplier from "./components/supplier/supplier";
import AddSupplier from "./components/supplier/addsupplier";
import EditSupplier from "./components/supplier/editsupplier";
import TransactionList from "./components/transaction/transaction-list";
import Invoice from "./components/transaction/invoice";
import InvoiceReport from "./components/report/invoicelist";
import Settings from "./components/settings";
import Profile from "./components/profile";
import ProductList from "./components/productlist/index.jsx";
import ReportInvoice from "./components/report/ReportInvoice.jsx";
import LatestCustomer from "./components/dashboard/LastestCustomer.jsx";
import PharmacyLogin from "./components/login/index.jsx";
import ParmacyForgotPassword from "./components/forgotPassword/index.jsx";
import ParmacyRegsiter from "./components/register/index..jsx";

const PharmacyadminApp = () => {
  const location = useLocation();
  const isAuthPage = ['/pharmacyadmin/login', '/pharmacyadmin/register', '/pharmacyadmin/forgotPassword'].includes(location.pathname);

  return (
    <div className="main-wrapper">
      {!isAuthPage && <Header />}
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<ParmacyRegsiter />} />
        <Route path="/forgotPassword" element={<ParmacyForgotPassword />} />
        <Route path="/login" element={<PharmacyLogin />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product" element={<EditProduct />} />
        <Route path="/outstock" element={<OutStock />} />
        <Route path="/expired" element={<Expired />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/order" element={<Order />} />
        <Route path="/add-purchase" element={<AddPurchase />} />
        <Route path="/edit-purchase" element={<EditPurchase />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/add-supplier" element={<AddSupplier />} />
        <Route path="/edit-supplier" element={<EditSupplier />} />
        <Route path="/transactions-list" element={<TransactionList />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/invoice-report" element={<InvoiceReport />} />
        <Route path="/ReportInvoice" element={<ReportInvoice />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/LatestCustomer" element={<LatestCustomer />} />
      </Routes>
    </div>
  );
};

export default PharmacyadminApp;