import React, { useContext, useState } from "react";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import all_product from "../../assets/all_product";

const PlaceOrder = () => {
  const { getTotalPrice, token, cartItems, url } = useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const OnChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    all_product.map((item) => {
      if (cartItems[item.id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item.id];
        orderItems.push(item);
      }
    });
    // console.log(orderItems, "orderItems");
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalPrice() + 2,
    };
    // console.log(url, "url");

    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token: token },
    });

    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      // console.log(response);
      alert(response.data);
    }
  };
  return (
    <form
      className="flex flex-col lg:flex-row gap-8 p-6 bg-gray-100 rounded-lg shadow-lg max-w-5xl mx-auto"
      onSubmit={placeOrder}
    >
      <div className="place-order-left flex-1 bg-white p-6 rounded-lg shadow-md">
        <p className="text-xl font-bold mb-4">Delivery Information</p>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={OnChangeHandler}
            value={data.firstName}
            placeholder="First name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={OnChangeHandler}
            value={data.lastName}
            placeholder="Last name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          onChange={OnChangeHandler}
          value={data.email}
          placeholder="Email Address"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="street"
          id="street"
          onChange={OnChangeHandler}
          value={data.street}
          placeholder="Street"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            name="city"
            id="city"
            onChange={OnChangeHandler}
            value={data.city}
            placeholder="City"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="state"
            id="state"
            onChange={OnChangeHandler}
            value={data.state}
            placeholder="State"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            onChange={OnChangeHandler}
            value={data.zipcode}
            placeholder="Zip Code"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="country"
            id="country"
            onChange={OnChangeHandler}
            value={data.country}
            placeholder="Country"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <input
          type="text"
          name="phone"
          id="phone"
          onChange={OnChangeHandler}
          value={data.phone}
          placeholder="Phone"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="place-order-right flex-1 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
        <div>
          <div className="flex justify-between mb-4">
            <p>Subtotal</p>
            <p>${getTotalPrice()}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Delivery Fee</p>
            <p>${getTotalPrice() === 0 ? 0 : 2}</p>
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between font-bold mb-6">
            <b>Total</b>
            <b>${getTotalPrice() === 0 ? 0 : getTotalPrice() + 2}</b>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
