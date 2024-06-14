import React from "react";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="about">
        <div class="  w-full dark:bg-gray-800">
          <section class="flex flex-col justify-center max-w-7xl px-4 py-10 mx-auto sm:px-6">
            <h2 class="mb-6 text-2xl text-center font-bold text-gray-100 md:text-3xl dark:text-white">
              ABOUT US
            </h2>
            <div class="mb-16 text-center">
              
              <p class="mt-2 sm:text-lg lg:text-xl font-bold tracking-tight text-white">
              Established in 2020, SAM Technology and Business Supplies develops and manufactures a wide range of products for engineering education, industry, and research laboratories. We provide technical teaching equipment to universities, colleges, and polytechnic institutes, as well as research and laboratory equipment for agricultural universities and organizations. Additionally, we supply testing and manufacturing equipment for industries and land surveying equipment for various institutions in Bangladesh, including Dhaka University and Daffodil University. We deliver world-class products from renowned global manufacturers and develop high-quality products locally in Bangladesh.
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 px-1">
            <div class="p-4 flex flex-col justify-between gap-2 border rounded-lg shadow-md bg-white dark:bg-gray-700 dark:border-gray-400/40">
                <a
                  class="text-xl font-semibold text-blue-700 hover:underline two-lines dark:text-blue-100"
                  href=""
                >
                  Quiality Service
                </a>
                <p class="text-gray-800 two-lines dark:text-gray-300">
                Our team of highly trained engineers, with expertise from the UK, Italy, Korea, Singapore, Taiwan, China, and India, operates a world-class service center and R&D department. They rigorously inspect imported equipment and advance the development of locally manufactured products. Collaborating with manufacturers in China and India, our team enhances imported products and expands their capabilities. Our dedicated technical team ensures that warranties for purchased products are maintained with the highest commitment.
                </p>

              </div>
              <div class="p-4 flex flex-col justify-between gap-2 border rounded-lg shadow-md bg-white dark:bg-gray-700 dark:border-gray-400/40">
                <a
                  class="text-xl font-semibold text-blue-700 hover:underline two-lines dark:text-blue-100"
                  href=""
                >
                  Online Support
                </a>
                <p class="text-gray-800 two-lines dark:text-gray-300">
                Our dedicated sales team promptly attends to customer queries and ensures careful handling of online purchases delivered to homes. Our engineers install items on-site and provide demonstrations if needed (charges apply). We offer a cash-on-delivery option for convenience. All equipment is thoroughly inspected before delivery, with calibration done at our service center. We provide world-class support to ensure your complete satisfaction, standing by you every step of the way. Trust us for reliable, efficient service tailored to your needs.
                                </p>

              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
