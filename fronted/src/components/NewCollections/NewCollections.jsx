import React from "react";
import new_collections from "../../assets/new_collections";
import ProductItems from "../ProductItems/ProductItems";

const NewCollections = () => {
  return (
    <div className="flex-col m-2 p-2">
      <h1 className="text-2xl text-center m-5">
        NEW <span className="font-semibold">LUNCHED</span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {new_collections.map((each) => (
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

export default NewCollections;
