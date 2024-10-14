import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCodeId from "../ProductCodeId/ProductCodeId";

const ProductItems = ({ id, image, title, price }) => {
  const navigate = useNavigate();
  const handleProductClick = () => {
    navigate(`/productCodeId/${id}`);
  };

  return (
    <div id={id} className="overflow-hidden relative w-4/5">
      <img
        src={image}
        className="w-full transition-transform duration-300 transform hover:scale-105 cursor-pointer"
        alt={title}
        onClick={handleProductClick}
      />
      <p className="text-xs pt-3 pb-1">{title}</p>
      <p>${price}</p>
    </div>
  );
};

export default ProductItems;
