import React from "react";
import data_product from "../../assets/data";
import ProductItems from "../ProductItems/ProductItems";

const Trendy = () => {
  return (
    <div className="flex-col m-2 p-2">
      <h1 className="text-2xl text-center m-5">
        Trendy <span className="font-semibold">COLLECTION</span>
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
  );
};

export default Trendy;
