import React from "react";
import lab from "../../assets/LabEstablishment.png";
import slaes from "../../assets/sales.png";
import easyinstallation from "../../assets/easy-installation.png";
import training from "../../assets/web.png";
const Services = () => {
  return (
    <div className=" py-10">

<div class="section-title">
            <h2 className='text-center text-2xl font-bold'>OUR SERVICES</h2>
            <p className='text-center text-xl font-bold py-7'>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
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
