import Footer from "../Shared/Footer/Footer";

/* eslint-disable react/prop-types */
const Home = () => {
  return (
    <div className="bg-white">
      <div>
        <div className="bg-[url('/images/home/hero/homehero.png')] w-full min-h-[693px] pt-[1px] bg-no-repeat bg-cover pb-5">
          <div
            className=" px-[30px]
                    mt-[90px]
   md:mt-[90px] md:px-[32px]
   lg:px-[90px] lg:mt-[80px]
   xl:px-[100px] xl:mt-[100px]
   2xl:px-[150px] 2xl:mt-[100px] pt-[30px] text-[#0E0D0D]"
          >
            <div className=" ">
              <h1 className="headOne mb-[20px] font-outfit text-[#0E0D0D] max-w-[996px] 2xl:max-w-auto font-semibold">
                Helping You Give <br /> Therapy Beyond Belief
              </h1>
              <div className="flex justify-between flex-col md:flex-row gap-2">
                <div>
                  <p className="max-w-[864px] bodyText">
                    At the core of our identity is a resolute commitment to
                    enhancing the lives of individuals with ASD through the
                    power of ABA. We believe in fostering a world where every
                    person, regardless of their unique abilities, has the
                    opportunity to thrive and reach their fullest potential. Our
                    mission is not merely a statement but a guiding principle
                    that propels us forward each day.
                  </p>
                  <button className="text-[#397CCA] hidden md:flex items-center p-3 gap-1 border-[1px] border-[#397CCA] hover:bg-[#397CCA] hover:text-white rounded-[8px] mt-[30px] text-[18px] font-semibold">
                    Get a Quote
                    <img src="/images/home/hero/quate.svg" alt="" />
                  </button>
                </div>
                <div className="flex md:block w-full md:w-auto mt-4 md:mt-10 flex-col justify-center md:justify-normal">
                  <div className="max-w-[233px] lg:mx-auto">
                    <img
                      src="/images/home/hero/watchvideo.png"
                      alt="watchvideo"
                      className="max-w-[233px] mx-auto"
                    />
                    <div
                      className="rounded-b-[16px] py-[14px] bg-white"
                      style={{
                        boxShadow: "0px 1px 8.9px 0px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      <button className="text-center w-full max-w-[233px] block smallBodyText">
                        Watch Intro Video
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:hidden flex lg:justify-center">
                  <button className="text-[#397CCA] flex max-w-[175px]  items-center p-3 gap-1 border-[1px] border-[#397CCA] rounded-[8px] mt-[30px] text-[18px] font-semibold">
                    Get a Quote
                    <img src="/images/home/hero/quate.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" sectionGap ">
          <div className=" flex items-center justify-center lg:justify-between  2xl:gap-[50px] flex-wrap lg:flex-nowrap gap-[50px]  xl:gap-8">
            <div className="max-w-[486px] 2xl:min-w-[700px] gap-2">
              <img src="/images/home/hero/consulting.png" className="w-full" />
            </div>
            <div className="max-w-[523px] 2xl:max-w-[800px]">
              <div>
                <SectionIndicator status={"About Us"} />
                <h2 className=" headTwo mt-[30px] font-semibold">
                  ABA Consulting <br /> is renowned for <br /> its expertise
                </h2>
                <p className="bodyText mt-[20px]">
                  ABA Consulting is renowned for its expertise in assisting
                  autism centers, ensuring their compliance and successful
                  completion of numerous audits. At the heart of our work is a
                  dedication to improving the lives of individuals with Autism
                  Spectrum Disorder (ASD) through Applied Behavior Analysis
                  (ABA). Our mission is deeply ingrained in our approach,
                  guiding our every action. We envision a world where every
                  person, regardless of their abilities, can thrive and achieve
                  their full potential.
                </p>
                <div className="mt-[20px]">
                  <button className="menuText font-semibold p-3 bg-[#397CCA] text-white flex items-center justify-between gap-1 rounded-[8px]">
                    Learn More
                    <img
                      src="/images/home/hero/material-symbols_arrow-insert (1).svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sectionGap">
          <div className="ourservices max-w-[900px]">
            <SectionIndicator status={"Our Service"} />
            <h2 className="text-[30px] md:headTwo font-semibold mt-[30px]">
              Our Services for You
            </h2>
            <p className="text-[#0E0D0DCC] bodyText mt-[20px] font-inter !text-[14px]">
              Our expert consultancy services are crafted to meet the unique
              challenges of your business. Whether you&apos; re looking to
              improve strategy, enhance operations, or boost growth, we’re here
              to help.
            </p>
          </div>
        </div>

        <Services />
        {/*  */}
        <div className="sectionGap">
          <div className="whychooseus flex-wrap justify-center lg:flex-nowrap flex items-center lg:justify-between">
            <div className="max-w-[530px] 2xl:min-w-[700px]">
              <SectionIndicator status={"Choose us"} />
              <div className="">
                <h2 className="headTwo font-semibold mt-[30px]">
                  Why Choose Us
                </h2>
                <p className="text-[#0E0D0DCC] bodyText mt-[20px] font-inter">
                  With a track record of success and a commitment to excellence,
                  we bring expertise, innovation, and personalized strategies to
                  every project. Our goal is to help you overcome challenges,
                  seize opportunities, and achieve sustainable growth for your
                  business.
                </p>
                <div className="grid grid-cols-1 gap-[10px] lg:gap-0 lg:grid-cols-3 items-center justify-between mt-[20px]">
                  <div className="">
                    <span className="text-[#FF8C00] bodyText font-normal ">
                      10+
                    </span>
                    <p
                      className="bodyText font-inter font-normal pt-[10px]"
                      style={{
                        color: "rgba(31, 30, 30, 0.80)",
                      }}
                    >
                      years experience
                    </p>
                  </div>
                  <div>
                    <span className="text-[#FF8C00] bodyText font-normal ">
                      500+
                    </span>
                    <p className="pt-[10px] bodyText font-inter font-normal">
                      Trusted by clients
                    </p>
                  </div>
                  <div>
                    <span className="text-[#FF8C00] bodyText font-normal ">
                      Tailored{" "}
                    </span>
                    <p className="pt-[10px] bodyText font-inter font-normal">
                      solutions for business{" "}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <button className="text-[#397CCA] hidden md:flex items-center p-3 gap-1 border-[1px] border-[#397CCA]  rounded-[8px] mt-10 text-[18px] font-semibold">
                    Learn More
                    <img src="/images/home/hero/quate.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-[50px] lg:mt-0">
              <img
                src="/images/home/hero/aunty.jpg"
                alt=""
                className="2xl:min-w-[800px] 2xl:mr-[80px]"
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="sectionGap meet-experts">
          <div className="ourservices max-w-[900px]">
            <SectionIndicator status={"Our Team"} />
            <h2 className="headTwo font-semibold mt-[30px]">
              Meet the Experts
            </h2>
            <p className="text-[#0E0D0DCC] bodyText mt-[20px] font-inter ">
              Our team of skilled professionals brings experience, innovation,
              and dedication to help your business succeed. We work closely with
              you to deliver tailored solutions and achieve lasting results
            </p>
          </div>
        </div>
        {/*  */}
        <div
          className="  px-[30px]
    md:px-[32px]
   lg:px-[80px] 
   xl:px-[100px] 
   2xl:px-[150px]  mx-auto expert bg-[url('/images/home/hero/expertbg.png')] bg-cover bg-center bg-no-repeat min-h-[740px] mt-[30px] lg:mt-[50px]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
            {experts.map((expert, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg w-full"
              >
                {/* Expert Image */}
                <img
                  alt="experts"
                  src={expert.img}
                  className="group-hover:scale-110 transition-transform duration-500 w-full"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-[#6195d2] }  opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center`}
                >
                  <div className="flex flex-col gap-3 items-center">
                    <img
                      src={expert.img}
                      className="w-[70px] h-[70px] rounded-full"
                    />
                    <div>
                      <p className="text-white text-[18px] text-center font-semibold">
                        Sarah Mim
                      </p>
                      <p className="bodyText mt-1 text-white font-inter text-center">
                        Language Life, Art Skills
                      </p>
                      <div className="flex items-center gap-[14px] mt-[14px] justify-center">
                        <img
                          src="/images/home/hero/socialIcons/mingcute_facebook-fill.svg"
                          alt="facebook"
                          className="cursor-pointer"
                        />
                        <img
                          src="/images/home/hero/socialIcons/ri_instagram-fill.svg"
                          className="cursor-pointer"
                          alt="Instagram"
                        />
                        <img
                          src="/images/home/hero/socialIcons/pajamas_twitter.svg"
                          className="cursor-pointer"
                          alt="twitter"
                        />
                        <img
                          src="/images/home/hero/socialIcons/mdi_linkedin.svg"
                          className="cursor-pointer"
                          alt="linkedin"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*  */}
        <div className="sectionGap mt-10  flex justify-between gap-4 flex-wrap lg:flex-nowrap items-center ">
          <img
            src="/images/home/hero/clientSay.jpg"
            alt=""
            className="max-w-[453px] 2xl:max-w-[40%] w-full"
          />
          <div className="max-w-[580px] 2xl:max-w-[800px] 2xl:mr-20 mt-[30px] ">
            <SectionIndicator status={"Testimonials"} />
            <h2 className="headTwo font-semibold mt-[30px]">
              What Our Clients Saying
            </h2>
            <p className="text-[#0E0D0DCC] bodyText mt-[20px] font-inter ">
              Don’t just take our word for it—hear from the businesses we’ve
              helped. Our clients trust us to deliver impactful results, and we
              take pride in building long-lasting partnerships. Here’s what some
              of them have to say about working with us:
            </p>
            <div
              className="p-5 rounded-[16px] mt-[46px] relative"
              style={{ backgroundColor: "rgba(57, 124, 202, 0.80)" }}
            >
              <h4 className="menuText font-semibold text-white">John Cena</h4>
              <p className="font-inter md:bodyText text-[rgba(255,255,255,0.8)] mt-[10px]">
                ABA Consulting has been incredible for our center! Their
                expertise in compliance and staffing made our operations
                smoother, allowing us to focus more on therapy. Highly
                recommended!
              </p>
              <img
                src="/images/home/hero/koma.png"
                alt=""
                className="absolute top-0 right-[74px] -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sectionGap">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;

export const SectionIndicator = ({ status }) => {
  return (
    <div className="flex">
      <div
        className="px-6 py-[6px] min-w-[143px] flex items-center gap-[10px] justify-between rounded-[16px]"
        style={{ backgroundColor: "rgba(255, 161, 0, 0.12)" }}
      >
        <p className="w-[10px] h-[10px] rounded-full bg-[#FF8C00]"></p>
        <p className="menuText font-semibold text-[#FF8C00]"> {status}</p>
      </div>
    </div>
  );
};
const data = [
  {
    title: "Compliance Assistance",
    icon: "/images/home/hero/headphone.svg", // Replace with a suitable icon or SVG
    items: [
      "Mock Audits",
      "Day to Day Services",
      "Billing Review",
      "Compliance Assistance",
    ],
  },
  {
    title: "Staffing Solutions",
    icon: "/images/home/hero/man.svg", // Replace with a suitable icon or SVG
    items: [
      "Board Certified Behavior Analyst (BCBA)",
      "Qualified Supervising Professional (QSP)",
      "Occupational Therapist (OT) Speech Therapist",
    ],
  },
  {
    title: "Comprehensive Package",
    icon: "/images/home/hero/public.svg", // Replace with a suitable icon or SVG
    items: [
      "Mock Audits",
      "Day to Day Services",
      "Billing Review",
      "Compliance Assistance",
      "Staffing Solutions",
    ],
  },
];

export const Services = () => {
  return (
    <div className="bg-[#1B2633] text-white py-8 px-4 min-[440px] mt-[30px]">
      <div className="sectionGap flex-col gap-5 lg:flex-row !mt-0 mx-auto flex lg:gap-[15px] xl:gap-[35px] justify-between">
        {data.map((service, index) => (
          <div
            key={index}
            className="flex gap-[15px] xl:gap-[35px] lg:items-start mx-auto"
          >
            <div
              className={`flex flex-col mt-[50px] lg:mt-[32px]  ${
                index === data.length - 1 ? "justify-center" : ""
              }`}
            >
              <div className="text-4xl mb-[20px] lg:mb-4">
                <img src={service.icon} alt="icon" />
              </div>
              <h3 className="text-[24px] font-semibold text-nowrap mb-[10px]">
                {service.title}
              </h3>
              <ul className="space-y-2 text-[16px] font-inter mt-2">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm list-none flex items-center gap-[13px]"
                  >
                    <span className="w-[9px] h-[9px] bg-[#D9D9D9] rounded-full"></span>
                    <span className="opacity-[.8]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[0.5px] h-[208px] mt-32 bg-white hidden lg:block"></div>
          </div>
        ))}
        <div className="flex items-center Lg:justify-center mt-[30px] mb-[40px] lg:mb-0 lg:mt-0">
          <button className="w-[151px] flex flex-col justify-center items-center gap-[10px] h-[151px] rounded-full bg-[#FF8C00] text-[18px] font-semibold">
            Learn More
            <img src="/images/home/hero/material-symbols_arrow-insert (2).svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const experts = [
  {
    img: "/images/home/hero/experts/e1.jpg",
  },
  {
    img: "/images/home/hero/experts/e2.jpg",
  },
  {
    img: "/images/home/hero/experts/e3.jpg",
  },
  {
    img: "/images/home/hero/experts/e4.jpg",
  },
  {
    img: "/images/home/hero/experts/e5.jpg",
  },
  {
    img: "/images/home/hero/experts/e6.jpg",
  },
  {
    img: "/images/home/hero/experts/e7.jpg",
  },
  {
    img: "/images/home/hero/experts/e2.jpg",
  },
];
