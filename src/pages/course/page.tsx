import { AppLoader, Footer, HowToApply, Navbar } from "../../components"
import { BriefInfo, CourseAim, CourseHeroSection, CourseOpportunities, CourseOverview } from "./components"
import BachelorBg from "../../assets/images/distance-l.png"
import { useParams } from "react-router-dom"
import { ProgrammesService } from "../../services"
import { useEffect, useState } from "react"

const CoursePage = () => {
  const {code} = useParams()
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)

    const exec = async () => {
      const programme = await ProgrammesService.getProgramme(code as any)
      setData({programme})
      setLoading(false)
    }

    exec()
  }, [code])

  return (
    <>
      {loading ? <AppLoader/> : (
        <div>
          <Navbar/>
          {/* <CourseMenu selectedKey="course-overview"/> */}
          <CourseHeroSection
              bgImg={BachelorBg}  
              programme={data?.programme?.data}          
          />
          <BriefInfo programme={data?.programme?.data}/>
          <CourseOverview programme={data?.programme?.data}/>
          <CourseAim/>
          <CourseOpportunities/>
          <HowToApply/>
          <Footer/>
        </div>
      )}
    </>
  )
}

export default CoursePage