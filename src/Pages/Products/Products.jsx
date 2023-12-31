import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useProductList } from "../../Context/ProductsContext";
import ProductImages from "../../components/ProductImages/ProductImages";
import ShowRoom from "../../components/ShowRooms/ShowRoom";
import Footer from "../../components/Footer/Footer";
import { useWishListList } from "../../components/WishListContext/WishListContext";
import { Link } from "react-router-dom";
import { useCartList } from "../../components/CartContext/CartContext";
const Products = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState({});
  const { productData, setProductData } = useProductList();

  const [selectedCategory, setSelectedCategory] = useState("all");

  const { setWishList, WishList } = useWishListList();
  const { setCartProducts, cartProducts } = useCartList();

  const isInWishList = WishList.some((item) => item.id === details.id);
  const isInCart = cartProducts.some((item) => item.id === details.id);

  const addToWishList = () => {
    const itemInWishList = WishList.find((item) => item.id === details.id);
    if (!itemInWishList) {
      setWishList((prev) => [...prev, details]);
    }
  };

  const addToCart = () => {
    const itemInCart = cartProducts.find((item) => item.id === details.id);
    if (!itemInCart) {
      setCartProducts((prev) => [...prev, details]);
    }
  };

  useEffect(() => {
 
    const ProductByCategory = async (cate) => {
      let apiURL = "https://fakestoreapi.com/products";
      if (cate !== "all") {
        apiURL = `https://fakestoreapi.com/products/category/${cate}`;
      }

      try {
        const res = await fetch(apiURL);
        if (!res.ok) {
          throw new Error("Failed to fetch data from the API.");
        }

        const data = await res.json();
        setProductData(data);
      } catch (error) {
        console.error(error);
       
      }
    };

    ProductByCategory(selectedCategory);
  }, [selectedCategory, setProductData]);


  return (
    <>
      <div className="relative">
        <div
          className={`min-h-screen bg-colorBackGround relative ${
            showDetails ? " blur pointer-events-none" : ""
          }`}
        >
          <Navbar />
          <div className="min-h-screen bg-colorBackGround">
            <div className="text-colorWhite px-10 py-3">
              <h1 className="text-sm font-semibold uppercase">electronics</h1>
            </div>
            <div className="text-center py-10">
              <div className="flex items-center justify-center py-2">
                <div className="border-b-2 border-lightBlueColor w-[60px] "></div>
              </div>
              <h1 className="text-3xl text-colorWhite font-light uppercase">
                Quality Products
              </h1>
            </div>
            <div className="text-center py-2">
              <small className="text-colorWhite text-sm font-light">
                At BANNI we are specialists in quality designer, modern and
                classic Electronics.
              </small>
            </div>

            <div className=" mt-4 flex justify-center items-center gap-4">
              <div className="text-center">
                <h1 className="text-colorWhite">Category : </h1>
              </div>
              <div className="text-center py-2">
                <select
                  className="text-black bg-white"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="electronics">Electronics</option>
                  <option value="men's clothing">Men's Clothing</option>
                  <option value="women's clothing">Women's Clothing</option>
                  <option value="jewelery">Jewelery</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-4 gap-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-10">
                {productData.map((item) => {
                  return (
                    <ProductImages
                      key={item.id}
                      data={item}
                      setShowDetails={setShowDetails}
                      setDetails={setDetails}
                    />
                  );
                })}
              </div>
            </div>
            <ShowRoom />
            <Footer />
          </div>
        </div>

        <div className="flex items-center justify-center">
          {showDetails && (
            <div className="text-colorWhite md:flex-col fixed top-32 z-[999]  flex bg-colorBlack">
              <img
                src={details.image}
                alt={details.title}
                className="h-[500px] md:h-[300px] sm:h-[250px] lg:h-[370px] xs:h-[210px] bg-cover bg-center	"
              />
              <div className="  w-96 md:w-[250px] sm:w-[300px] lg:w-[220px] p-5">
                <p className="text-colorWhite text-base uppercase font-semibold pb-2">
                  {details.title}
                </p>

                <p className="text-colorWhite text-base font-light">
                  Price : ${details.price}
                </p>
                <div className="flex justify-around flex-col mt-5 gap-4">
                  <button
                    onClick={addToWishList}
                    className="text-colorWhite border px-4 py-2 rounded-xl hover:bg-colorWhite hover:text-colorBlack text-sm font-medium transition-all"
                  >
                    <Link to={isInWishList ? "/wishlist" : null}>
                      {isInWishList ? "Go To WishList" : "Add to WishList"}
                    </Link>
                  </button>
                  <button
                    onClick={addToCart}
                    className="text-colorWhite border px-4 py-2 rounded-xl  hover:bg-colorWhite hover:text-colorBlack text-sm font-medium transition-all"
                  >
                    <Link to={isInCart ? "/cart" : null}>
                      {isInCart ? "Go To Bag" : " Add to Bag"}
                    </Link>
                  </button>
                </div>
              </div>

              <button
                className="absolute -top-16 right-0 text-2xl"
                onClick={() => setShowDetails(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
