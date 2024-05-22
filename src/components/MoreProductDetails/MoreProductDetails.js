import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
          <div>
               <img src={details?.img} className="   py-5 p-4 w-96" alt="" />
          </div>
     );
};

export default MoreProductDetails;