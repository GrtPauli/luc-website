// import { useLoaderData } from "react-router-dom"
import { useEffect, useState } from "react";
import { AppLoader, Footer, Navbar } from "../../../components"
// import { AboutMenu } from "../components"
import { VisionAndMissionHero, VisionAndMissionInfo } from "./components"
import { AboutUsService } from "../../../services";

const VisionAndMissionPage = () => {
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
          <Navbar selectedKeys={["about-us", "vision-mission"]}/>
          {/* <AboutMenu selectedKey="vision-mission"/> */}
          <VisionAndMissionHero/>
          <VisionAndMissionInfo data={data?.data}/>
          <Footer/>
        </div>
      )}
    </>
  )
}

export default VisionAndMissionPage