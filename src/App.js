import React from "react";
import Home from "./components/Home/Home";

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import ShowRoom from "./components/ShowRooms/ShowRoom";
const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ShowRoom />
        <Footer />
      </div>
    </>
  );
};

export default App;
