import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homeComponents/Home";
import Header from "./components/Header";
import About from "./components/About";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ErrorPage from "./components/requiredPages/ErrorPage";
import Footer from "./components/Footer";
import HomeCollection from "./components/HomeCollection";
import Services from "./components/Services";
import SingleProduct from "./SingleProduct";
import Packages from "./components/Packages";
import LocateClinic from "./components/LocateClinic";
import Tests from "./components/Tests";
import RadiologyServices from "./components/services/RadiologyServices";
import { CartProvider } from "react-use-cart";
import PartnerWithUs from "./components/PartnerWithUs";

// const mysql = require("mysql2");
// const connectSQLdb = require("./server/controller/mysql_controller");
// const sqldb_funcs = require("./server/database/mysql_connection");

const theme = {
  colors: {
    primary: "#00aeef",
    primary90: "#00aeef90",
    secondary: "#005BAB",
    white: "#fff",
    text: "#000F1C",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App ">
        <CartProvider>
          <Router basename="/project-konnect">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/tests" element={<Tests />} />
              <Route path="/products" element={<Products />} />
              <Route path="/singleproduct/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/home-collection" element={<HomeCollection />} />
              <Route path="/services" element={<Services />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/locate-clinic" element={<LocateClinic />} />
              <Route path="/partner-with-us" element={<PartnerWithUs />} />
              <Route
                path="/radiology-services"
                element={<RadiologyServices />}
              />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
