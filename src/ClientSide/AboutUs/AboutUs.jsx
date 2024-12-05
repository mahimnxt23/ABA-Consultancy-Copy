import Footer from "../Shared/Footer/Footer";
import AboutBanner from "./AboutBanner/AboutBanner";
import ChooseUs from "./ChooseUs/ChooseUs";
import CollaborateWithU from "./CollaborateWithU/CollaborateWithU";

const AboutUs = () => {
  return (
    <div className=" overflow-x-hidden">
      <AboutBanner></AboutBanner>
      <ChooseUs></ChooseUs>
      <CollaborateWithU></CollaborateWithU>
      <div className="sectionGap bg-[#1a2633]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AboutUs;
