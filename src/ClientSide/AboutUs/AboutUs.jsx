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
      <div className="sectionGap">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AboutUs;
