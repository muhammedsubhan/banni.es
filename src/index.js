import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductsContextProvider } from "./Context/ProductsContext";
import { UserAuthContextProvider } from "./components/FirebaseContext/FirebaseContext";
import { WishListContextProvider } from "./components/WishListContext/WishListContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsContextProvider>
        <UserAuthContextProvider>
          <WishListContextProvider>
            <App />
          </WishListContextProvider>
        </UserAuthContextProvider>
      </ProductsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
