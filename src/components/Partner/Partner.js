import React from 'react';
import Marquee from 'react-fast-marquee';
import partner1 from "../../assets/hcah.png"
import partner2 from "../../assets/galay.png"
const Partner = () => {
     return (
          <div>
                   <div className=" md:mx-16 lg:mx-24 mx-8 py-12">
        <h2 className="   text-black text-xl text-center   font-bold poppins-b lg:text-2xl  " data-aos="fade-up"
            data-aos-duration="1000" >
       OUR PARTNER  </h2>
        {/* <h1
            className="  w-64 h-1 rounded-lg mt-2 mb-4 mx-auto"
            style={{ backgroundColor: "#453364" }}
          ></h1> */}
      </div>
      <Marquee   gradientColor={false} speed={80} gradient={false} play={true}>
        <div className="  	  	 mx-10">
          <img
            src={partner1}
            alt="Shoes"
            className="w-52   rounded-full"
          />
         </div>
        <div className="       	  mx-10">
          <img
    src={partner2}
            alt="Shoes"
            className="  w-52  rounded-full  "
          />
         </div></Marquee>
          </div>
     );
};

export default Partner;