import { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
  const [productData, setProductData] = useState([]);

  return (
    <ProductsContext.Provider value={{ productData, setProductData }}>
      {children}
    </ProductsContext.Provider>
  );
}

// Custom Hook for Products
export function useProductList() {
  return useContext(ProductsContext);
}
