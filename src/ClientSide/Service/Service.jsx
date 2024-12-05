import Footer from "../Shared/Footer/Footer";
import Drive from "./Drive/Drive";
import GivingOurBussiness from "./GivingOurBussiness/GivingOurBussiness";
import ServiceBanner from "./ServiceBanner/ServiceBanner";

const Service = () => {
  return (
    <div>
      <ServiceBanner></ServiceBanner>
      <Drive></Drive>
      <GivingOurBussiness></GivingOurBussiness>
      <div className="sectionGap bg-[#1a2633]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Service;
