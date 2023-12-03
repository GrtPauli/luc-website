import { useLoaderData, useParams } from "react-router-dom"
import { CampusFooter, CampusNavbar } from "../../../components"
import { CampusAboutHero, CampusAboutInfo } from "./components"

export const CampusAboutPage = () => {
    const data: any = useLoaderData()
    let { campusName } = useParams();

  return (
    <div>
        <CampusNavbar selectedKey="about"/>
        <CampusAboutHero 
            title={
                campusName == "abuja" ? "Lincoln College Abuja" :
                campusName == "nsuk" ? "LUC (NSUK) Campus" : "LUC (Gombe) Campus"
            }
        />
        <CampusAboutInfo 
            about={data?.data?.about_us}
        />
        <CampusFooter/>
    </div>
  )
}