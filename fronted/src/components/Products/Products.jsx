import React, { useState } from "react";
import All_Products from "../../assets/all_product";
import ProductItems from "../ProductItems/ProductItems";

const Products = () => {
  const [filters, setFilters] = useState({
    men: false,
    women: false,
    kid: false,
  });

  const [sortOrder, setSortOrder] = useState("Ascending");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredProducts = All_Products.filter((product) => {
    const isCategoryMatch =
      !filters.men && !filters.women && !filters.kid
        ? true
        : (filters.men && product.category === "men") ||
          (filters.women && product.category === "women") ||
          (filters.kid && product.category === "kid");

    const isSearchMatch = product.name.toLowerCase().includes(searchQuery);

    return isCategoryMatch && isSearchMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "Ascending") {
      return a.new_price - b.new_price;
    } else {
      return b.new_price - a.new_price;
    }
  });

  return (
    <div className="flex flex-col md:flex-row">
      {" "}
      <div className="w-full md:w-[25%] p-4 border-b md:border-r md:border-b-0 border-gray-200 m-3">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Categories</h3>
          <label className="block mb-2">
            <input
              type="checkbox"
              name="men"
              checked={filters.men}
              onChange={handleCheckboxChange}
              className="mr-2 leading-tight"
            />
            <span className="text-gray-700">Men</span>
          </label>
          <label className="block mb-2">
            <input
              type="checkbox"
              name="women"
              checked={filters.women}
              onChange={handleCheckboxChange}
              className="mr-2 leading-tight"
            />
            <span className="text-gray-700">Women</span>
          </label>
          <label className="block mb-2">
            <input
              type="checkbox"
              name="kid"
              checked={filters.kid}
              onChange={handleCheckboxChange}
              className="mr-2 leading-tight"
            />
            <span className="text-gray-700">Kid</span>
          </label>
        </div>
      </div>
      <div className="w-full md:w-[75%] p-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <input
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="p-2 border border-gray-300 rounded w-full sm:max-w-xs"
            />
            <select
              className="p-2 border border-gray-300 rounded"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option>Ascending</option>
              <option>Descending</option>
            </select>
          </div>
          <h1 className="text-lg font-semibold mt-4 sm:mt-0">Products</h1>
        </div>

        <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3">
          {sortedProducts.map((eachItem) => (
            <ProductItems
              key={eachItem.id}
              id={eachItem.id}
              image={eachItem.image}
              title={eachItem.name}
              price={eachItem.new_price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
