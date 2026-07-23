import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}

          <div data-aos="fade-right" data-aos-duration="1000">
            <span
              className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold text-sm"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              ABOUT COMPANY
            </span>

            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 leading-tight"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Building Dreams,
              <br />
              Creating Beautiful Spaces.
            </h2>

            <p
              className="mt-8 text-gray-600 leading-9 text-lg"
              data-aos="fade-right"
              data-aos-delay="350"
            >
              Vishwakarma Group of Companies has been delivering premium
              Interior Design, Civil Work, Plumbing, Electrical,
              Furniture, and Renovation services with quality,
              innovation, and customer satisfaction.
            </p>

            <p
              className="mt-5 text-gray-600 leading-8"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              From residential homes to commercial projects, our skilled
              professionals transform every space with precision,
              creativity, and modern solutions.
            </p>

            <div
              data-aos="zoom-in"
              data-aos-delay="650"
              data-aos-duration="700"
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-3 mt-10 bg-orange-500 hover:bg-orange-600 text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-300 hover:scale-105"
              >
                Know More
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Right Image */}

          <div
            className="relative flex justify-center"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            {/* Border */}
            <div
              className="absolute -top-5 -left-5 w-full h-full border-2 border-orange-400 rounded-3xl"
              data-aos="zoom-in"
              data-aos-delay="200"
            ></div>

            {/* Logo */}
            <img
              src="/Images/logo.png"
              alt="Vishwakarma Group"
              className="relative rounded-3xl shadow-2xl w-full max-w-md object-cover bg-white p-8 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;