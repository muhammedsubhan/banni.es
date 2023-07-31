import React from "react";
import { useCartList } from "../../components/CartContext/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import CartTotalCard from "../../components/CartTotalCard/CartTotalCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartProducts } = useCartList();

  return (
    <>
      <div className="px-10 pt-16 min-h-screen bg-colorBackGround">
        <div className="text-center text-2xl font-semibold text-colorWhite">
          <h1>Cart</h1>
        </div>

        {cartProducts.length > 0 && (
          <h1 className="text-2xl font-bold p-3 text-colorWhite ">
            Bag({cartProducts.length})
          </h1>
        )}
        {cartProducts.length ? (
          <div className="flex justify-between gap-5 p-8 lg:flex-col md:p-0">
            <main className="flex flex-col gap-3">
              {cartProducts.map((item) => (
                <CartItem key={item.id} product={item} />
              ))}
            </main>
            <CartTotalCard cart={cartProducts} />
          </div>
        ) : (
          <div className="h-[60vh] w-full flex flex-col items-center justify-center  gap-3 text-colorWhite">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Hey, it feels so light!</h2>
              <p className="text-sm text-gray-400 mt-4">
                There's nothing in your bag. Let's add some items.
              </p>
              <button
                className="
              mt-4
              text-colorWhite border px-4 py-2 rounded-xl  hover:bg-colorWhite hover:text-colorBlack text-sm font-medium transition-all"
              >
                <Link to="/products">Go To Products</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
