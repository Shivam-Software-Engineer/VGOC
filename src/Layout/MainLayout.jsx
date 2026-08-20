import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import ChatBot from "../Components/Chat/ChatBot";
import Chatconnect from "../Components/Chat/Chatconnect";
const MainLayout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />

      {/* Ye hamesha screen ke bottom right me rahega */}
      {/* <ChatBot /> */}
      <Chatconnect/>
    </>
  );
};

export default MainLayout;