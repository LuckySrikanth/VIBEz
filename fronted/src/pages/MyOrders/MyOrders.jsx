import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import parcelIcon from "../../assets/parcel_icon.png";
import axios from "axios";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);

  const [data, setData] = useState([]);

  const fetchOrdes = async () => {
    const response = await axios.post(
      url + "/api/order/userorder",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrdes();
    }
  }, [token]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
        My Orders
      </h2>
      <div className="space-y-6">
        {data.map((order, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between"
          >
            <img
              src={parcelIcon}
              alt="Parcel Icon"
              className="w-12 h-12 mb-4 sm:mb-0"
            />
            <div className="flex-1 sm:ml-6 mb-4 sm:mb-0">
              <p className="text-gray-700 text-sm sm:text-base">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.qunatity;
                  } else {
                    return item.name + " x " + item.qunatity + ", ";
                  }
                })}
              </p>
              <p className="text-gray-900 font-semibold text-sm sm:text-base">
                ${order.amount}.00
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                Items: {order.items.length}
              </p>
              <p className="flex items-center space-x-2 text-gray-700 text-sm sm:text-base">
                <span className="text-green-500">&#x25cf;</span>
                <b>{order.status}</b>
              </p>
            </div>
            <button
              onClick={fetchOrdes}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 w-full sm:w-auto"
            >
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
