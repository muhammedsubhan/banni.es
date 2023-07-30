import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductsContextProvider } from "./Context/ProductsContext";
import { UserAuthContextProvider } from "./components/FirebaseContext/FirebaseContext";
import { WishListContextProvider } from "./components/WishListContext/WishListContext";
import { CartContextProvider } from "./components/CartContext/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsContextProvider>
        <UserAuthContextProvider>
          <WishListContextProvider>
            <CartContextProvider>
              <App />
            </CartContextProvider>
          </WishListContextProvider>
        </UserAuthContextProvider>
      </ProductsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
