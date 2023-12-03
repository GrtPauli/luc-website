import { Footer, Navbar } from "../../components"
import { SdgHeroSection, SdgItems, SdgPreface, SdgVision } from "./components"

const SdgPage = () => {
  return (
    <div>
        <Navbar selectedKeys={["sdg", "sdg-main"]}/>
        <SdgHeroSection/>
        <SdgPreface/>
        <SdgVision/>
        <SdgItems/>
        {/* <Operations/> */}
        <Footer/>
    </div>
  )
}

export default SdgPage