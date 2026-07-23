import React from "react";

const clients = [
  "/Images/Clients/1.png",
  "/Images/Clients/2.png",
  "/Images/Clients/3.png",
  "/Images/Clients/4.png",
  "/Images/Clients/5.png",
  "/Images/Clients/6.png",
  "/Images/Clients/7.png",
  "/Images/Clients/8.png",
  "/Images/Clients/9.png",
  "/Images/Clients/10.png",
  "/Images/Clients/11.png",
  "/Images/Clients/12.png",
  "/Images/Clients/13.png",
  "/Images/Clients/14.png",
  "/Images/Clients/15.png",
  "/Images/Clients/16.png",
  "/Images/Clients/17.png",
  "/Images/Clients/18.png",
  "/Images/Clients/19.png",
  "/Images/Clients/20.png",
  "/Images/Clients/21.png",
  "/Images/Clients/22.png",
  "/Images/Clients/23.png",
  "/Images/Clients/24.png",
  "/Images/Clients/25.png",
  "/Images/Clients/26.png"
];

const OurClients = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      <div className="max-w-[1450px] mx-auto px-5">

        {/* Heading */}

        <div
          className="text-center mb-16"
          data-aos="fade-down"
        >
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Trusted By
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Our Clients
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-8">
            We proudly serve leading companies with reliable
            Interior, Civil, Electrical, Plumbing and Furniture
            solutions.
          </p>
        </div>

        {/* Clients */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">

          {clients.map((logo, index) => (

            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white/70 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-lg hover:shadow-orange-200 transition-all duration-500 hover:-translate-y-3 p-8 flex items-center justify-center h-40"
            >
              <img
  src={logo}
  alt=""
  className="max-h-20 object-contain transition-transform duration-500 group-hover:scale-110"
/>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default OurClients;