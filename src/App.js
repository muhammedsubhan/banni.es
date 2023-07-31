import React from "react";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import Products from "./Pages/Products/Products";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import WishList from "./Pages/WishList/WishList";
import Cart from "./Pages/Cart/Cart";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
