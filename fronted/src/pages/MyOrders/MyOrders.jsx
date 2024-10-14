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
    // console.log(response.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrdes();
    }
  }, [token]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>
      <div className="space-y-6">
        {data.map((order, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between"
          >
            <img src={parcelIcon} alt="Parcel Icon" className="w-16 h-16" />
            <div className="flex-1 ml-6">
              <p className="text-gray-700">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.qunatity;
                  } else {
                    return item.name + " x " + item.qunatity + ", ";
                  }
                })}
              </p>
              <p className="text-gray-900 font-semibold">${order.amount}.00</p>
              <p className="text-gray-600">Items: {order.items.length}</p>
              <p className="flex items-center space-x-2 text-gray-700">
                <span className="text-green-500">&#x25cf;</span>
                <b>{order.status}</b>
              </p>
            </div>
            <button
              onClick={fetchOrdes}
              className="ml-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
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
