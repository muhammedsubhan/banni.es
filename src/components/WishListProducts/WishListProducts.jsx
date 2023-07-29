import React from "react";

const WishListProducts = ({ data }) => {
  return (
    <>
      <div>
        <img src={data.image} alt="" />
      </div>
    </>
  );
};

export default WishListProducts;
