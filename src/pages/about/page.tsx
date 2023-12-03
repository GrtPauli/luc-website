import { useEffect, useState } from "react";
import { AppLoader, Footer, Navbar } from "../../components"
import { AboutHeroSection, AboutInfo } from "./components"
import { AboutUsService } from "../../services";
// import { useLoaderData } from "react-router-dom";

const AboutPage = () => {
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const exec = async () => {
      const about = await (await AboutUsService.getAboutUs()).json()
      setData(about)
      setLoading(false)
    }

    exec()
  }, [])
  
  return (
    <>
      {loading ? <AppLoader/> : (
        <div>
          <Navbar selectedKeys={["about-us", "about-luc"]}/>
          {/* <AboutMenu selectedKey="about-overview"/> */}
          <AboutHeroSection/>
          <AboutInfo about={data?.data?.about_us}/>
          <Footer/>
        </div>
      )}
    </>
  )
}

export default AboutPage