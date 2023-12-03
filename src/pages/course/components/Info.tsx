// import { AiOutlineClockCircle } from "react-icons/ai"
// import { BsCalendarCheck } from "react-icons/bs"
// import { PiGraduationCap } from "react-icons/pi"

export const BriefInfo = ({ programme }: any) => {
  return (
    <div className="py-10 px-10 md:px-14 md:py-14 cus-xs:!px-5 cus-xs:!py-5">
      <p className="text-gray-800 text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose mb-8">
        {programme?.about}
      </p>

      <div className="flex cus-sm:justify-center">
          <button className="bg-red-600 text-white w-[200px] py-3.5 rounded-md text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose">
            Apply Now
          </button>

        {/* <div className="grid cus-md:grid-cols-2 grid-cols-4 gap-5">
          <div className="flex bg-neutral-900 text-white items-center gap-3 py-4 px-5 rounded-md">
            <AiOutlineClockCircle/>
            <p>Duration: 2 Years 6 Months</p>
          </div>

          <div className="flex bg-neutral-900 text-white items-center gap-3 py-4 px-5 rounded-md">
            <BsCalendarCheck/>
            <p>Intakes: March, July, November</p>
          </div>

          <div className="flex bg-neutral-900 text-white items-center gap-3 py-4 px-5 rounded-md">
            <div className="text-lg">
              <PiGraduationCap/>
            </div>
            <p>Campuses: NSUK, Abuja, Gombe</p>
          </div>

          <button className="bg-red-600 text-white w-[200px] text-sm py-3 rounded-md">
            Apply Now
          </button>
        </div> */}
      </div>
    </div>
  )
}