  import React from "react";
  import { Link } from "react-router-dom";
  import { ArrowRight } from "lucide-react";
  import services from "../Data/servicesData";

  const ServicesSection = () => {
    return (
      <section className="py-24 bg-gradient-to-b from-white to-gray-100 overflow-hidden">

        <div className="max-w-[1200px] mx-auto px-5">

          {/* Heading */}

          <div
            data-aos="fade-down"
            className="text-center mb-20"
          >
            <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
              WHAT WE DO
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-5 text-gray-900">
              Our Premium Services
            </h2>

            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-6"></div>

            <p className="text-gray-500 max-w-2xl mx-auto mt-7 leading-8">
              We provide complete Interior, Civil, Electrical,
              Plumbing, Furniture and Maintenance services for
              Residential & Commercial Projects.
            </p>
          </div>

          {/* Cards */}

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

            {services.map((service, index) => (

              <div
                key={service.id}
                data-aos={
                  index % 3 === 0
                    ? "fade-right"
                    : index % 3 === 1
                    ? "fade-up"
                    : "fade-left"
                }
                data-aos-duration="1000"
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-orange-300/40 transition-all duration-700 hover:-translate-y-4 border border-gray-100"
              >

                {/* Image */}

                <div className="relative overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                  <span className="absolute bottom-5 left-5 bg-orange-500 text-white text-xs px-4 py-2 rounded-full uppercase tracking-wider">
                    Premium
                  </span>

                </div>

                {/* Content */}

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-7 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}

                  <div className="flex flex-wrap gap-3 mb-8">

                    {service.features.map((item, i) => (

                      <span
                        key={i}
                        className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                  {/* Button */}

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 font-semibold text-orange-500 hover:text-orange-600 transition"
                  >
                    View More

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-2 transition"
                    />

                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
    );
  };

  export default ServicesSection;