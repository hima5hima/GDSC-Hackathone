import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Fragment>
  );
};

export default App;
