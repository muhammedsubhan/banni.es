import React from "react";
import { useCartList } from "../CartContext/CartContext";

const CartItem = ({ product }) => {
  const { cartProducts, quantity, setQuantity, setCartProducts } =
    useCartList();

  const removeFromCart = (id, cartProducts) => {
    const filteredCart = cartProducts.filter((item) => item.id !== id);
    setCartProducts(filteredCart);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <>
      <div className="bg-colorWhite rounded-3xl ">
        <div className="flex p-10 gap-6  md:flex md:flex-col">
          <div className="flex justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-[120px] object-fit sm:h-20 xs:"
            />
          </div>
          <div className="px-4 flex flex-col gap-4">
            <p className="text-base font-semibold md:text-sm xs:text-xs ">
              {product.title}
            </p>
            <div className="flex ">
              <div>
                <div className="flex gap-5">
                  <p className="font-semibold sm:text-sm xs:text-xs">
                   
                    Quantity:
                  </p>
                  <span className="flex gap-5 sm:gap-2">
                    <button
                      className="border py-1 text-xs  px-2 rounded-lg bg-colorBlack text-colorWhite transition hover:shadow-md"
                      onClick={handleDecrement}
                    >
                      <i className="fa-solid fa-minus "></i>
                    </button>
                    <p>{quantity}</p>
                    <button
                      className="border py-1 text-xs  px-2 rounded-lg bg-colorBlack text-colorWhite transition hover:shadow-md"
                      onClick={handleIncrement}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </span>
                </div>
                <p className="mt-4 font-semibold flex gap-4 sm:text-sm xs:text-xs">
                  Price :
                  <span className="font-normal "> ${product.price}</span>
                </p>
              </div>
            </div>
            <div className="mt-2">
              <button
                onClick={() => removeFromCart(product.id, cartProducts)}
                className="border py-1.5 text-sm  sm:text-xs rounded-full px-6 sm:px-2 sm:py-1  hover:bg-colorBlack hover:text-colorWhite transition hover:shadow-md"
              >
                Remove Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
