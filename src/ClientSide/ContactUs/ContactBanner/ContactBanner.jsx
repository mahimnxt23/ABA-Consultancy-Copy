/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { CiPhone } from "react-icons/ci";
import { FiArrowUpRight } from "react-icons/fi";

const ContactBanner = () => {
  // State for modal (if required)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    destination: "",
    coaching: "",
    agree: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Process form data here
    setIsModalOpen(false); // Close modal if needed
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div className="">
      {/* Banner Section */}
      <div className="relative">
        <div
          style={{
            backgroundImage: `url("/images/about-us-Banner-2.png")`,
          }}
          className="bg-no-repeat bg-center bg-cover w-full h-[420px] flex justify-center items-center"
        ></div>

        <div
          className="absolute inset-0 flex flex-col justify-center max-w-[750px] px-[30px]
            md:px-[32px] lg:px-[60px] xl:px-[100px] 2xl:px-[150px]"
        >
          <h1 className="headTwo text-white pb-[12px]">Contact us</h1>

          <p className="bodyText text-white md:max-w-[550px]">
            If you have any questions, feedback, or need assistance, don’t
            hesitate to reach out. Our team is dedicated to providing you with
            the support you need. Fill out the form below or contact us
            directly, and we’ll get back to you as soon as possible
          </p>
        </div>
      </div>

      <div className="relative top-[-50px] pb-[10px] ">
        <div className="px-[30px] md:px-[32px] lg:px-[60px] bg-white pt-[50px] mx-[20px] md:mx-[50px] rounded-[12px] xl:px-[100px] 2xl:px-[150px] pb-[50px] ">
          <div className="grid grid-cols-1 gap-y-[50px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
              {/* Contact Card */}
              <div className=" flex justify-center items-center shadow-[4px_4px_12px_0px_rgba(0,0,0,0.4)] gap-x-[20px] p-[30px] bg-white">
                <div className="bg-[#397CCA] h-[56px] w-[56px] rounded-[4px] flex justify-center items-center">
                  <CiPhone className="text-white" size={32} />
                </div>
                <div>
                  <h1 className="pb-[12px] text-[#0B0B0B] menuText font-outfit font-medium">
                    Phone Number
                  </h1>
                  <p className="pb-[5px] text-[#0B0B0BCC]/[.8] bodyText font-normal">
                    (229) 555-0109
                  </p>
                  <p className="pb-[5px]  text-[#0B0B0BCC]/[.8] bodyText font-normal">
                    (229) 555-0109
                  </p>
                </div>
              </div>

              {/* Additional Contact Cards */}
              <div className="flex justify-center items-center shadow-[4px_4px_12px_0px_rgba(0,0,0,0.4)] gap-x-[20px] p-[30px] bg-white">
                <div className="bg-[#397CCA] h-[56px] w-[56px] rounded-[4px] flex justify-center items-center">
                  <CiPhone className="text-white" size={32} />
                </div>
                <div>
                  <h1 className="pb-[12px] text-[#0B0B0B] menuText font-outfit font-medium">
                    Address
                  </h1>
                  <p className="pb-[5px]  text-[#0B0B0BCC]/[.8] bodyText font-normal">
                    2118 Thornridge Cir.
                  </p>
                  <p className="pb-[5px]  text-[#0B0B0BCC]/[.8] bodyText font-normal">
                    Syracuse, Connecticut
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center shadow-[4px_4px_12px_0px_rgba(0,0,0,0.4)] gap-x-[20px] p-[30px] bg-white">
                <div className="bg-[#397CCA] h-[56px] w-[56px] rounded-[4px] flex justify-center items-center">
                  <CiPhone className="text-white" size={32} />
                </div>
                <div>
                  <h1 className="pb-[12px] text-[#0B0B0B] menuText font-outfit font-medium">
                    Email
                  </h1>
                  <p className="pb-[5px]  text-[#0B0B0BCC]/[.8] bodyText font-normal font-inter">
                    admin@gmail.com
                  </p>
                  <p className="pb-[5px]  text-[#0B0B0BCC]/[.8] bodyText font-normal font-inter">
                    contact@gmail.com
                  </p>
                </div>
              </div>

              {/* Contact Form */}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2  gap-[50px]">
              <div>
                <form onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div className="mb-[24px]">
                    <label
                      htmlFor="name"
                      className="block mb-[10px] menuText  leading-[24px]   text-[#0B0B0B] font-outfit font-medium"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-[20px]  outline-none py-[13px] border border-[#CBD5E1] rounded-lg text-[#0B0B0BCC]/[.8] bodyText font-normal font-inter"
                      placeholder="Enter full name"
                      required
                    />
                  </div>

                  <div className="mb-[24px]">
                    <label
                      htmlFor="name"
                      className="block mb-[10px] menuText  leading-[24px] text-[#0B0B0B]/[.8] font-outfit font-medium"
                    >
                      E-mail *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-[20px]  outline-none py-[13px] border border-[#CBD5E1]rounded-lg text-[#0B0B0BCC]/[.8] bodyText font-normal font-inter"
                      placeholder="Enter e-mail address"
                      required
                    />
                  </div>

                  {/* Destination Dropdown */}
                  <div className="mb-[24px]">
                    <label
                      htmlFor="destination"
                      className="block mb-[10px] menuText leading-[24px]text-[#0B0B0B] font-outfit font-medium"
                    >
                      Subject *
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full pl-[20px]  outline-none py-[13px] border border-[#CBD5E1] rounded-lg text-[#0B0B0BCC]/[.6] bodyText font-normal font-inter"
                      required
                    >
                      <option value="">
                        Select what you want to ask about!
                      </option>
                      <option value="Destination 1">Destination 1</option>
                      <option value="Destination 2">Destination 2</option>
                      <option value="Destination 3">Destination 3</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="mb-[24px]">
                    <label
                      htmlFor="message"
                      className="block mb-[10px] menuText leading-[24px] text-[#0B0B0B] font-outfit font-medium"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-[20px]  outline-none py-[13px] border border-[#CBD5E1] rounded-lg text-[#0B0B0BCC]/[.6] bodyText font-normal font-inter"
                      placeholder="Enter your message"
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-[#397CCA] flex justify-center rounded-[8px] text-white  items-center   py-2 px-4 font-helvetica text-[18px] leading-[23px] font-bold"
                  >
                    Submit <FiArrowUpRight className="ml-2" size={32} />
                  </button>
                </form>
              </div>

              <div className="h-[600px]">
                <img
                  src="/images/map.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
