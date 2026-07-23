import React from "react";
import { Quote, User } from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const testimonials = [
  {
    id: 1,
    name: "Dhavall Ramesh Parmar",
    role: "Client",
    image: "",
    review:
      "Wonderful people, from design to project management, all went according to plan and to budget. We loved that they listened to our ideas and presented various options to suit.",
  },
  {
    id: 2,
    name: "Hitesh Prajapati",
    role: "Client",
    image: "",
    review:
      "He is having creative ideas and combines a good team with experienced carpenters, plumbers and electricians. The work quality exceeded expectations.",
  },
  {
    id: 3,
    name: "Jugnu Times",
    role: "Manager",
    image: "",
    review:
      "I can't express how thrilled I am with the amazing work done by Vishwakarma. They completed the project ahead of schedule and transformed our space into a beautiful and functional environment.",
  },
  {
    id: 4,
    name: "Gauresh Parkar",
    role: "Operations Manager",
    image: "",
    review:
      "I am highly impressed with the services provided by Vishwakarma Group of Companies. Their expertise in interior work and maintenance transformed our office into a functional and aesthetic environment.",
  },
  {
    id: 5,
    name: "Deepak Vishwakarma",
    role: "President",
    image: "",
    review:
      "Great experience from start to finish. The team was professional, communication was excellent and the attention to detail in both interior painting and exterior cladding was superb.",
  },
  {
    id: 6,
    name: "Milan Soni",
    role: "Flat Owner",
    image: "",
    review:
      "Overall, I am very happy with the final outcome. The modular kitchen and false ceiling look superb. The quality of materials used was great and the team was flexible with appointments.",
  },
  {
    id: 7,
    name: "Ayush Pathak",
    role: "Senior Manager",
    image: "",
    review:
      "I wanted to send a massive thank you for the incredible work your team did on our office renewal. The space looks absolutely incredible and the feedback has been overwhelmingly positive.",
  },
  {
    id: 8,
    name: "Vicky Shah",
    role: "Facilities Manager",
    image: "",
    review:
      "Just wanted to personally thank you for the successful completion of our office renovation project. Everything was handled professionally from beginning to end.",
  },
  {
    id: 9,
    name: "Jai Khandhar",
    role: "Maintenance Manager",
    image: "",
    review:
      "Your team exhibited exceptional skill and professionalism throughout the renovation process. We appreciate your commitment to quality and meeting our strict timelines.",
  },
  {
    id: 10,
    name: "Kunal Patel",
    role: "Facilities Manager",
    image: "",
    review:
      "VGOC Team, thank you for the excellent service over the last few months. Your attention to detail and quick issue resolution have really elevated our final product.",
  },
  {
    id: 11,
    name: "Soniya Singh",
    role: "Admin Sr. Manager",
    image: "",
    review:
      "The design and execution by VGOC were fantastic. The team was responsive to feedback and worked hard to resolve all our concerns during the process.",
  },
  {
    id: 12,
    name: "Rahul Roy",
    role: "Sr. Manager",
    image: "",
    review:
      "Very fast and quick service. We appreciate VGOC for the nice work and smooth execution of the project.",
  },
  {
    id: 13,
    name: "Rohit Singh",
    role: "Product Manager",
    image: "",
    review:
      "I highly recommend VGOC. Their customer service is second to none and they completed everything properly, on budget and exactly as promised.",
  },
  {
    id: 14,
    name: "Chandrajeet Vishwakarma",
    role: "CEO",
    image: "",
    review:
      "Thank you for your dedication, hard work and commitment to delivering such outstanding results. I am extremely happy with the final outcome and highly recommend your services.",
  },
];

const Testimonials = () => {
  return (
    <>
    <Header/>
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}

        <div
          className="text-center mb-20"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            TESTIMONIALS
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-5">
            What Our Clients Say
          </h2>

          <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mt-6"></div>

          <p className="text-gray-600 max-w-3xl mx-auto mt-7 leading-8">
            Customer satisfaction is our biggest achievement. Here's what our
            clients say about working with Vishwakarma Group of Companies.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              data-aos-duration="1000"
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-orange-300/40 hover:-translate-y-3 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Quote */}

              <Quote
                size={40}
                className="text-orange-200 group-hover:text-orange-500 transition mb-5"
              />

              {/* Review */}

              <p className="text-gray-600 leading-8 text-[15px] flex-1">
                "{item.review}"
              </p>

              {/* Bottom */}

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User size={28} className="text-orange-500" />
                  )}
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    </section>
    <Footer/>
    </>
  );
};

export default Testimonials;