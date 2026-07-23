import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
   <>
   <Header/>
   <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div
          className="text-center mb-20"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            CONTACT US
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-5">
            Let's Build Your Dream Space
          </h1>

          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-6"></div>

          <p className="text-gray-600 max-w-3xl mx-auto mt-7 leading-8">
            We'd love to hear about your project. Contact us today for Interior,
            Civil, Furniture, Plumbing, Electrical or Renovation services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left */}
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Get In Touch
            </h2>

            <div className="space-y-7">
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                  <MapPin className="text-orange-500" />
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-1">Office Address</h3>

                  <p className="text-gray-600 leading-7">
                    Shop No. 8, Siddhivinayak B-7,
                    <br />
                    Near GCC Club Road,
                    <br />
                    Kashimira, Mira Road East,
                    <br />
                    Mira Bhayandar,
                    Maharashtra - 401107
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                  <Phone className="text-orange-500" />
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-1">Call Us</h3>

                  <a
                    href="tel:+919823550155"
                    className="text-gray-600 hover:text-orange-500"
                  >
                    +91 9823550155
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                  <Mail className="text-orange-500" />
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>

                  <a
                    href="mailto:vishwakarmagocompany2018@gmail.com"
                    className="text-gray-600 hover:text-orange-500 break-all"
                  >
                    vishwakarmagocompany2018@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                  <Clock className="text-orange-500" />
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-1">Working Hours</h3>

                  <p className="text-gray-600">
                    Monday - Saturday
                    <br />
                    09:00 AM - 07:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-10">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white flex items-center justify-center hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-110 transition"
              >
                <FaYoutube />
              </a>

              <a
                href="https://wa.me/919823550155"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Right */}
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Send Message
            </h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
              />

              <textarea
                rows="6"
                placeholder="Write Your Message..."
                className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-orange-500 resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl flex items-center gap-3 font-semibold transition"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1200"
          className="mt-20"
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d270.36907473505687!2d72.88289380663429!3d19.285918683946353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b193ea5dc9e7%3A0x8acf9d1d4fd355d1!2sMohan%20Packers%20And%20Movers!5e0!3m2!1sen!2sin!4v1784727052417!5m2!1sen!2sin"
            className="w-full h-[450px] rounded-3xl shadow-xl border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
   <Footer/>
   </>
  );
};

export default Contact;