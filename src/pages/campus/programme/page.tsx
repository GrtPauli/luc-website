import { CampusFooter, CampusNavbar, HowToApply } from "../../../components"
import { BriefInfo, ProgrammeAim, ProgrammeHero, ProgrammeOpportunities, ProgrammeOverview } from "./components"
import BachelorBg from "../../../assets/images/distance-l.png"
import { useParams } from "react-router-dom"

export const CampusProgrammePage = () => {
  const {programme} = useParams()

  return (
    <div>
        <CampusNavbar selectedKeys={["programmes", (programme) as any]}/>
        <ProgrammeHero bgImg={BachelorBg} title={
            programme == "software-engineering-mbte" ? "Software Engineering (NBTE)" :
            programme == "banking-operation-mbte" ? "Banking Operation (NBTE)" :
            programme == "mass-communication" ? "Mass Communication" : "Psychology"
           }
        />
        <BriefInfo/>
        <ProgrammeOverview/>
        <ProgrammeAim/>
        <ProgrammeOpportunities/>
        <HowToApply/>
        <CampusFooter/>
    </div>
  )
}