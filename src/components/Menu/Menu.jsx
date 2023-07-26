import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProductList } from "../../Context/ProductsContext";
const Menu = ({ setMenuToggle }) => {
  const [productToggle, setProductToggle] = useState(false);
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
      <div className="">
        <div className="text-colorWhite text-3xl absolute right-5 top-5">
          <button onClick={() => setMenuToggle(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div
          className={`absolute z-[999] top-28 right-72 text-center xs:right-32 ${
            productToggle ? "left-[140px]" : " "
          }`}
        >
          <ul className="text-colorWhite uppercase space-y-3 text-lg	 font-medium ">
            <li>About</li>
            <li>Services</li>
            <li onClick={() => setProductToggle((prev) => !prev)}>Products</li>
            {productToggle && (
              <>
                <div className="flex flex-col gap-2">
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
                    <span
                      onClick={() => handleCategoryClick("women's clothing")}
                    >
                      Women's Clothing
                    </span>
                  </Link>
                </div>
              </>
            )}

            <li>Our Brands</li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>OutLet</li>
            <li>ShowRooms</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
