import React from "react";
import { useWishListList } from "../WishListContext/WishListContext";
import { useCartList } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const WishListProducts = ({ data }) => {
  const { WishList, setWishList } = useWishListList();
  const { setCartProducts, cartProducts } = useCartList();

  const isInCart = cartProducts.some((item) => item.id === data.id);

  const removeFromWishList = (id) => {
    const filteredWishList = WishList.filter((item) => item.id !== id);
    setWishList(filteredWishList);
  };

  const addToCart = () => {
    const itemInCart = cartProducts.find((item) => item.id === data.id);
    if (!itemInCart) {
      setCartProducts((prev) => [...prev, data]);
    }
  };

  return (
    <>
      <div
        className=" flex flex-col xs:flex-row sm:flex-col sm:w-full bg-colorWhite rounded-lg shadow-md border-2 border-colorBlack overflow-hidden
      cursor-pointer
      transition-transform
      hover:scale-[1.02] hover:shadow-lg w-[360px] "
      >
        <div className="flex items-center justify-center p-10 xs:p-5 sm:p-10  xs:w-1/2 w-full sm:w-full">
          <div>
            <img
              src={data.image}
              alt="sport"
              className="w-full object-cover xs:object-contain sm:object-cover h-28"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between py-4 px-4 leading-relaxed">
            <div>
              <h1 className="text-xl font-medium sm:text-xs">{data.title}</h1>
              <p className="mt-2 sm:text-sm">Price : ${data.price}</p>
            </div>
          </div>
          <div className="w-full border-t flex justify-between items-center py-5 pt-6 px-4 md:flex-row lg:flex-row">
            <button
              onClick={() => removeFromWishList(data.id)}
              className="border py-1.5 text-sm  sm:text-xs rounded-full px-6  sm:px-2 sm:py-1  hover:bg-colorBlack hover:text-colorWhite transition hover:shadow-md"
            >
              Remove WishList
            </button>
            <button
              onClick={addToCart}
              className="border py-1.5 text-sm  sm:text-xs rounded-full px-6  sm:px-2 sm:py-1  hover:bg-colorBlack hover:text-colorWhite transition hover:shadow-md"
            >
              <Link to={isInCart ? "/cart" : null}>
                {isInCart ? "Go To Bag" : " Add to Bag"}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishListProducts;
