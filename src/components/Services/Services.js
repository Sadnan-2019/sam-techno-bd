import React from "react";
import lab from "../../assets/LabEstablishment.png";
import slaes from "../../assets/sales.png";
import easyinstallation from "../../assets/easy-installation.png";
import training from "../../assets/web.png";
const Services = () => {
  return (
    <div className=" py-10">

<div class="section-title">
            <h1 className='text-center text-3xl font-bold'>OUR SERVICES</h1>
            <p className='text-center text-xl font-normal py-7'>
            At SAM Technology and Business, we pride ourselves on delivering comprehensive solutions tailored to meet the diverse needs of our customers. We prioritize swift delivery for all equipment and machinery purchases that are available in stock, ensuring they are dispatched as quickly as possible in accordance with the chosen purchasing method. This robust inventory management system enables us to meet our customers' needs promptly and reliably. Our services include:
            </p>
          </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2    lg:px-8 gap-10      ">
        <div
          style={{
            borderRadius: "25px",
          }}
          class="flex items-center     border    p-10 shadow-2xl shadow-blue-100"
        >
          <img
            class="object-cover w-32   lg:h-36 rounded-lg"
            src={lab}
            alt=""
          />

          <div class="ml-3 overflow-hidden">
            <h2 className="text-xs  text-black lg:text-2xl font-bold ">
              {" "}
              Lab Establishment{" "}
            </h2>
          </div>
        </div>
        <div
          style={{
            borderRadius: "25px",
          }}
          class="flex items-center     border    p-10 shadow-2xl shadow-blue-100"
        >
          <img
            class="object-cover w-32   lg:h-36 rounded-lg"
            src={slaes}
            alt=""
          />

          <div class="ml-3 overflow-hidden">
            <h2 className="text-xs  text-black lg:text-2xl font-bold ">
              {" "}
              Sales with Technial Support
{" "}
            </h2>
          </div>
        </div>
        <div
          style={{
            borderRadius: "25px",
          }}
          class="flex items-center     border    p-10 shadow-2xl shadow-blue-100"
        >
          <img
            class="object-cover w-32   lg:h-36 rounded-lg"
            src={easyinstallation}
            alt=""
          />

          <div class="ml-3 overflow-hidden">
            <h2 className="text-xs  text-black lg:text-2xl font-bold ">
              {" "}
              Quick Delivery & Installation{" "}
            </h2>
          </div>
        </div>
        <div
          style={{
            borderRadius: "25px",
          }}
          class="flex items-center     border    p-10 shadow-2xl shadow-blue-100"
        >
          <img
            class="object-cover w-32   lg:h-36 rounded-lg"
            src={training     }
            alt=""
          />

          <div class="ml-3 overflow-hidden">
            <h2 className="text-xs  text-black lg:text-2xl font-bold ">
              {" "}
              Comprehensive Training{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
