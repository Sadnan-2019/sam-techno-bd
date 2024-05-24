import React from "react";
import { useNavigate } from "react-router-dom";

const AllProductDetails = (props) => {
  const { id, name, img } = props.allproduct;

  // Check if 'id' is defined before using it

  const navigate = useNavigate();

  const handleServiceDetails = (id) => {
    navigate(`/product-details/${id}`);
  };
  return (
    <div>
      <div className="py-5">
        <div
          className="card  border     "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          style={{ height: "380px" }}
        >
          <figure className="">
            <img
              src={img}
              alt="Shoes"
              className="  p-4  "
              style={{ height: "250px", borderRadius: "25px" }}
            />
          </figure>
          <div className=" items-center text-center text-black p-4">
            <p className="text-[20px]">{name}</p>
          </div>

          <div className="py-2 px-5   flex justify-center">
             
              <button
              onClick={() => handleServiceDetails(id)}
                htmlFor="my-modal-6"
                className="btn btn-md modal-button mt-3 text-[white] bg-gradient-to-r from-[#303640] to-[#103264]    "
                style={{ backgroundColor: "#453364" }}
              >
                Product Details
              </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductDetails;
