import { createContext, useContext, useState } from "react";

const WishListContext = createContext();

export function WishListContextProvider({ children }) {
  const [WishList, setWishList] = useState([]);

  return (
    <WishListContext.Provider value={{ WishList, setWishList }}>
      {children}
    </WishListContext.Provider>
  );
}

// Custom Hook for WishList
export function useWishListList() {
  return useContext(WishListContext);
}
