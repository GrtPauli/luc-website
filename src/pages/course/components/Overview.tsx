import { AiOutlineClockCircle } from "react-icons/ai"
import { BsCalendarCheck } from "react-icons/bs"
import { PiGraduationCap } from "react-icons/pi"

export const CourseOverview = ({programme}: any) => {
    return (
      <div className="pb-10 px-10 md:px-14 md:pb-14 cus-xs:!px-5 cus-xs:!pb-5 2xl:flex items-center justify-center">
          <div className="2xl:w-[90%] w-full">
              <div className="inline-block">
                  <h1 className="font-extrabold text-2xl cus-sm:text-xl cus-xs:!text-lg mb-2">Overview</h1>
                  <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
              </div> 
  
              <div className="mt-3">
                  <p className="text-gray-800 text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose">
                  Our Diploma in Computer Science programme has been designed to help the students to acquire knowledge related to computer applications. Our well versed academicians also impart knowledge in other subject areas, related to it. This programme also focuses on the computer programming and computer development skills of the students. Students after completing this programme would possess in-depth knowledge on this subject, which would help them to excel in the professional field. After the completion of this programme students can either pursue higher degree or can start their career at the entry level.                  </p>
              </div>

              <div className="flex flex-col gap-3 mt-3">
                <div className="flex bg-neutral-900 text-white items-center gap-3 py-4 px-5 rounded-md text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose">
                    <AiOutlineClockCircle/>
                    <p>Duration: 2 Years 6 Months</p>
                </div>

                <div className="flex bg-neutral-900 text-white items-center gap-3 py-4 px-5 rounded-md text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose">
                    <BsCalendarCheck/>
                    <p>Intakes: March, July, November</p>
                </div>

                <div className="flex bg-neutral-900 text-white items-center gap-3 py-4 px-5 rounded-md text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose">
                    <div className="text-lg">
                    <PiGraduationCap/>
                    </div>
                    <p>Campuses: {programme?.campus}</p>
                </div>
              </div>
          </div>
      </div>
    )
}