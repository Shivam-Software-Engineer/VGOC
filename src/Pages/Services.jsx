import React, { useEffect } from "react";
import services from "../Data/servicesData";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle, ArrowRight } from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
    <Header />
    <section className="services-section"> <section className="bg-gray-50">

{/* Hero Section */}

<div className="relative h-[55vh] flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black">

  <div className="absolute inset-0 bg-black/50"></div>

  <div
    className="relative text-center text-white px-5"
    data-aos="zoom-in"
  >
    <h1 className="text-5xl md:text-6xl font-bold mb-5">
      Our Services
    </h1>

    <p className="max-w-2xl mx-auto text-lg text-gray-200 leading-8">
      We deliver premium Interior, Civil, Electrical, Plumbing,
      Furniture and Maintenance solutions for Residential &
      Commercial Projects with unmatched quality.
    </p>
  </div>

</div>

{/* Services */}

<div className="max-w-[1200px] mx-auto px-5 py-24 space-y-24">

  {services.map((service, index) => (

    <div
      key={service.id}
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        index % 2 !== 0 ? "lg:flex-row-reverse" : ""
      }`}
    >

      {/* Image */}

      <div
        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}
      >

        <div className="overflow-hidden rounded-3xl shadow-xl group">

          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[450px] object-cover transition duration-700 group-hover:scale-110"
          />

        </div>

      </div>

      {/* Content */}

      <div
        data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
        className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}
      >

        <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
          Premium Service
        </span>

        <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
          {service.title}
        </h2>

        <p className="text-gray-600 leading-8 mb-8">
          {service.description}
          <br />
          <br />
          Our experienced team ensures every project is completed
          with premium quality materials, modern designs,
          expert craftsmanship, timely delivery and complete
          customer satisfaction. Whether it's a residential
          property or commercial space, we provide customized
          solutions that perfectly match your needs and budget.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">

          {service.features.map((feature, i) => (

            <div
              key={i}
              className="flex items-center gap-3 bg-white rounded-xl p-4 shadow hover:shadow-lg transition"
            >

              <CheckCircle
                size={22}
                className="text-orange-500"
              />

              <span className="font-medium text-gray-700">
                {feature}
              </span>

            </div>

          ))}

        </div>

        <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-full flex items-center gap-3 font-semibold shadow-lg hover:shadow-orange-400">

          Get Free Consultation

          <ArrowRight size={20} />

        </button>

      </div>

    </div>

  ))}

</div>

{/* CTA */}

<div className="bg-orange-500 py-20">

  <div
    className="max-w-5xl mx-auto text-center text-white px-5"
    data-aos="zoom-in"
  >

    <h2 className="text-4xl font-bold mb-6">
      Let's Build Your Dream Space
    </h2>

    <p className="text-lg leading-8 text-orange-100 mb-10">
      From Interior Designing to Complete Civil, Electrical,
      Plumbing and Maintenance Services, we provide everything
      under one roof with premium quality and affordable pricing.
    </p>

    <button className="bg-white text-orange-500 hover:bg-gray-100 transition px-10 py-4 rounded-full font-bold shadow-lg">
      Contact Us
    </button>

  </div>

</div>

</section>
      
    </section>
    <Footer />
   </>
  );
};

export default Services;