import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const galleryImages = [
  "/Images/Gallery/1.jpeg",
  "/Images/Gallery/2.jpeg",
  "/Images/Gallery/3.jpeg",
  "/Images/Gallery/4.jpeg",
  "/Images/Gallery/5.jpeg",
  "/Images/Gallery/6.jpeg"
];

const Gallery = () => {
  return (
    <>
    <Header/>
    <section className="py-24 bg-gradient-to-b from-white via-orange-50 to-white overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-5">
        {/* Heading */}

        <div
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Our Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
            Project Gallery
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-8">
            A glimpse of our completed Interior, Civil, Electrical, Plumbing,
            Furniture and Turnkey projects delivered with quality and precision.
          </p>
        </div>

        {/* Gallery */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl border border-orange-100"
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center">
                <div className="text-center text-white mb-8 translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-xl font-semibold">
                    Project {index + 1}
                  </h3>

                  <p className="text-sm text-gray-200 mt-2">
                    Premium Interior Solution
                  </p>
                </div>
              </div>

              {/* Orange Glow */}

              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-orange-400 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Gallery;