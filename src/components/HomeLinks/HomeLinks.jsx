import React from "react";
import { Link } from "react-router-dom";

const HomeLinks = ({ handleSearchToggle }) => {
  return (
    <>
      <div>
        <div className="uppercase text-colorWhite font-medium text-lg flex justify-center gap-8 lg:flex-wrap">
          <p className="link-underline  ">About</p>
          <p className="link-underline  ">Services</p>
          <div className="products-link-container">
            <Link to="/products">
              <p className="link-underline">Products</p>
            </Link>
          </div>

          <p className="link-underline  ">Our Brands</p>
          <Link to="/projects">
            <p className="link-underline">Projects</p>
          </Link>
          <p className="link-underline  ">OutLet</p>
          <p className="link-underline  ">ShowRoom</p>
          <button onClick={handleSearchToggle}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeLinks;
