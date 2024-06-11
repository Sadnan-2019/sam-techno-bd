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
               <div class="flex items-center justify-center h-screen">
  <div class="grid grid-cols-1 gap-4 place-items-center">
    <div class="bg-blue-500 text-white p-4">div one</div>
    <div class="bg-green-500 text-white p-4">two</div>
  </div>
</div>
               <Contact></Contact>
          </div>
     );
};

export default Home;