import Drive from "./Drive/Drive";
import GivingOurBussiness from "./GivingOurBussiness/GivingOurBussiness";
import ServiceBanner from "./ServiceBanner/ServiceBanner";

const Service = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <ServiceBanner></ServiceBanner>
      <Drive></Drive>
      <GivingOurBussiness></GivingOurBussiness>
    </div>
  );
};

export default Service;
