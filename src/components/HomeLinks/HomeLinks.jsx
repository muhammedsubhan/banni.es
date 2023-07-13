import React from "react";

const HomeLinks = ({ handleSearchToggle }) => {
  return (
    <>
      <div>
        <div className="uppercase text-white font-medium text-lg flex justify-center gap-8 lg:flex-wrap">
          <p>About</p>
          <p>Services</p>
          <p>Products</p>
          <p>Our Brands</p>
          <p>Projects</p>
          <p>OutLet</p>
          <p>ShowRoom</p>
          <button onClick={handleSearchToggle}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeLinks;
