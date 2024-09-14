import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import User from "../components/User";
import Contact from "../components/Contact";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Routing;
