  import AboutPreview from "../Components/AboutPreview"
  import Carousel from "../Components/Caousel"
  import Footer from "../Components/Footer"
  import Header from "../Components/Header"
  import WhyChooseUs from "../Components/WhyChooseUs"
 
  import OurClients from "../Components/OurClients"
  import { useEffect } from "react"
  import ServicesSection from "../Components/ServicesSection"



  const Home = () => {
      
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