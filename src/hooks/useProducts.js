import { useEffect, useState } from "react"



const useProducts = () =>{
const [allproducts,setProduct] = useState([])
     useEffect(()=>{

          fetch(`product.json`)
          .then(res=> res.json())
          .then(data=>setProduct(data))
     },[])

     return [allproducts,setProduct]
};
export default useProducts;

// import { useEffect, useState } from "react";

// const useReview = () => {

// const [reviews,setReview] = useState([])

// useEffect(()=>{


//           fetch(`review.json`)
//           .then(res => res.json())
//           .then(data =>setReview(data))
// },[])


// return [reviews,setReview]
// };
// export default useReview;