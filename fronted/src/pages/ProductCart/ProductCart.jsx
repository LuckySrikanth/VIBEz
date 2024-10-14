import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Products from "../../components/Products/Products";
import { useParams } from "react-router-dom";

const ProductCart = (props) => {
  const { id } = useParams();
  // console.log(id, "id in productcxart");
  return (
    <div>
      <Products />
    </div>
  );
};

export default ProductCart;
