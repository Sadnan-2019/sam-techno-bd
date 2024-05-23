import React from "react";
import FaWhatsapp from "../../assets/whatsapp.png";
import "./WhatsApp.css";
const WhatsApp = () => {
  return (
    <div>
      <div>
        <a className="" target="_blank" href="https://wa.me/+8801736776387">
          <img
            src={FaWhatsapp}
            // onClick={gotoBtn}
            className=" float-right w-12 top-btn   cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default WhatsApp;
