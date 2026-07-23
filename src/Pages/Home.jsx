import AboutPreview from "../Components/AboutPreview"
import Carousel from "../Components/Caousel"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import WhyChooseUs from "../Components/WhyChooseUs"
import AOS from "aos";
import "aos/dist/aos.css";
import OurClients from "../Components/OurClients"
import { useEffect } from "react"
import ServicesSection from "../Components/ServicesSection"



const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 900,
          once: true,
          easing: "ease-out-cubic",
        });
      }, []);
    return (
        <div>
            <Header/>
            <Carousel/>
            <AboutPreview/>
            <WhyChooseUs/>
            <OurClients/>
            <ServicesSection/>


            <Footer/>
        </div>
    )
}

export default Home