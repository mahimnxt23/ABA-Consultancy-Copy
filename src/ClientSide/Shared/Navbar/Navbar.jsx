// import { useState } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom"; // Adjust based on your routing library
// import { navLinks } from "../../../constant/data";
// import "./Navbar.css";
// import { FaChevronDown } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const isHomePage = location.pathname === "/";

//   const [openDropdown, setOpenDropdown] = useState(null);

//   const handleMouseEnter = (name) => {
//     setOpenDropdown(name);
//   };

//   const handleMouseLeave = () => {
//     setOpenDropdown(null);
//   };

//   return (
//     <div
//       className={`${
//         isHomePage ? "absolute z-50 bg-transparent" : " bg-[#F5F5F5]"
//       } w-full md:py-0 md:h-[130px] flex items-center`}
//     >
//       <nav className="w-full">
//         <div
//           className="relative px-[30px]
//    md:px-[32px]
//    lg:px-[80px]
//    xl:px-[100px]
//    2xl:px-[150px]  flex justify-between items-center py-3 "
//         >
//           {/* Logo Section */}
//           <Link
//             className={`flex items-center cursor-pointer ${
//               isOpen ? "z-50" : ""
//             }`}
//             to={"/"}
//           >
//             <img
//               src="/images/ABA-Consulting-Logo.webp"
//               alt="Logo"
//               className="w-[46px] h-[56px]"
//             />
//           </Link>

//           {/* Links Section */}
//           <div className="hidden lg:flex space-x-[50px] menuText">
//             {navLinks.map((link) => (
//               <NavLink
//                 key={link.name}
//                 to={link.href}
//                 className="relative group menuText"
//               >
//                 <div className="flex items-center gap-[6px] menuText">
//                   {/* Text */}
//                   <a
//                     // href={link.href}
//                     className="text-gray-700 hover:text-blue-600"
//                   >
//                     {link.name}
//                   </a>

//                   {/* Dropdown Icon and Menu */}
//                   {link.subLinks && (
//                     <div
//                       className="relative"
//                       onMouseEnter={() => handleMouseEnter(link.name)}
//                       onMouseLeave={handleMouseLeave}
//                     >
//                       {/* Dropdown Icon */}
//                       <FaChevronDown className="ml-1 text-sm hover:text-blue-600 transition-transform hover:rotate-180 cursor-pointer" />

//                       {/* Dropdown Menu */}
//                       {openDropdown === link.name && (
//                         <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-10">
//                           {link.subLinks.map((subLink) => (
//                             <li key={subLink.name}>
//                               <Link
//                                 to={subLink.href}
//                                 className="block px-4 py-2 menuText text-gray-700 hover:bg-gray-100 hover:text-blue-600"
//                               >
//                                 {subLink.name}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </NavLink>
//             ))}
//           </div>

//           {/* Button */}
//           <div className="hidden lg:flex justify-end min-w-[273px]">
//             {isHomePage ? (
//               <Link to="/consultation">
//                 <button className=" bg-blue-500 menuText text-white px-4 py-2 gap-1 flex items-center rounded-md shadow hover:bg-blue-600 transition duration-300 ease-in-out hover:scale-105">
//                   Book a Free Consultation
//                   <img
//                     src="/images/home/hero/material-symbols_arrow-insert (1).svg"
//                     alt=""
//                   />
//                 </button>
//               </Link>
//             ) : (
//               <Link to="/consultation">
//                 <button className=" bg-blue-500 menuText  text-white px-4 py-2 gap-1 flex items-center rounded-md shadow hover:bg-blue-600 transition duration-300 ease-in-out hover:scale-105">
//                   Book a Free Consultation
//                   <img
//                     src="/images/home/hero/material-symbols_arrow-insert (1).svg"
//                     alt=""
//                   />
//                 </button>
//               </Link>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden text-gray-600 focus:outline-none z-50"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <svg
//               className="w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`absolute z-40 menuText top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
//             isOpen ? "translate-y-0" : "-translate-y-full"
//           }`}
//         >
//           {/* Close Button */}
//           <div className="flex justify-end"></div>
//           {/* Navigation Links */}
//           <div className="px-[30px] menuText md:px-[32px] pt-2 pb-3 flex flex-col py-4 lg:mt-20  mt-28">
//             {navLinks.map((link) => (
//               // <NavLink
//               //   key={link.name}
//               //   to={link.href}
//               //   className={({ isActive }) =>
//               //     isActive ? "text-[#397CCA] font-semibold mb-2" : "link mb-2"
//               //   }
//               //   onClick={() => setIsOpen(false)}
//               // >
//               //   {link.name}
//               // </NavLink>

//               <NavLink
//                 key={link.name}
//                 to={link.href}
//                 className="relative group menuText"
//               >
//                 <div className="flex items-center gap-[6px] menuText">
//                   {/* Text */}
//                   <a
//                     // href={link.href}
//                     className="text-gray-700 menuText hover:text-blue-600"
//                   >
//                     {link.name}
//                   </a>

//                   {/* Dropdown Icon and Menu */}
//                   {link.subLinks && (
//                     <div
//                       className="relative menuText"
//                       onMouseEnter={() => handleMouseEnter(link.name)}
//                       onMouseLeave={handleMouseLeave}
//                     >
//                       {/* Dropdown Icon */}
//                       <FaChevronDown className="ml-1 text-sm hover:text-blue-600 transition-transform hover:rotate-180 cursor-pointer" />

//                       {/* Dropdown Menu */}
//                       {openDropdown === link.name && (
//                         <ul className="absolute top-0  left-10 bg-white shadow-lg rounded-md py-2 w-48 z-10">
//                           {link.subLinks.map((subLink) => (
//                             <li key={subLink.name}>
//                               <Link
//                                 to={subLink.href}
//                                 className="block px-4 py-2 menuText text-gray-700 hover:bg-gray-100 hover:text-blue-600"
//                               >
//                                 {subLink.name}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </NavLink>
//             ))}
//             <div className="flex justify-center hidden lg:block">
//               {isHomePage ? (
//                 <button className="menuText bg-blue-500 items-center font-semibold text-white px-4 py-2 rounded-md shadow flex gap-1 hover:bg-blue-600 transition duration-300 ease-in-out hover:scale-105">
//                   Book a Free Consultation
//                   <img
//                     src="/images/home/hero/material-symbols_arrow-insert (1).svg"
//                     alt=""
//                   />
//                 </button>
//               ) : (
//                 <button className="menuText bg-blue-500 items-center text-white px-4 py-2 rounded-md shadow flex gap-1 hover:bg-blue-600 transition font-semibold">
//                   Contact us
//                   <img
//                     src="/images/home/hero/material-symbols_arrow-insert (1).svg"
//                     alt=""
//                   />
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"; // Adjust based on your routing library
import { navLinks } from "../../../constant/data";
import "./Navbar.css";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <div
      className={`${
        isHomePage ? "absolute z-50 bg-transparent" : " bg-[#F5F5F5]"
      } w-full md:py-0 md:h-[130px] flex items-center`}
    >
      <nav className="w-full">
        <div
          className="relative px-[30px]
   md:px-[32px]
   lg:px-[80px] 
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
              src="/images/ABA-Consulting-Logo.webp"
              alt="Logo"
              className="w-[46px] h-[56px]"
            />
          </Link>

          {/* Links Section */}
          <div className="hidden lg:flex space-x-[50px] menuText">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className="relative group menuText"
              >
                <div className="flex items-center gap-[10px] menuText">
                  <a className="text-gray-700 hover:text-blue-600">
                    {link.name}
                  </a>

                  {/* Dropdown Icon and Menu */}
                  {link.subLinks && (
                    <div
                      className="relative"
                      onClick={() => handleDropdownToggle(link.name)}
                    >
                      <FaChevronDown className="ml-1 text-sm hover:text-blue-600 transition-transform hover:rotate-180 cursor-pointer" />
                      {openDropdown === link.name && (
                        <ul className="absolute top-10 left-[-100px] bg-white shadow-lg rounded-md py-2 w-48 z-10">
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.name}>
                              <Link
                                to={subLink.href}
                                className="block px-4 py-2 menuText text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                              >
                                {subLink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </NavLink>
            ))}
          </div>

          {/* Button */}
          <div
            className="hidden lg:flex justify-center items-center bg-blue-500 min-w-[274px] h-[48px]
          hover:bg-blue-600 transition duration-300 ease-in-out hover:scale-105 shadow rounded-md p-2"
          >
            <Link to="/consultation">
              <button className="  bodyText font-semibold   text-white   flex items-center justify-center   ">
                Book a Free Consultation
                <img
                  src="/images/home/hero/material-symbols_arrow-insert (1).svg"
                  alt=""
                />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600 focus:outline-none z-50"
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
          className={`absolute z-40 menuText top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="px-[30px] menuText md:px-[32px] pt-2 pb-5 flex flex-col gap-[10px] py-4 lg:mt-20 mt-28">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className="relative group menuText"
              >
                <div className="flex items-center gap-[10px] menuText">
                  <a className="text-gray-700 menuText hover:text-blue-600">
                    {link.name}
                  </a>

                  {link.subLinks && (
                    <div
                      className="relative menuText"
                      onClick={() => handleDropdownToggle(link.name)}
                    >
                      <FaChevronDown className="ml-1 text-sm hover:text-blue-600 transition-transform hover:rotate-180 cursor-pointer" />
                      {openDropdown === link.name && (
                        <ul className="absolute top-7 left-[-100px] bg-white shadow-lg rounded-md py-2 w-48 z-10">
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.name}>
                              <Link
                                to={subLink.href}
                                className="block px-4 py-2 menuText text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                              >
                                {subLink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
