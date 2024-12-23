import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Initialize with 0 for the first FAQ

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordion1 = [
    {
      question: "Regulatory Compliance Support",
      answer:
        "We provide expert guidance to help you navigate the complexities of state and federal regulations. Our monthly reviews ensure your center consistently meets compliance standards, reducing risks and fostering a foundation of regulatory excellence.",
    },
    {
      question: "Real-World Audit Preparation",
      answer:
        "Prepare your team for actual evaluations with our dynamic mock audits. These unannounced exercises simulate real audit scenarios, building your staff’s confidence and ensuring readiness.",
    },
    {
      question: "Continuous Operational Assistance",
      answer:
        "Our dedicated team offers 24/7 operational support and educational resources. From addressing daily challenges to ensuring seamless business processes, we’re here to support your success every step of the way.",
    },
    {
      question: "Comprehensive Billing Solutions",
      answer:
        "Our meticulous billing review process examines your billed lines for accuracy and efficiency. Additionally, we offer billing training to enhance your team's skills, ensuring financial precision and integrity",
    },
  ];

  return (
    <div
      className="grid grid-cols-1 gap-[50px] mt-[30px] px-[30px]
    md:mt-[32px] md:px-[32px]
    lg:px-[80px] lg:mt-[30px]
    xl:px-[100px] xl:mt-[80px]
    2xl:px-[150px] 2xl:mt-[80px]"
    >
      {/* First Copy */}
      <div
        id="assistance"
        className="grid grid-cols-1 xl:grid-cols-2 gap-[50px]  items-center my-5"
      >
        {/* Image */}
        <div className="h-[400px] lg:h-[554px]">
          <img
            // src="https://incomparable-kashata-7a0767.netlify.app/images/serviceBoy.png"
            src="/images/serviceBoy.png"
            className="h-full w-full object-cover rounded-[8px]"
            alt=""
          />
        </div>
        {/* Text and Accordion */}
        <div className="rounded-lg">
          <h2 className="text-[#0E0D0DCC] font-semibold mb-[20px] headTwo leading-[40px]">
            Frequently Asked Question
          </h2>
          <p className="text-[#0E0D0DCC]/[.8] mb-[20px] font-normal bodyText">
            ABA Consulting helps ensure your center stays compliant with state
            and federal regulations through expert guidance and monthly reviews,
            minimizing risks and keeping operations smooth and efficient.
          </p>
          <div className="space-y-4">
            {accordion1.map((item, index) => (
              <div
                key={index}
                className="border border-[#CBD5E1] rounded-[6px]"
              >
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
    </div>
  );
};

export default Faq;
