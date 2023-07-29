import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useProductList } from "../../Context/ProductsContext";
import ProductImages from "../../components/ProductImages/ProductImages";
import ShowRoom from "../../components/ShowRooms/ShowRoom";
import Footer from "../../components/Footer/Footer";
import { useWishListList } from "../../components/WishListContext/WishListContext";
import { Link } from "react-router-dom";
const Products = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState({});
  const { productData } = useProductList();

  const { setWishList, WishList } = useWishListList();

  const isInWishList = WishList.some((item) => item.id === details.id);

  const handleWishList = () => {

    const itemInWishList = WishList.find((item) => item.id === details.id);

 
    if (!itemInWishList) {
      setWishList((prev) => [...prev, details]);
    }
  };
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
                Quality Electronics
              </h1>
            </div>
            <div className="text-center py-2">
              <small className="text-colorWhite text-sm font-light">
                At BANNI we are specialists in quality designer, modern and
                classic Electronics.
              </small>
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
                    onClick={handleWishList}
                    className="text-colorWhite border px-4 py-2 rounded-xl hover:bg-colorWhite hover:text-colorBlack text-sm font-medium transition-all"
                  >
                    <Link to={isInWishList ? "/wishlist" : null}>
                      {isInWishList ? "Go To WishList" : "Add to WishList"}
                    </Link>
                  </button>
                  <button className="text-colorWhite border px-4 py-2 rounded-xl  hover:bg-colorWhite hover:text-colorBlack text-sm font-medium transition-all">
                    Add To Bag
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
