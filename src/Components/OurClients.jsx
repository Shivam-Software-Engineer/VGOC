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
  "/Images/Clients/26.png",
];

const OurClients = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-down">
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Trusted By
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
            Our Clients
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-8">
            We proudly serve leading companies with reliable Interior,
            Civil, Electrical, Plumbing and Furniture solutions.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex w-max animate-scroll gap-6">
            {/* Double array for infinite effect */}
            {[...clients, ...clients].map((logo, index) => (
              <div
                key={index}
                className="group min-w-[170px] md:min-w-[200px] bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-orange-200 transition-all duration-500 p-6 flex items-center justify-center h-36"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="max-h-20 w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 35s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default OurClients;