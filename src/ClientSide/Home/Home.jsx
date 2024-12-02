import Navbar from "../Shared/Navbar/Navbar"

/* eslint-disable react/prop-types */
const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-[url('/images/home/hero/homehero.png')] w-full min-h-[693px] pt-[1px] bg-no-repeat bg-cover">
                <div className="mt-2 sectionGap lg:mt-[150px] text-[#0E0D0D]">
                    <div className="max-w-[1140px] mx-auto">
                        <h1 className="md:headOne  font-outfit font-semibold text-[30px]">
                            Helping You Give Therapy Beyond Belief
                        </h1>
                        <div className="flex justify-between flex-col md:flex-row gap-2">
                            <div>
                                <p className="max-w-[864px] bodyText">
                                    At the core of our identity is a resolute
                                    commitment to enhancing the lives of
                                    individuals with ASD through the power of
                                    ABA. We believe in fostering a world where
                                    every person, regardless of their unique
                                    abilities, has the opportunity to thrive and
                                    reach their fullest potential. Our mission
                                    is not merely a statement but a guiding
                                    principle that propels us forward each day.
                                </p>
                                <button className="text-[#397CCA] hidden md:flex items-center p-3 gap-1 border-[1px] border-[#397CCA] rounded-[8px] mt-[30px] text-[18px] font-semibold">
                                    Get a Quote
                                    <img
                                        src="/images/home/hero/quate.svg"
                                        alt=""
                                    />
                                </button>
                            </div>
                            <div className="flex md:block w-full md:w-auto mt-4 md:mt-10 flex-col justify-center md:justify-normal">
                                <div className="max-w-[233px] mx-auto">
                                    <img
                                        src="/images/home/hero/watchvideo.png"
                                        alt="watchvideo"
                                        className="max-w-[233px] mx-auto"
                                    />
                                    <div
                                        className="rounded-b-[16px] py-[14px] bg-white"
                                        style={{
                                            boxShadow:
                                                "0px 1px 8.9px 0px rgba(0, 0, 0, 0.15);",
                                        }}
                                    >
                                        <button className="text-center w-full max-w-[233px] block smallBodyText">
                                            Watch Intro Video
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="md:hidden flex justify-center">
                                <button className="text-[#397CCA] flex max-w-[175px]  items-center p-3 gap-1 border-[1px] border-[#397CCA] rounded-[8px] mt-[30px] text-[18px] font-semibold">
                                    Get a Quote
                                    <img
                                        src="/images/home/hero/quate.svg"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" max-w-[1440px] mx-auto">
                <div className="sectionGap flex items-center justify-between flex-wrap">
                    <div className="max-w-[486px] mx-auto gap-2">
                        <img
                            src="/images/home/hero/consulting.png"
                            className="w-full"
                        />
                    </div>
                    <div className="max-w-[523px] mx-auto">
                        <div>
                            <SectionIndicator status={"About Us"} />
                            <h2 className="headTwo mt-[15px] font-semibold">
                                ABA Consulting <br /> is renowned for <br /> its
                                expertise
                            </h2>
                            <p className="bodyText mt-[10px]">
                                ABA Consulting is renowned for its expertise in
                                assisting autism centers, ensuring their
                                compliance and successful completion of numerous
                                audits. At the heart of our work is a dedication
                                to improving the lives of individuals with
                                Autism Spectrum Disorder (ASD) through Applied
                                Behavior Analysis (ABA). Our mission is deeply
                                ingrained in our approach, guiding our every
                                action. We envision a world where every person,
                                regardless of their abilities, can thrive and
                                achieve their full potential.
                            </p>
                            <div className="mt-[33px]">
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
            <div className="max-w-[1440px] mx-auto">
                <div className="ourservices sectionGap max-w-[900px]">
                    <SectionIndicator status={"Our Service"} />
                    <h2 className="headTwo font-semibold mt-[15px]">
                        Our Services for You
                    </h2>
                    <p className="text-[#0E0D0DCC] bodyText mt-[10px] font-inter !text-[14px]">
                        Our expert consultancy services are crafted to meet the
                        unique challenges of your business. Whether you&apos; re
                        looking to improve strategy, enhance operations, or
                        boost growth, we’re here to help.
                    </p>
                </div>
            </div>

            <Services />
            {/*  */}
            <div className="max-w-[1440px] mx-auto">
                <div className="whychooseus sectionGap flex-wrap flex items-center justify-between">
                    <div className="max-w-[530px]">
                        <SectionIndicator status={"Choose us"} />
                        <div className="">
                            <h2 className="headTwo font-semibold mt-[15px]">
                                Why Choose Us
                            </h2>
                            <p className="text-[#0E0D0DCC] bodyText mt-[10px] font-inter">
                                With a track record of success and a commitment
                                to excellence, we bring expertise, innovation,
                                and personalized strategies to every project.
                                Our goal is to help you overcome challenges,
                                seize opportunities, and achieve sustainable
                                growth for your business.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <div className="">
                                    <span className="text-[#FF8C00] text-[30px] font-semibold">
                                        10+
                                    </span>
                                    <p
                                        className="bodyText"
                                        style={{
                                            color: "rgba(31, 30, 30, 0.80)",
                                        }}
                                    >
                                        years experience
                                    </p>
                                </div>
                                <div>
                                    <span className="text-[#FF8C00] text-[30px] font-semibold">
                                        500+
                                    </span>
                                    <p>Trusted by clients</p>
                                </div>
                                <div>
                                    <span className="text-[#FF8C00] text-[30px] font-semibold">
                                        Tailored{" "}
                                    </span>
                                    <p>solutions for business </p>
                                </div>
                            </div>
                            <div className="flex">
                                <button className="text-[#397CCA] hidden md:flex items-center p-3 gap-1 border-[1px] border-[#397CCA] rounded-[8px] mt-10 text-[18px] font-semibold">
                                    Learn More
                                    <img
                                        src="/images/home/hero/quate.svg"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="/public/images/home/hero/aunty.jpg" alt="" />
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="max-w-[1440px] mx-auto meet-experts">
                <div className="ourservices sectionGap max-w-[900px]">
                    <SectionIndicator status={"Our Team"} />
                    <h2 className="headTwo font-semibold mt-[15px]">
                        Meet the Experts
                    </h2>
                    <p className="text-[#0E0D0DCC] bodyText mt-[10px] font-inter !text-[14px]">
                        Our team of skilled professionals brings experience,
                        innovation, and dedication to help your business
                        succeed. We work closely with you to deliver tailored
                        solutions and achieve lasting results
                    </p>
                </div>
            </div>
            {/*  */}
            <div className="expert bg-[url('/images/home/hero/expertbg.png')] bg-cover bg-center bg-no-repeat min-h-[740px] mt-[50px]">
                <div className="sectionGap flex flex-wrap gap-[24px] justify-center max-w-[1440px] mx-auto">
                    {experts.map((expert, index) => (
                        <div key={index}>
                            <img alt="experts" src={expert.img} className="" />
                        </div>
                    ))}
                </div>
            </div>
            {/*  */}
            <div className="sectionGap max-w-[1440px] mx-auto flex justify-between flex-wrap items-center ">
                <img
                    src="/images/home/hero/clientSay.jpg"
                    alt=""
                    className="max-w-[453px] w-full mx-auto"
                />
                <div className="max-w-[580px] mx-auto mt-5 lg:mt-0">
                    <SectionIndicator status={"Testimonials"} />
                    <h2 className="headTwo font-semibold mt-[15px]">
                        What Our Clients Saying
                    </h2>
                    <p className="text-[#0E0D0DCC] bodyText mt-[10px] font-inter !text-[14px]">
                        Don’t just take our word for it—hear from the businesses
                        we’ve helped. Our clients trust us to deliver impactful
                        results, and we take pride in building long-lasting
                        partnerships. Here’s what some of them have to say about
                        working with us:
                    </p>
                    <div
                        className="p-5 rounded-[16px] mt-[46px]"
                        style={{ backgroundColor: "rgba(57, 124, 202, 0.80)" }}
                    >
                        <h4 className="menuText font-semibold text-white">
                            John Cena
                        </h4>
                        <p className="font-inter bodyText">
                            ABA Consulting has been incredible for our center!
                            Their expertise in compliance and staffing made our
                            operations smoother, allowing us to focus more on
                            therapy. Highly recommended!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

export const SectionIndicator = ({ status }) => {
    return (
        <div className="flex">
            <div
                className="px-6 py-[6px] min-w-[143px] flex items-center gap-[10px] justify-between rounded-[16px]"
                style={{ backgroundColor: "rgba(255, 161, 0, 0.12)" }}
            >
                <p className="w-[10px] h-[10px] rounded-full bg-[#FF8C00]"></p>
                <p className="menuText font-semibold text-[#FF8C00]">
                    {" "}
                    {status}
                </p>
            </div>
        </div>
    )
}
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
]

export const Services = () => {
    return (
        <div className="bg-[#1B2633] text-white py-8 px-4 min-[440px] mt-[50px]">
            <div className="sectionGap flex-col lg:flex-row !mt-0 mx-auto flex gap-[35px] justify-between">
                {data.map((service, index) => (
                    <div
                        key={index}
                        className="flex  items-center gap-[35px] mx-auto"
                    >
                        <div
                            className={`flex flex-col ${
                                index === data.length - 1
                                    ? "justify-center"
                                    : ""
                            }`}
                        >
                            <div className="text-4xl mb-4">
                                <img src={service.icon} alt="icon" />
                            </div>
                            <h3 className="text-[24px] font-semibold text-nowrap">
                                {service.title}
                            </h3>
                            <ul className="space-y-2 text-[16px] font-inter mt-2">
                                {service.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="text-sm list-none flex items-center gap-[13px]"
                                    >
                                        <span className="w-[9px] h-[9px] bg-[#D9D9D9] rounded-full"></span>
                                        <span className="opacity-[.8]">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-[0.5px] h-[208px] mt-32 bg-white hidden lg:block"></div>
                    </div>
                ))}
                <div className="flex items-center justify-center">
                    <button className="w-[151px] flex flex-col justify-center items-center gap-[10px] h-[151px] rounded-full bg-[#FF8C00] text-[18px] font-semibold">
                        Learn More
                        <img src="/images/home/hero/material-symbols_arrow-insert (2).svg" />
                    </button>
                </div>
            </div>
        </div>
    )
}

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
        img: "/images/home/hero/experts/e8.jpg",
    },
]
