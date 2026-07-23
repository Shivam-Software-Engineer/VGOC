import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/Images/1.jpeg",
  "/Images/2.jpeg",
  "/Images/3.jpeg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden ">
      <div className="relative h-[250px] sm:h-[400px] md:h-[550px] lg:h-[700px] xl:h-[800px]">
        {/* Images */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === current
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover select-none"
              draggable={false}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-black/45"></div>
          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20
          w-11 h-11 md:w-14 md:h-14
          rounded-full
          bg-white/20 backdrop-blur-md
          border border-white/30
          hover:bg-white hover:text-black
          transition-all duration-300
          flex items-center justify-center
          shadow-xl"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20
          w-11 h-11 md:w-14 md:h-14
          rounded-full
          bg-white/20 backdrop-blur-md
          border border-white/30
          hover:bg-white hover:text-black
          transition-all duration-300
          flex items-center justify-center
          shadow-xl"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? "w-8 h-3 bg-orange-500"
                  : "w-3 h-3 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;