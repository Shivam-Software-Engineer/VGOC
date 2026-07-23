import Footer from "../Components/Footer";
import Header from "../Components/Header";

const About = () => {
    return (
     <>
     <Header/>

     <section className="py-24 bg-gray-50">
  
  <div className="max-w-5xl mx-auto px-5">

    <h1 className="text-center text-5xl font-bold text-gray-900">
      About Us
    </h1>

    <div className="w-28 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>

    <p className="mt-12 text-lg text-gray-600 leading-10">
      Welcome to Vishwakarma Group of Companies!

      Since our establishment in 2018, we have been dedicated to
      delivering excellence in Interior Design, Civil Construction,
      Plumbing, Electrical, Furniture, AC Work, and Renovation
      services.

      Our experienced professionals focus on quality craftsmanship,
      innovative ideas, and customer satisfaction.

      Whether you are planning to build your dream home, renovate an
      office, or upgrade your interiors, we provide complete
      end-to-end solutions under one roof.

      We believe every project deserves perfection, attention to
      detail, and timely delivery. Our goal is to create spaces that
      inspire comfort, beauty, and functionality.

      Vishwakarma Group of Companies continues to transform ideas
      into reality with trust, transparency, and professional
      service.
    </p>

  </div>

</section>
     <Footer/>
     </>
    );
  };
  
  export default About;