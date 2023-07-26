import React from "react";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import Products from "./Pages/Products/Products";
const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products/:category" element={<Products />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
