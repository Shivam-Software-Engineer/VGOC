import {
  Settings2,
  ClipboardCheck,
  Clock3,
  Puzzle,
  IndianRupee,
} from "lucide-react";

const features = [
  {
    icon: Settings2,
    title: "Flexible Customization",
    desc: "Solutions designed according to your needs.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Checking",
    desc: "Every project passes through strict quality inspection.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    desc: "We value your time and always deliver on schedule.",
  },
  {
    icon: Puzzle,
    title: "All In One Solution",
    desc: "Everything under one roof from planning to execution.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Budget",
    desc: "Premium quality services at competitive prices.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Heading */}

        <div
          className="text-center max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <span
            className="text-orange-500 font-semibold tracking-[4px] uppercase"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Why Choose Us
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold mt-4 text-gray-900"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Why Choose
            <span className="text-orange-500"> VGOC?</span>
          </h2>

          <p
            className="mt-6 text-gray-500 leading-8"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            We provide complete Interior, Civil, Plumbing,
            Electrical and Furniture solutions with premium
            quality and professional execution.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7 mt-20">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={index * 150}
                data-aos-duration="800"
                className="group relative overflow-hidden rounded-3xl bg-white backdrop-blur-xl border border-gray-100 shadow-xl p-7 transition-all duration-500 hover:-translate-y-5 hover:shadow-2xl hover:shadow-orange-200"
              >
                {/* Top Orange Line */}

                <div className="absolute left-0 top-0 h-1 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full"></div>

                {/* Icon */}

                <div className="w-20 h-20 rounded-2xl bg-orange-100 flex items-center justify-center transition-all duration-500 group-hover:bg-orange-500 group-hover:rotate-12 group-hover:scale-110">
                  <Icon
                    size={40}
                    className="text-orange-500 transition-all duration-500 group-hover:text-white"
                  />
                </div>

                {/* Title */}

                <h3 className="mt-7 text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-gray-500 leading-7">
                  {item.desc}
                </p>

                {/* Background Circle */}

                <div className="absolute -right-10 -bottom-10 w-28 h-28 rounded-full bg-orange-100 opacity-0 group-hover:opacity-30 transition-all duration-700"></div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;