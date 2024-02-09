import React, { Fragment } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.page";
import Register from "./pages/Register.page";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Fragment>
  );
};

export default App;
