import { Footer, Navbar, HowToApply, AppLoader } from "../../../components"
import { ProgrammeList, ProgrammesHeroSection } from "../components"
import BachelorBg from "../../../assets/images/distance-l.png"
import DiplomaBg from "../../../assets/images/entreprenuership.jpg"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProgrammesService } from "../../../services";

const UndergraduatePage = () => {
  let { type } = useParams();
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)
  // const [programmes, setProgrammes] = useState<any[]>([])

  useEffect(() => {
    setLoading(true)
    const exec = async () => {
      const programmes = await ProgrammesService.getProgrammes()
      let newP = programmes?.data?.filter((item: any) => 
        item?.program_type?.toLowerCase() == "undergraduate" && item?.certificate_type?.toLowerCase() == type
      )

      setData(newP)
      setLoading(false)
    }

    exec()
  }, [type])

  // useEffect(() => {    
  //   let newP = data?.programmes?.data?.filter((item: any) => 
  //       item?.program_type?.toLowerCase() == "undergraduate" && item?.certificate_type?.toLowerCase() == type
  //     )
  //   setProgrammes(newP)
  // }, [data])
  
  return (
    <>
      {loading ? <AppLoader/> : (
        <div>
            <Navbar 
              selectedKeys={type == "bachelor" ? ["programmes", "undergraduate", "bachelor"] 
              : ["programmes", "undergraduate", "diploma"]} 
            />
            <ProgrammesHeroSection
              subTitle={type == "bachelor" ? "Bachelor Programmes" : "Diploma Programmes"}
              title="Undergraduate"
              bgImg={type == "bachelor" ? BachelorBg : DiplomaBg}
            />
            <ProgrammeList type="undergraduate" programmes={data}/>
            <HowToApply/>
            <Footer/>
        </div>
      )}
    </>
  )
}

export default UndergraduatePage