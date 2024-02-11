import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Auth from "./pages/Auth";

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
