import React, { createContext, useEffect, useState } from "react";
import all_product from "../assets/all_product";
import Cookies from "js-cookie";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [In, setIn] = useState("signin");
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const url = "https://vibez-backend.onrender.com";

  useEffect(() => {
    // console.log(cartItems);
    const IsCookie = Cookies.get("myCookie");
    // console.log(IsCookie, "Cookies");
    setToken(IsCookie);
  }, [cartItems]);

  const addToCart = (id, quantity) => {
    if (!cartItems[id]) {
      setCartItems((prev) => ({
        ...prev,
        [id]: 1,
      }));
    } else {
      setCartItems((prev) => ({ ...prev, [id]: quantity }));
    }
  };

  const removeFromCart = (id, quantity) => {
    setCartItems((prev) => ({ ...prev, [id]: quantity }));
  };

  const getTotalPrice = () => {
    let TotalPrice = 0;
    all_product.map((each) => {
      if (cartItems[each.id] > 0) {
        TotalPrice += cartItems[each.id] * each.new_price;
      }
    });
    return TotalPrice;
  };

  const contextValue = {
    In,
    setIn,
    addToCart,
    cartItems,
    removeFromCart,
    getTotalPrice,
    token,
    url,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
