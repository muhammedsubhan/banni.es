import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  return (
    <CartContext.Provider
      value={{ cartProducts, setQuantity, quantity, setCartProducts }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook for cart Products
export function useCartList() {
  return useContext(CartContext);
}
