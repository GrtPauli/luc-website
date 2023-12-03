import { Footer, Navbar, HowToApply, AppLoader } from "../../../components"
import { ProgrammeList, ProgrammesHeroSection } from "../components"
import PhdBg from "../../../assets/images/research.jpg"
import MasterBg from "../../../assets/images/grad-cap-diploma-and-stacked-books.jpg"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProgrammesService } from "../../../services";

const PostgraduatePage = () => {
  let { type } = useParams();
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    const exec = async () => {
      const programmes = await ProgrammesService.getProgrammes()
      let newP = programmes?.data?.filter((item: any) => 
        item?.program_type?.toLowerCase() == "postgraduate" && item?.certificate_type?.toLowerCase() == type
      )

      setData(newP)
      setLoading(false)
    }

    exec()
  }, [type])

  // useEffect(() => {
  //   let newP = data?.programmes?.data?.map((item: any) => {
  //     if(item?.program_type?.toLowerCase() == "postgraduate"){
  //       return item
  //     }
  //   })

  //   setProgrammes(newP)
  // }, [data])

  return (
    <>
      {loading ? <AppLoader/> : (
        <div>
            <Navbar 
              selectedKeys={type == "phd" ? ["programmes", "postgraduate", "phd"] 
              : ["programmes", "postgraduate", "master"]} 
            />
            <ProgrammesHeroSection
              subTitle={type == "phd" ? "PhD Programmes" : "Master Programmes"}
              title="Postgraduate"
              bgImg={type == "phd" ? PhdBg : MasterBg}
            />
            <ProgrammeList type="postgraduate" programmes={data}/>
            <HowToApply/>
            <Footer/>
        </div>
      )}
    </>
  )
}

export default PostgraduatePage