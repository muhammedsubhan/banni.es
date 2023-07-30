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
      <div className="bg-colorWhite">
        <div className="flex p-10 gap-6">
          <div>
            <img
              src={product.image}
              alt={product.title}
              className="h-[120px] object-fit "
            />
          </div>
          <div className="px-4">
            <p>{product.title}</p>
            <div className="flex ">
              <p>
                Quantity:
                <span>
                  <button>
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  {quantity}
                  <button>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
