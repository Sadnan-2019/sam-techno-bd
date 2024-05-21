import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import AllProductDetails from './AllProductDetails';
import Loading from '../Loading/Loading';

const AllProduct = () => {
     const [allproducts, setProduct,loading] = useProducts();
     
     // search
   
     const [searchTerm, setSearchTerm] = useState("");
     
   
     const filteredProducts = allproducts.filter((product) =>
       product.name.toLowerCase().includes(searchTerm.toLowerCase())
     );
     return (
          <div className='text-black px-8	 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredProducts.map((allproduct) => (
          <AllProductDetails
            key={allproduct.id}
            allproduct={allproduct}
          ></AllProductDetails>
        ))}
          </div>
     );
};

export default AllProduct;