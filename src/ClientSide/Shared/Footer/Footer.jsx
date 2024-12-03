// const Footer = () => {
//   return (
//     <div className="sectionGap">
//       <div>
//         <div
//           className="bg-[#1B2633] pt-[60px] px-[30px]
//    md:pt-[60px] md:px-[32px]
//    lg:px-[60px] lg:pt-[80px]
//    xl:px-[100px] xl:pt-[80px]
//    2xl:px-[150px] 2xl:pt-[80px]"
//         >
//           <div className="grid grid-cols-4 ">
//             {/* image */}
//             {/* <div className="grid grid-cols-1  max-w-[380px]">
//               <div className="w-[51px] h-16 ">
//                 <img className="" src="/images/ABA-Consulting-Logo.webp" />
//               </div>
//               <div className="pt-[14px] text-white/[.8] bodyText  font-normal font-['Inter'] leading-normal">
//                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
//                 commodo ligula eget dolor. There are many variations of passages
//                 of Lorem.Duis aute irure dolor in reprehenderit in v
//               </div>
//             </div> */}

//             {/* quick link */}
//             <div className=" grid grid-cols-1   ">
//               <h1 className=" text-[#ff8c00] menuText font-semibold font-['Outfit']">
//                 Quick Links
//               </h1>
//               <div className=" grid grid-cols-1  ">
//                 <p className=" text-white/[.8] bodyText font-normal font-['Inter'] leading-normal">
//                   Home
//                 </p>
//                 <p className=" text-white/[.8] bodyText font-normal font-['Inter'] leading-normal">
//                   About us
//                 </p>
//                 <p className=" text-white/[.8] bodyText font-normal font-['Inter'] leading-normal">
//                   Service
//                 </p>
//                 <p className=" text-white/[.8] bodyText font-normal font-['Inter'] leading-normal">
//                   Contact us
//                 </p>
//               </div>
//             </div>

//             {/* Service */}

//             {/* <div className="grid grid-cols-1 justify-start items-start gap-5 ">
//               <div className=" text-[#ff8c00] text-lg font-semibold font-['Outfit']">
//                 Services
//               </div>
//               <div className="grid grid-cols-1 justify-start items-start gap-4 ">
//                 <div className=" text-white/[.8] text-base font-normal font-['Inter'] leading-normal">
//                   Compliance Assistance
//                 </div>
//                 <div className=" text-white/[.8] text-base font-normal font-['Inter'] leading-normal">
//                   Staffing Solutions
//                 </div>
//                 <div className=" text-white/[.8] text-base font-normal font-['Inter'] leading-normal">
//                   Compliance Assistance
//                 </div>
//               </div>
//             </div> */}

//             {/* contactinfo */}

//             <div className="flex-col justify-start items-start gap-5 ">
//               <div className=" text-[#FF8C00] menuText font-semibold font-['Outfit']">
//                 Contact Info
//               </div>
//               <div>
//                 <p className="bodyText font-normal font-['Inter'] text-[#FFFFFFCC]/[.8]">
//                   612-226-6210
//                 </p>
//                 <p className="bodyText  font-normal font-['Inter']  text-[#FFFFFFCC]/[.8]">
//                   abaconsulting.org
//                 </p>
//                 <p className="bodyText  font-normal font-['Inter'] text-[#FFFFFFCC]/[.8]">
//                   info@abaconsulting.org
//                 </p>
//                 <p className="bodyText  font-normal font-['Inter'] text-[#FFFFFFCC]/[.8]">
//                   9900 13th Ave N, Unit 210G Minneapolis, MN 55441 United States
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { CiGlobe, CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { ImPhone } from "react-icons/im";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1a2633] body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <div className="flex h-[56px] w-[50px] title-font font-medium items-center md:justify-start justify-center text-gray-900 pb-2">
              <img src="/images/ABA-Consulting-Logo.webp" className="" alt="" />
            </div>
            <p className="mt-2 text-[#FFFFFFCC]/[.8] font-normal">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#FF8C00] menuText tracking-widest text-sm mb-3">
                Quick Links
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#FFFFFFCC]/[.8] font-normal">Home</a>
                </li>
                <li>
                  <a className="text-[#FFFFFFCC]/[.8] font-normal">About us</a>
                </li>
                <li>
                  <a className="text-[#FFFFFFCC]/[.8] font-normal">Service</a>
                </li>
                <li>
                  <a className="text-[#FFFFFFCC]/[.8] font-normal">
                    Contact us
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#FF8C00] menuText tracking-widest text-sm mb-3">
                Services
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#FFFFFFCC]/[.8] font-normal">
                    Compliance Assistance
                  </a>
                </li>
                <li>
                  <a className="text-[#FFFFFFCC]/[.8] font-normal">
                    Staffing Solutions
                  </a>
                </li>
                <li>
                  <p className="text-[#FFFFFFCC]/[.8] font-normal">
                    Compliance Assistance
                  </p>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#FF8C00] menuText tracking-widest text-sm mb-3">
                Contact Info
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#FFFFFFCC]/[.8] font-normal gap-x-[4px] flex justify-start items-center">
                    <ImPhone className="text-[#FF8C00]" />{" "}
                    <span className="text-[#FFFFFFCC]/[.8]">01879011892</span>
                  </a>
                </li>
                <li>
                  <a className="text-[#FFFFFFCC]/[.8] font-normal  gap-x-[4px] flex justify-start items-center">
                    <CiGlobe className="text-[#FF8C00]" />{" "}
                    <span className="text-[#FFFFFFCC]/[.8]">
                      abaconsulting.org
                    </span>
                  </a>
                </li>
                <li>
                  <a className="text-[#FFFFFFCC]/[.8] font-normal  gap-x-[4px] flex justify-start items-center ">
                    <HiOutlineMail className="text-[#FF8C00]" />{" "}
                    <span className=" "> info@abaconsulting.org</span>
                  </a>
                </li>

                <li>
                  <a className="text-[#FFFFFFCC]/[.8] font-normal   gap-x-[4px] flex justify-start items-center ">
                    <CiLocationOn className="text-[#FF8C00]" />{" "}
                    <span className="text-[#FFFFFFCC]/[.8]">
                      9900 13th Ave N, Unit 210G
                    </span>
                  </a>
                </li>
                <li className="text-[#FFFFFFCC]/[.8] ml-4">
                  Minneapolis, MN 55441 United States
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div className="py-10 flex-col justify-start items-center gap-10 flex">
          <div className="self-stretch h-[0px] border border-white/40"></div>
          <div className="self-stretch text-center text-white/80 text-base font-normal font-['Inter'] leading-normal">
            Ⓒ 2024 – ABA CONSULTING. All Rights Are Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
