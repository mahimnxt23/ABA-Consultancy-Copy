const Footer = () => {
  return (
    <div className="sectionGap">
      <div>
        <div
          className="bg-[#1B2633] pt-[60px] px-[30px]
   md:pt-[60px] md:px-[32px]
   lg:px-[60px] lg:pt-[80px]
   xl:px-[100px] xl:pt-[80px]
   2xl:px-[150px] 2xl:pt-[80px]"
        >
          <div className="grid grid-cols-4 ">
            {/* image */}
            {/* <div className="grid grid-cols-1  max-w-[380px]">
              <div className="w-[51px] h-16 ">
                <img className="" src="/images/ABA-Consulting-Logo.webp" />
              </div>
              <div className="pt-[14px] text-white/[.8] bodyText  font-normal font-['Inter'] leading-normal">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. There are many variations of passages
                of Lorem.Duis aute irure dolor in reprehenderit in v
              </div>
            </div> */}

            {/* quick link */}
            <div className=" grid grid-cols-1   ">
              <h1 className=" text-[#ff8c00] menuText font-semibold font-['Outfit']">
                Quick Links
              </h1>
              <div className=" grid grid-cols-1  ">
                <p className=" text-white/[.8] bodyText font-normal font-['Inter'] leading-normal">
                  Home
                </p>
                <p className=" text-white/[.8] bodyText font-normal font-['Inter'] leading-normal">
                  About us
                </p>
                <p className=" text-white/[.8] bodyText font-normal font-['Inter'] leading-normal">
                  Service
                </p>
                <p className=" text-white/[.8] bodyText font-normal font-['Inter'] leading-normal">
                  Contact us
                </p>
              </div>
            </div>

            {/* Service */}

            {/* <div className="grid grid-cols-1 justify-start items-start gap-5 ">
              <div className=" text-[#ff8c00] text-lg font-semibold font-['Outfit']">
                Services
              </div>
              <div className="grid grid-cols-1 justify-start items-start gap-4 ">
                <div className=" text-white/[.8] text-base font-normal font-['Inter'] leading-normal">
                  Compliance Assistance
                </div>
                <div className=" text-white/[.8] text-base font-normal font-['Inter'] leading-normal">
                  Staffing Solutions
                </div>
                <div className=" text-white/[.8] text-base font-normal font-['Inter'] leading-normal">
                  Compliance Assistance
                </div>
              </div>
            </div> */}

            {/* contactinfo */}

            <div className="flex-col justify-start items-start gap-5 ">
              <div className=" text-[#FF8C00] menuText font-semibold font-['Outfit']">
                Contact Info
              </div>
              <div>
                <p className="bodyText font-normal font-['Inter'] text-[#FFFFFFCC]/[.8]">
                  612-226-6210
                </p>
                <p className="bodyText  font-normal font-['Inter']  text-[#FFFFFFCC]/[.8]">
                  abaconsulting.org
                </p>
                <p className="bodyText  font-normal font-['Inter'] text-[#FFFFFFCC]/[.8]">
                  info@abaconsulting.org
                </p>
                <p className="bodyText  font-normal font-['Inter'] text-[#FFFFFFCC]/[.8]">
                  9900 13th Ave N, Unit 210G Minneapolis, MN 55441 United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
