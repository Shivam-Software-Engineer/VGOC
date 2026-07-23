import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    document.body.style.overflow = mobileMenu ? "hidden" : "auto";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonial", path: "/testimonial" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-[1200px] mx-auto h-20 px-5 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src="/Images/logo.png"
              alt="Vishwakarma Group"
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />

            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold leading-none tracking-tight">
                <span className="text-gray-900">Vishwakarma</span>{" "}
                <span className="text-orange-500">Group</span>
              </h2>

              <p className="text-[10px] md:text-[11px] uppercase tracking-[3px] text-gray-500 mt-1">
                Of Companies
              </p>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative font-medium transition duration-300 group ${
                    isActive ? "text-orange-500" : "text-gray-700"
                  }`
                }
              >
                {item.name}

                <span className="absolute left-0 -bottom-2 h-[2px] bg-orange-500 transition-all duration-300 w-0 group-hover:w-full"></span>
              </NavLink>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenu(true)}
            className="lg:hidden w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setMobileMenu(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-all duration-500 ${
          mobileMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85%] max-w-sm z-[70]
        bg-white/15 backdrop-blur-3xl border-l border-white/30
        shadow-[0_20px_80px_rgba(0,0,0,0.25)]
        transition-all duration-500
        ${mobileMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/35 to-white/20"></div>

        <div className="relative h-full flex flex-col">
          {/* Top */}
          <div className="flex items-center justify-between p-6 border-b border-white/30">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">
                Vishwakarma
              </h2>

              <p className="text-xs tracking-[4px] uppercase text-gray-600">
                Group of Companies
              </p>
            </div>

            <button
              onClick={() => setMobileMenu(false)}
              className="w-11 h-11 rounded-full bg-white/50 backdrop-blur-lg border border-white/40 hover:rotate-90 transition-all duration-300 flex items-center justify-center"
            >
              <X size={22} />
            </button>
          </div>

          {/* Mobile Nav */}
          <div className="flex-1 px-6 py-8 overflow-auto">
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className={({ isActive }) =>
                    `group flex items-center justify-between rounded-2xl border px-5 py-4 transition-all duration-300 ${
                      isActive
                        ? "bg-orange-500 text-white border-orange-500"
                        : "border-white/40 bg-white/30 hover:bg-orange-500 hover:text-white"
                    }`
                  }
                >
                  <span className="font-semibold text-[16px]">
                    {item.name}
                  </span>

                  <ChevronRight
                    size={18}
                    className="group-hover:translate-x-2 transition"
                  />
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;