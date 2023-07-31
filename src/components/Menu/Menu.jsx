import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductList } from "../../Context/ProductsContext";
const Menu = ({ setMenuToggle }) => {
  const { setProductData } = useProductList();

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      setProductData(data);
    };

    fetchProductsByCategory();
  }, [setProductData]);

  return (
    <>
      <div className="">
        <div className="text-colorWhite text-3xl absolute right-5 top-5">
          <button onClick={() => setMenuToggle(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="absolute z-[999] top-28 right-72 text-center xs:right-32">
          <ul className="text-colorWhite uppercase space-y-3 text-lg	 font-medium ">
            <li>About</li>
            <li>Services</li>
            <li>
              <Link to="/products">Products</Link>
            </li>

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
