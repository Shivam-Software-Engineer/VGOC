import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ChatBot from "../Components/Chat/ChatBot";

const MainLayout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />

      {/* Ye hamesha screen ke bottom right me rahega */}
      <ChatBot />
    </>
  );
};

export default MainLayout;