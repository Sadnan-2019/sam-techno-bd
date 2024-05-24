import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./MoreProductDetails.css"
const MoreProductDetails = () => {
     const { id } = useParams();
     const [products, setProduct] = useState([]);
     // const [servicesDetails,setServicesDetails] = useState([]);
   
     useEffect(() => {
       fetch(`/product.json`)
         .then((res) => res.json())
         .then((data) => setProduct(data));
     }, []);
     const details = products.find((s) => s.id === id);
     return (
          <div className=' justify-items-center py-6  '>
               <div className='details gap-0  grid sm:grid-cols-1 lg:grid-cols-2 justify-items-center items-center mx-5  '>
              <div className=' '>
              <img src={details?.img} className="  py-5 p-8      w-3/4 mx-auto" alt="" />
               
              </div>
               <div className='py-5 p-5  justify-items-center items-center text-white  ' >
               <h3 style={{fontSize:"20px"}}> {details?.name}</h3>
               <h1  className="" style={{fontSize:"20px"}}>{details?.description.specificationsone}</h1>
          <h1 style={{fontSize:"20px"}} >{details?.description.specificationstwo}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationsthree}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationsfour}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationsfive}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationssix}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationsseven}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationseight}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationsnine}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationsten}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationseleven}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationsthirten}</h1>
               </div>
          </div>
          </div>
     );
};

export default MoreProductDetails;