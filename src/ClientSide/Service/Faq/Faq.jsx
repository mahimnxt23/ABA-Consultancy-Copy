import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Initialize with 0 for the first FAQ

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordion1 = [
    {
      question: "Let’s collaborate",
      answer:
        "Duis consectetur feugiat auctor. Morbi nec enim luctus, feugiat arcu id, ultricies ante. Duis vel massa eleifend, porta est non, feugiat metus. Duis consectetur feugiat auctor. Morbi nec enim luctus, feugiat arcu id, ultricies ante. Duis vel massa eleifend, porta est non, feugiat metus. ",
    },
    {
      question: "A satisfied customer",
      answer:
        "Prepare your team for actual evaluations with our dynamic mock audits. These unannounced exercises simulate real audit scenarios, building your staff’s confidence and ensuring readiness.",
    },
    {
      question: "Expertise to build the things",
      answer:
        "Our dedicated team offers 24/7 operational support and educational resources. From addressing daily challenges to ensuring seamless business processes, we’re here to support your success every step of the way.",
    },
    {
      question: "Expertise to build the things",
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
    2xl:px-[150px] 2xl:mt-[80px] w-full h-auto py-[80px]"
      style={{
        backgroundImage: `url("/images/faq.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        {/* First Copy */}
        <div
          id="assistance"
          className="grid grid-cols-1  gap-[50px] justify-center items-center my-5"
        >
          {/* Image */}
          {/* <div className="h-[400px] lg:h-[554px]">
            <img
              // src="https://incomparable-kashata-7a0767.netlify.app/images/serviceBoy.png"
              src="/images/serviceBoy.png"
              className="h-full w-full object-cover rounded-[8px]"
              alt=""
            />
          </div> */}
          {/* Text and Accordion */}
          <div className="rounded-lg">
            <h2 className="text-white text-center font-semibold mb-[20px] headTwo leading-[40px]">
              Frequently Asked Question
            </h2>
            <p className="mx-auto text-center  max-w-[772px] text-[#FFFFFF]/[.80] mb-[20px] font-normal bodyText">
              Unlock the power of digital marketing to attract more customers.
              Our tailored strategies focus on increasing your online presence,
              engaging your target audience, and driving conversions to help
              your business grow.
            </p>
            <div className="space-y-4">
              {accordion1.map((item, index) => (
                <div key={index} className=" rounded-[8px]">
                  <button
                    className={`w-full border border-[#CBD5E1]/[.6] flex justify-between rounded-[8px] items-center p-4  ${
                      activeIndex === index
                        ? "bg-[#FF8C00] text-white border-none rounded-b-none"
                        : "bg-transparent text-[#FFFFFF]/[.80]  "
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-normal bodyText ">
                      {item.question}
                    </span>
                    <svg
                      className={`w-5 h-5 transform ${
                        activeIndex === index
                          ? " rotate-180 "
                          : "text-[#FFFFFF]/[.80]"
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
                    <div className="p-4 text-[#0E0D0D]/[.6 rounded-[8px] rounded-t-none  bg-[#F9F9F9] font-normal">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
