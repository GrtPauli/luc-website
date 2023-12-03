import { Footer, Navbar, HowToApply } from "../../../components"
import { ProgrammeList, ProgrammesHeroSection } from "../components"
import BachelorBg from "../../../assets/images/distance-l.png"
import DiplomaBg from "../../../assets/images/entreprenuership.jpg"
import { useParams } from "react-router-dom";

const OdlPage = () => {
  let { type } = useParams();
  
  return (
    <div>
       <Navbar 
          selectedKeys={type == "undergraduate" ? ["programmes", "odl", "odl-undergraduate"] 
          : ["programmes", "odl", "odl-postgraduate"]} 
        />
        <ProgrammesHeroSection
          subTitle={type == "undergraduate" ? "Undergraduate Programmes" : "Postgraduate Programmes"}
          title="Open Distance Learning"
          bgImg={type == "undergraduate" ? BachelorBg : DiplomaBg}
        />
        <ProgrammeList/>
        <HowToApply/>
        <Footer/>
    </div>
  )
}

export default OdlPage