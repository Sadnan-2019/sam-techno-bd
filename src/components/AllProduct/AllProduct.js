import React, { useState } from "react";
import useProducts from "../../hooks/useProducts";
import AllProductDetails from "./AllProductDetails";
import Loading from "../Loading/Loading";

const AllProduct = () => {
  const [allproducts, setProduct] = useProducts();

  // search

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = allproducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <div class=" ">
        <div class="  py-5   ">
          <div class="mx-10 ">
           
            <input
                type="text"
                class="mt-2  shadow-md focus:outline-none rounded-2xl py-3 px-6 block w-full "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search your product"
              />
             

            <div class="absolute top-4 right-3">
              <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black px-8	 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((allproduct) => (
          <AllProductDetails
            key={allproduct.id}
            allproduct={allproduct}
          ></AllProductDetails>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
