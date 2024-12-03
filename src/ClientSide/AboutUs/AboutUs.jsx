import AboutBanner from "./AboutBanner/AboutBanner"
import ChooseUs from "./ChooseUs/ChooseUs"
import CollaborateWithU from "./CollaborateWithU/CollaborateWithU"

const AboutUs = () => {
    return (
        <div className="bg-[#F5F5F5] overflow-x-hidden">
            <AboutBanner></AboutBanner>
            <ChooseUs></ChooseUs>
            <CollaborateWithU></CollaborateWithU>
        </div>
    )
}

export default AboutUs
