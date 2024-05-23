import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import logo from "../../assets/icon.png";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialInstagram, TiSocialTwitter } from "react-icons/ti";
const TopNav = () => {
  return (
    <div>
      <div>
        <div className="flex   flex-col md:flex-row  justify-between px-10	 lx:px-12  py-4  items-center bg-[#123261]">
          <div>
            <a href="/" className="py-4 text-white">
              <img src={logo} className="w-32" alt="" />
            </a>
            {/* <button  className="bg-red-400">        <a href="https://api.whatsapp.com/send?phone=01892409715" >Send Message</a></button> */}
          </div>
          <div className="grid grid-cols-3 justify-items-center items-center gap-12  ">
            <div
              className="flex items-center font-bold     gap-2"
              style={{ color: "white" }}
            >
              <div className="text-shadow text-white">
                <MdOutlinePhonelinkRing className="text-[10px]   lg:text-2xl      " />
              </div>
              <div className="   ">
                <a
                  href="tel:+8801736776387"
                  className="text-[10px] lg:text-xs   	"
                >
                  +8801736776387
                </a>
                <a
                  href="tel:+8801751330394"
                  className="text-[10px] lg:text-xs   	"
                >
                  <p>+8801751330394</p>
                </a>
              </div>
            </div>
            <div
              className="flex items-center font-bold  gap-2"
              style={{ color: "white" }}
            >
              <div className="text-shadow text-white">
                <HiOutlineMailOpen className="ml-2 lg:ml-0 text-[10px] lg:text-2xl   	  " />
              </div>
              <div className=" ">
                <p className="text-[10px] lg:text-xs     	">Email us</p>
                <a
                  href="mailto:info@sam.com.bd"
                  className="text-[10px] lg:text-xs  	"
                >
                  samtandb2022@gmail.com
                </a>
              </div>
            </div>
            <div className="  sm:ml-7  lg:ml-0" style={{ color: "white" }}>
              <div className="flex  justify-items-center items-center gap-2  text-white">
                <FaFacebookSquare className="text-[10px] lg:text-lg ml-2 text-shadow  " />
                {/* <a target="_blank" href="">
                  //FOR FACEBOOK LINK
                </a> */}
                <BsLinkedin className="text-[10px] lg:text-lg ml-2 text-shadow " />
                <TiSocialTwitter className="text-[10px] lg:text-lg ml-2 text-shadow  " />
                <TiSocialInstagram className=" text-[10px] lg:text-lg ml-2 text-shadow  " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
