import React from 'react';
import Landing from '../Landing/Landing';
import About from '../About/About';
import Product from '../Product/Product';
import Services from '../Services/Services';
import Partner from '../Partner/Partner';
import Contact from '../Contact/Contact';

const Home = () => {
     return (
          <div>
               <Landing></Landing>
               <About></About>
               <Product></Product>
               <Services></Services>
               <Partner></Partner>
               <Contact></Contact>
          </div>
     );
};

export default Home;