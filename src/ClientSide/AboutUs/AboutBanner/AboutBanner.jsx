const AboutBanner = () => {
  return (
    <div className="  ">
      <div className="relative">
        <div
          style={{
            backgroundImage: `url("https://i.ibb.co.com/6m1SZHM/About-Us-Banner.webp")`,
          }}
          className="bg-no-repeat bg-center bg-cover w-full md:h-[420px] 
h-[420px] flex justify-center items-center"
        ></div>

        <div
          className="absolute inset-0 flex flex-col  justify-center max-w-[750px] px-[30px]
    md:px-[32px] lg:px-[60px]  xl:px-[100px]  2xl:px-[150px] 
        "
        >
          <h1 className="headTwo text-white pb-[12px]">About us</h1>

          <p className=" bodyText text-white">
            We are committed to delivering high-quality services and exceptional
            experiences. Our team is focused on innovation and customer
            satisfaction, striving to be your trusted partner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
