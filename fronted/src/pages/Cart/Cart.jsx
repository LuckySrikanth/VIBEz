import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { StoreContext } from "../../context/StoreContext";
import all_product from "../../assets/all_product";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow p-6 bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <ul className="hidden sm:grid grid-cols-6 gap-4 text-lg font-medium border-b pb-4 mb-4">
            <li>Image</li>
            <li>Name</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Total</li>
            <li>Remove</li>
          </ul>

          {all_product.map((each) => {
            if (cartItems[each.id] > 0) {
              return (
                <div
                  className="grid grid-cols-2 sm:grid-cols-6 gap-4 items-center border-b py-4"
                  key={each.id}
                >
                  <img
                    src={each.image}
                    className="w-20 h-20 object-cover rounded-md"
                    alt={each.name}
                  />

                  <p className="col-span-1 sm:col-span-1">{each.name}</p>

                  <p className="col-span-1 sm:col-span-1">
                    ${each.new_price.toFixed(2)}
                  </p>

                  <p className="col-span-1 sm:col-span-1">
                    {cartItems[each.id]}
                  </p>

                  <p className="col-span-1 sm:col-span-1">
                    ${(each.new_price * cartItems[each.id]).toFixed(2)}
                  </p>

                  <p
                    className="text-red-500 cursor-pointer hover:text-red-700 col-span-1 sm:col-span-1"
                    onClick={() =>
                      removeFromCart(each.id, cartItems[each.id] - 1)
                    }
                  >
                    X
                  </p>
                </div>
              );
            }
          })}

          <div className="text-right mt-6">
            <h1 className="text-xl font-semibold">Total Price</h1>
            <p className="text-2xl font-bold">${getTotalPrice().toFixed(2)}</p>
            <button
              className="bg-black text-white px-6 py-3 mt-4 rounded-lg hover:bg-gray-800"
              onClick={() => navigate("/placeorder")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
