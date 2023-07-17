import React from "react";

const HomeLinks = ({ handleSearchToggle }) => {
  return (
    <>
      <div>
        <div className="uppercase text-colorWhite font-medium text-lg flex justify-center gap-8 lg:flex-wrap">
          <p className="link-underline  ">About</p>
          <p className="link-underline  ">Services</p>
          <p className="link-underline">Products</p>
          <p className="link-underline  ">Our Brands</p>
          <p className="link-underline">Projects</p>
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
