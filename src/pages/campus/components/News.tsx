import { Image } from "antd"
import ItemImg from "../../../assets/images/serious-african-american-student-working-research.jpg"

export const CampusNews = () => {
  return (
    <div className="py-10 px-10 md:px-14 md:py-14 cus-xs:!px-5 cus-xs:!py-5 2xl:flex items-center justify-center">
      <div className="2xl:w-[90%] w-full">
        <div className="inline-block">
            <h1 className="font-extrabold text-2xl cus-xs:!text-lg mb-2">News & Updates</h1>
            <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
        </div>        

        <div className="cus-md3:grid-cols-2 cus-xs:!grid-cols-1 grid grid-cols-3 mt-5 gap-5">
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
        </div>

        <p className="text-sm text-gray-600 font-light underline mt-5 text-right">View all news & updates</p>
      </div>
    </div>
  )
}

const ItemCard = () => {
  return (
    <div className="sm:mb-0 mb-5 w-full rounded-lg shadow-md overflow-hidden">
        <Image preview={false} src={ItemImg} width="100%" height="200px" className="object-center object-cover"/>
        <div className="px-5 py-3">
          <h1 className="font-extrabold text-slate-800 sm:text-base text-sm mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis at itaque distinctio!
          </h1>
          
          <div className="flex justify-between">
            <p className="sm:text-sm text-xs text-gray-400">23th Sept, 2023</p>
            <button className="text-red-500 sm:text-sm text-xs">Read More</button>
          </div>
        </div>
    </div>
  )
}