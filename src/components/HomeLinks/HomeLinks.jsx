import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProductList } from "../../Context/ProductsContext";

const HomeLinks = ({ handleSearchToggle }) => {
  const [category, setCategory] = useState("electronics");
  const { setProductData } = useProductList();

  useEffect(() => {
    const fetchProductsByCategory = async (category) => {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await res.json();
      setProductData(data);
    };

    fetchProductsByCategory(category);

    const intervalId = setInterval(() => {
      fetchProductsByCategory(category);
    }, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [category, setProductData]);

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  return (
    <>
      <div>
        <div className="uppercase text-colorWhite font-medium text-lg flex justify-center gap-8 lg:flex-wrap">
          <p className="link-underline  ">About</p>
          <p className="link-underline  ">Services</p>
          <div className="products-link-container">
            <p className="link-underline">Products</p>
            <div className="hidden h-[160px] left-[500px] text-base font-light absolute bg-colorBlack bg-opacity-60 shadow-md ">
              <Link to="/products/electronics">
                <span onClick={() => handleCategoryClick("electronics")}>
                  Electronics
                </span>
              </Link>
              <Link to="/products/jewelery">
                <span onClick={() => handleCategoryClick("jewelery")}>
                  Jewelery
                </span>
              </Link>
              <Link to="/products/men's%20clothing">
                <span onClick={() => handleCategoryClick("men's clothing")}>
                  Men's Clothing
                </span>
              </Link>
              <Link to="/products/women's%20clothing">
                <span onClick={() => handleCategoryClick("women's clothing")}>
                  Women's Clothing
                </span>
              </Link>
            </div>
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
