import { MdArrowOutward } from "react-icons/md";

const GivingOurBussiness = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 sectionGap gap-[50px]  justify-center items-center">
      <div className="">
        <h1 className="pb-[20px]  headTwo text-[#0E0D0D] font-semibold">
          Giving your business some orignal ideas
        </h1>
        <p className="pb-[20px] text-[#0E0D0DCC]/[.8] bodyText font-normal">
          We believe in the power of collaboration and positivity. As optimists,
          we thrive on working together to achieve shared goals, turning
          challenges into opportunities and creating impactful solutions.
        </p>

        <button className="py-[12px] px-[24px] flex justify-end items-center gap-x-[4px] bg-[#397CCA] text-white">
          Get in touch <MdArrowOutward />
        </button>
      </div>

      <div className="lg:h-[370px] h-[300px]">
        <img src="/images/image 21.png" className="h-full w-full" alt="" />
      </div>
    </div>
  );
};

export default GivingOurBussiness;
