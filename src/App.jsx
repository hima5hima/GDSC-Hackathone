import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./components/contactus/ContactUs"
import "./App.css";
import Auth from "./pages/Auth";
import Home from "./pages/Home";


const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </Fragment>
  );
};

export default App;
