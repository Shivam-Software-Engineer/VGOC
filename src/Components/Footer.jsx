import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-[1200px] mx-auto px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <div className="flex items-center gap-4">

              <img
                src="/Images/logo.png"
                alt="VGOC Logo"
                className="w-16 h-16 object-contain"
              />

              <h2 className="text-2xl font-bold leading-tight">
                Vishwakarma
                <br />
                Group of Companies
              </h2>

            </div>

            <p className="mt-6 text-gray-600 leading-8">
              We provide complete Interior, Civil, Plumbing,
              Electrical, Furniture & Renovation services with
              quality workmanship, affordable pricing and timely
              project delivery.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-600">
  <li>
    <Link className="hover:text-orange-500 transition" to="/">
      Home
    </Link>
  </li>

  <li>
    <Link
      className="hover:text-orange-500 transition"
      to="/about"
    >
      About Us
    </Link>
  </li>

  <li>
    <Link
      className="hover:text-orange-500 transition"
      to="/services"
    >
      Our Services
    </Link>
  </li>

  <li>
    <Link
      className="hover:text-orange-500 transition"
      to="/gallery"
    >
      Gallery
    </Link>
  </li>

  <li>
    <Link
      className="hover:text-orange-500 transition"
      to="/testimonial"
    >
      Testimonial
    </Link>
  </li>

  <li>
    <Link
      className="hover:text-orange-500 transition"
      to="/contact"
    >
      Contact Us
    </Link>
  </li>
</ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact Us
            </h3>

            <div className="space-y-6">

              <div className="flex gap-3">

                <MapPin
                  className="text-orange-500 flex-shrink-0 mt-1"
                  size={20}
                />

                <p className="text-gray-600 leading-7">
                  Shop no. 8, Siddhivinayak, B-7,
                  near GCC Club Road,
                  Shanti Vidya Nagari,
                  Kashimira,
                  Mira Road East,
                  Mira Bhayandar,
                  Maharashtra 401107
                </p>

              </div>

              <div className="flex items-center gap-3">

                <Phone className="text-orange-500" size={18} />

                <a
                  href="tel:+919823550155"
                  className="hover:text-orange-500"
                >
                  +91 9823550155
                </a>

              </div>

              <div className="flex items-center gap-3">

                <Mail className="text-orange-500" size={18} />

                <a
                  href="mailto:vishwakarmagocompany2018@gmail.com"
                  className="hover:text-orange-500 break-all"
                >
                  vishwakarmagocompany2018@gmail.com
                </a>

              </div>

            </div>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 text-white flex items-center justify-center hover:scale-110 transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-110 transition duration-300"
              >
                <FaYoutube />
              </a>

              <a
                href="https://wa.me/919823550155"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 transition duration-300"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Google Map */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Find Us
            </h3>
            
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d270.36907473505687!2d72.88289380663429!3d19.285918683946353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b193ea5dc9e7%3A0x8acf9d1d4fd355d1!2sMohan%20Packers%20And%20Movers!5e0!3m2!1sen!2sin!4v1784727052417!5m2!1sen!2sin"
              className="w-full h-72 rounded-2xl shadow-lg border border-gray-200"
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} Vishwakarma Group of Companies.
            All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <a href="#" className="hover:text-orange-500">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-orange-500">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-orange-500">
              Shipping Policy
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;