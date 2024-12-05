import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"; // Adjust based on your routing library
import { navLinks } from "../../../constant/data";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`${
        isHomePage ? "absolute z-50 bg-white" : "bg-[#d9d9d9]"
      } w-full md:py-0 md:h-[130px] flex items-center`}
    >
      <nav className="w-full">
        <div
          className="relative px-[30px]
   md:px-[32px]
   lg:px-[60px] 
   xl:px-[100px] 
   2xl:px-[150px]  flex justify-between items-center py-3 "
        >
          {/* Logo Section */}
          <Link
            className={`flex items-center cursor-pointer ${
              isOpen ? "z-50" : ""
            }`}
            to={"/"}
          >
            <img
              src="images/home/hero/logo.png"
              alt="Logo"
              className="w-[46px] h-[56px]"
            />
          </Link>

          {/* Links Section */}
          <div className="hidden md:flex space-x-[50px]">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#397CCA] font-semibold"
                    : "text-[#0E0D0DCC] opacity-[.8] font-semibold"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Button */}
          <div className="hidden md:flex justify-end min-w-[273px]">
            {isHomePage ? (
              <button className=" bg-blue-500 text-white px-4 py-2 gap-1 flex items-center rounded-md shadow hover:bg-blue-600 transition">
                Book a Free Consultation
                <img
                  src="/images/home/hero/material-symbols_arrow-insert (1).svg"
                  alt=""
                />
              </button>
            ) : (
              <button className="bg-blue-500 text-white px-4 font-semibold py-2 gap-1 flex items-center rounded-md shadow hover:bg-blue-600 transition">
                Contact us
                <img
                  src="/images/home/hero/material-symbols_arrow-insert (1).svg"
                  alt=""
                />
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute z-40 top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end">
            {/* <button
                            className="text-gray-600 focus:outline-none"
                            onClick={() => setIsOpen(false)}
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button> */}
          </div>
          {/* Navigation Links */}
          <div className="px-4 pt-2 pb-3 flex flex-col py-4 mt-20 ">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  isActive ? "text-[#397CCA] font-semibold mb-2" : "link mb-2"
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex justify-center hidden md:block">
              {isHomePage ? (
                <button className=" bg-blue-500 items-center font-semibold text-white px-4 py-2 rounded-md shadow flex gap-1 hover:bg-blue-600 transition">
                  Book a Free Consultation
                  <img
                    src="/images/home/hero/material-symbols_arrow-insert (1).svg"
                    alt=""
                  />
                </button>
              ) : (
                <button className=" bg-blue-500 items-center text-white px-4 py-2 rounded-md shadow flex gap-1 hover:bg-blue-600 transition font-semibold">
                  Contact us
                  <img
                    src="/images/home/hero/material-symbols_arrow-insert (1).svg"
                    alt=""
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
