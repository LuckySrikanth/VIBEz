import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import all_product from "../../assets/all_product";
import { StoreContext } from "../../context/StoreContext";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { FaPlus, FaMinus } from "react-icons/fa";
import data_product from "../../assets/data";
import ProductItems from "../ProductItems/ProductItems";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCodeId = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const navigate = useNavigate();
  const { addToCart, removeFromCart } = useContext(StoreContext);

  const filteredProducts = all_product.filter((each) => each.id === productId);
  const [quantities, setQuantities] = useState({});
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const handleIncrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 1) + 1,
    }));
    addToCart(id, quantities[id] || 1);
  };

  const handleDecrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
    }));
    removeFromCart(id, quantities[id] || 1);
  };

  const handleAddToCart = (id) => {
    if (!selectedSize) {
      toast.error("Please select a size.");
      return;
    }
    toast.success("successfully Added to Cart");
    addToCart(id, quantities[id] || 1, selectedSize);
  };

  if (filteredProducts.length === 0) {
    return <div>Product not found</div>;
  }

  const product = filteredProducts[0];

  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "Products", link: "/products" },
    { text: product.name, link: "" },
  ];

  return (
    <div className="flex flex-col">
      <ToastContainer />
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="flex flex-col sm:flex-row gap-12 m-5" key={product.id}>
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
            />
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{product.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">${product.new_price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {product.description || "Description not available."}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className={`border py-2 px-4 ${
                    selectedSize === size
                      ? "bg-[#ffc0d0] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 my-4">
            <FaMinus
              onClick={() => handleDecrease(product.id)}
              className="cursor-pointer"
            />
            <span className="text-lg">{quantities[product.id] || 1}</span>
            <FaPlus
              onClick={() => handleIncrease(product.id)}
              className="cursor-pointer"
            />
          </div>

          <button
            onClick={() => handleAddToCart(product.id)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 hover:bg-[#ffc0d0]"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      <div className="flex-col m-5 p-2">
        <h1 className="text-2xl text-center m-5">
          RELATED <span className="font-semibold">PRODUCTS</span>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6">
          {data_product.map((each) => (
            <ProductItems
              key={each.id}
              id={each.id}
              image={each.image}
              title={each.name}
              price={each.new_price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCodeId;
