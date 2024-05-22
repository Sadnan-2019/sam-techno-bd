import React from 'react';
import Landing from '../Landing/Landing';
import About from '../About/About';
import Product from '../Product/Product';
import Services from '../Services/Services';

const Home = () => {
     return (
          <div>
               <Landing></Landing>
               <About></About>
               <Product></Product>
               <Services></Services>
          </div>
     );
};

export default Home;