import { createContext, useContext, useEffect, useState } from "react";

const WishListContext = createContext();

export function WishListContextProvider({ children }) {
  const [WishList, setWishList] = useState([]);

  useEffect(() => {
    console.log(WishList);
  }, [WishList]);

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
