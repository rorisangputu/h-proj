import React from "react";
import Layout from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  );
};

export default App;
