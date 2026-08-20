import { FaWhatsapp } from "react-icons/fa";

const Chatconnect = () => {
  const phoneNumber = "918652550155"; // apna WhatsApp number
  const message = "Hi, I want to discuss about my work.";

  const handleWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 
                 bg-green-500 hover:bg-green-600 
                 text-white w-14 h-14 rounded-full 
                 flex items-center justify-center 
                 shadow-lg hover:scale-110 
                 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </button>
  );
};

export default Chatconnect;