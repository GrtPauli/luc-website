import { useLoaderData } from "react-router-dom"
import { CampusFooter, CampusNavbar, Recognitions, Testimonials, SearchProgrammes } from "../../components"
import { CampusContactSection, CampusEvents, CampusNews, ReadAboutUs, CampusHeroSection } from "./components"

export const CampusPage = () => {
  const data: any = useLoaderData()
  // console.log(data)

  return (
    <div>
        <CampusNavbar/>
        <CampusHeroSection slides={data?.sliders?.data}/>
        <CampusNews/>
        <SearchProgrammes campus="campus"/>
        <ReadAboutUs/>
        <CampusEvents/>
        <CampusContactSection/>
        <Recognitions recognitions={data?.recognitions?.data}/>
        <Testimonials testimonials={data?.testimonials?.data}/>
        <CampusFooter/>
    </div>
  )
}