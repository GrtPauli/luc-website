import { Image } from "antd"
import ItemImg from "../../../assets/images/serious-african-american-student-working-research.jpg"

export const ItemCard = ({ img, title, onReadMore }: any) => {
  return (
    <div className="sm:mb-0 mb-5 w-full rounded-lg shadow-md overflow-hidden bg-white">
        <Image src={img || ItemImg} width="100%" height="250px" className="object-center object-fit"/>
        <div className="px-5 py-3">
          <h1 className="font-extrabold text-slate-800 sm:text-base text-sm mb-5">
            {title}          
          </h1>
          
          <div className="flex justify-end">
            {/* <p className="sm:text-sm text-xs text-gray-400">23th Sept, 2023</p> */}
            <button onClick={onReadMore} className="text-red-500 sm:text-sm text-xs">Read More</button>
          </div>
        </div>
    </div>
  )
}

