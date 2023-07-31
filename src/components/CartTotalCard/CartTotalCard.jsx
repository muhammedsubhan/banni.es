import React from "react";
import { useCartList } from "../CartContext/CartContext";
const CartTotalCard = ({ cart }) => {
  const { quantity } = useCartList();


  const totalPriceOfCartProducts = cart.reduce((total, product) => {
    const productTotal = quantity * product.price;
    return total + productTotal;
  }, 0);

  return (
    <>
      <section className=" py-7 px-7 rounded-md shadow-sm bg-colorWhite flex flex-col gap-6 h-min">
        <h1 className="text-xl font-semibold">Price Details</h1>
        {cart.map((product) => (
          <div key={product.id} className=" flex  justify-between  ">
            <p className=" text-sm flex-1">
              {product.title}{" "}
              <span className="text-base font-semibold">({quantity}) item</span>
            </p>

            <p className="text-lg font-semibold">
              $ {quantity * product.price}
            </p>
          </div>
        ))}

        <hr />
        <div className="flex justify-between items-center">
          <p className=" font-semibold">Total</p>
          <p className="text-2xl">$ {totalPriceOfCartProducts}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" font-semibold">Taxes</p>
          <p className="text-2xl">$ 1000</p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" font-semibold">Delivery Charges</p>
          <p className="text-2xl">$ 30</p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" font-semibold">GrandTotal</p>
          <p className="text-2xl">$ {totalPriceOfCartProducts + 1000 + 30}</p>
        </div>

        <div className="w-full py-2   flex gap-4 items-center">
          <button
           
            className="border py-1.5 text-sm  sm:text-xs rounded-full px-6 sm:px-2 sm:py-1  hover:bg-colorBlack hover:text-colorWhite transition hover:shadow-md"
          >
            Proceed to Checkout
          </button>
        </div>
      </section>
    </>
  );
};

export default CartTotalCard;
