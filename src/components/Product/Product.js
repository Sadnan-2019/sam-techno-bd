import React from 'react';
import useProducts from '../../hooks/useProducts';
import { useNavigate } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Loading from '../Loading/Loading';

const Product = () => {
     const [reviews,setProduct] = useProducts();
  const datas =reviews.slice(0,3);
  
 
  let navigate = useNavigate();

  const allProduct = () => {
    const path = `/allproduct`;
    navigate(path);
  };
  
     return (
          <div>
                <div class="section-title">
            <h2 className='text-center text-2xl font-bold'>OUR PRODUCT</h2>
            <p className='text-center text-xl font-bold py-7'>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className='   '> 
<div className='text-black px-10 py-10   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

{datas.map((product,) => (
              <ProductDetails
                key={product.id}
                product={product}
              ></ProductDetails>
            ))}
</div>
<div className=" px-5  py-5 flex justify-center">
          <a href="">
            <button
              htmlFor="my-modal-6"
              className="btn btn-md modal-button   text-[white] bg-gradient-to-r from-[#303640] to-[#103264]   animate-pulse    "
              style={{ backgroundColor: "#453364" }}
              onClick={allProduct}
            >
              More Product
            </button>
          </a>
        </div>
</div>

{/* <a href="" class="flex mx-auto  justify-center text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center">
    <span>
          More Product
    </span>
    <svg class="w-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        viewBox="0 0 24 24" className="w-6 h-6 ml-2">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
</a> */}


          </div>
     );
};

export default Product;