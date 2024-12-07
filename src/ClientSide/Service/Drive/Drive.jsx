import { useState } from "react";

const Drive = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Initialize with 0 for the first FAQ

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "A satisfied customer",
      answer:
        "Duis consectetur feugiat auctor. Morbi nec enim luctus, feugiat arcu id, ultricies ante.",
    },
    {
      question: "Expertise to build the things",
      answer: "Duis vel massa eleifend, porta est non, feugiat metus.",
    },
    {
      question: "Expertise to build the things",
      answer: "Duis vel massa eleifend, porta est non, feugiat metus.",
    },
    {
      question: "Expertise to build the things",
      answer: "Duis vel massa eleifend, porta est non, feugiat metus.",
    },
  ];

  return (
    <div
      className="grid grid-cols-1 xl:grid-cols-2 gap-[50px] mt-[30px] px-[30px]
   md:mt-[32px] md:px-[32px]
   lg:px-[80px] lg:mt-[30px]
   xl:px-[100px] xl:mt-[80px]
   2xl:px-[150px] 2xl:mt-[80px]"
    >
      <div className=" h-[400px] lg:h-[554px] ">
        <img
          src="/images/serviceBoy.png"
          className="h-full w-full object-cover rounded-[8px]"
          alt=""
        />
      </div>
      <div className=" rounded-lg ">
        <h2 className="text-[#0E0D0DCC] font-semibold mb-[20px] headTwo leading-[40px]">
          Drive More Customers Through Digital
        </h2>
        <p className="text-[#0E0D0DCC]/[.8] mb-[20px] font-normal bodyText">
          Unlock the power of digital marketing to attract more customers. Our
          tailored strategies focus on increasing your online presence, engaging
          your target audience, and driving conversions to help your business
          grow.
        </p>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-[#CBD5E1] rounded-[6px]">
              <button
                className={`w-full flex justify-between items-center p-4 focus:outline-none focus:ring ${
                  activeIndex === index
                    ? "bg-[#FF8C00] text-white"
                    : "bg-white hover:bg-gray-100 text-[#0E0D0DCC]/[.6]"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-normal bodyText">{item.question}</span>
                <svg
                  className={`w-5 h-5 transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-[#0E0D0DCC]/[.8] bg-white font-normal">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drive;
