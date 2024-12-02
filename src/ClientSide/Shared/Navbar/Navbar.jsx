import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom" // Adjust based on your routing library
import { navLinks } from "../../../constant/data"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false) // For mobile menu toggle

    return (
        <nav className="bg-white shadow-md">
            <div className="px-4 flex justify-between items-center py-3 max-w-[1140px] mx-auto ">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img
                        src="images/home/hero/logo.png"
                        alt="Logo"
                        className="w-[46] h-[56px]"
                    />
                </div>

                {/* Links Section */}
                <div className="hidden md:flex space-x-[50px]">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.href}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#397CCA] font-semibold "
                                    : "text-[#0E0D0DCC] opacity-[.8] font-semibold"
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Button */}
                <div className="hidden md:block">
                    <button className="bg-blue-500 text-white px-4 py-2 gap-1 flex items-center rounded-md shadow hover:bg-blue-600 transition">
                        Book a Free Consultation
                        <img
                            src="/images/home/hero/material-symbols_arrow-insert (1).svg"
                            alt=""
                        />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600 focus:outline-none"
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
                            d={
                                isOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="space-y-2 px-4 py-3">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.href}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-[#397CCA] font-semibold"
                                        : "link"
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <button className="w-full bg-blue-500 items-center text-white px-4 py-2 rounded-md shadow flex gap-1 hover:bg-blue-600 transition">
                            Book a Free Consultation
                            <img
                                src="/images/home/hero/material-symbols_arrow-insert (1).svg"
                                alt=""
                            />
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
