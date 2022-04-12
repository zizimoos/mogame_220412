import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

function Router(props) {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
