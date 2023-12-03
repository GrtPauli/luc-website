import { Image } from "antd"
import ItemImg from "../../../assets/images/distance-l.png"

export const CampusEvents = () => {
  return (
    <div className="py-10 px-10 md:px-14 md:py-14 cus-xs:!px-5 cus-xs:!py-5 2xl:flex items-center justify-center">
      <div className="2xl:w-[90%] w-full">
        <div className="inline-block">
            <h1 className="font-extrabold text-2xl cus-xs:!text-lg mb-2">Events</h1>
            <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
        </div>

        <div className="cus-md3:grid-cols-2 cus-xs:!grid-cols-1 grid grid-cols-3 mt-5 gap-5">
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
        </div>

        <p className="text-sm text-gray-600 font-light underline mt-5 text-right">View all events</p>
      </div>
    </div>
  )
}

const ItemCard = () => {
  return (
    <div className="sm:mb-0 mb-5 w-full rounded-lg shadow-md overflow-hidden">
        <Image preview={false} src={ItemImg} width="100%" height="200px" className="object-center object-cover"/>
        <div className="px-5 py-3 flex flex-col gap-2">
          <div className="flex border-b pb-2 border-red-600 justify-between items-center">
            <div className="flex gap-2 items-center">
              <h1 className="font-black text-red-600 text-2xl leading-none">27</h1>
              <p className="font-light text-sm mt-1 leading-none">OCT</p>
            </div>

            <p className="font-light text-sm mt-1 leading-none">10:00 am - 6:00 pm</p>
          </div>

          <h1 className="font-extrabold text-slate-800 sm:text-base text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis at itaque distinctio!
          </h1>
          
          {/* <div className="flex justify-between">
            <p className="sm:text-sm text-xs text-gray-400">23th Sept, 2023</p>
            <button className="text-red-500 sm:text-sm text-xs">Read More</button>
          </div> */}
        </div>
    </div>
  )
}