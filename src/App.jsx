import React, { Fragment } from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Auth from "./pages/auth.page";
import Slider from "./components/slider/slider.component";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Fragment>
  );
};

export default App;
