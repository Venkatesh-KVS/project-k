import React from "react";
import "./App.css";
// import { packagesData } from "./components/data/AllData";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homeComponents/Home";
import Header from "./components/nav-pages/Header";
import About from "./components/nav-pages/About";
import Cart from "./components/cart/Cart";
import ErrorPage from "./components/requiredPages/ErrorPage";
import HomeCollection from "./components/nav-pages/HomeCollection";
import Services from "./components/nav-pages/Services";
import SingleProduct from "./SingleProduct";
import Packages from "./components/nav-pages/Packages";
import LocateClinic from "./components/nav-pages/LocateClinic";
import Tests from "./components/nav-pages/Tests";
import HealthConditions from "./components/services/HealthConditions ";
import RadiologyServices from "./components/services/RadiologyServices";
import { CartProvider } from "react-use-cart";
import PartnerWithUs from "./components/nav-pages/PartnerWithUs";
import Footer from "./components/nav-pages/Footer";
import Details from "./components/services/Details";
// import DynamicHc from "./components/services/DynamicHc";

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
    bg_light: "#f8f8f9",
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
              {/* <Route
                path="/hc-card"
                element={<DynamicHc packagesData={packagesData} />}
              /> */}
              <Route path="/" element={<Home />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/tests" element={<Tests />} />
              <Route path="/singleproduct/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/home-collection" element={<HomeCollection />} />
              <Route path="/services" element={<Services />} />
              <Route path="/health-conditions" element={<HealthConditions />} />
              <Route path="/details" element={<Details />} />
              <Route
                path="/radiology-services"
                element={<RadiologyServices />}
              />
              <Route path="/packages" element={<Packages />} />
              <Route path="/locate-clinic" element={<LocateClinic />} />
              <Route path="/partner-with-us" element={<PartnerWithUs />} />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
