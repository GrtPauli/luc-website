import { Image } from "antd"
import Sdg1 from "../../../assets/images/sdg/sdg-1.jpg"
import Sdg2 from "../../../assets/images/sdg/sdg-2.png"
import Sdg3 from "../../../assets/images/sdg/sdg-3.png"
import Sdg4 from "../../../assets/images/sdg/sdg-4.png"
import Sdg5 from "../../../assets/images/sdg/sdg-5.png"
import Sdg6 from "../../../assets/images/sdg/sdg-6.png"
import Sdg7 from "../../../assets/images/sdg/sdg-7.png"
import Sdg8 from "../../../assets/images/sdg/sdg-8.png"
import Sdg9 from "../../../assets/images/sdg/sdg-9.png"
import Sdg10 from "../../../assets/images/sdg/sdg-10.png"
import Sdg11 from "../../../assets/images/sdg/sdg-11.png"
import Sdg12 from "../../../assets/images/sdg/sdg-12.png"
import Sdg13 from "../../../assets/images/sdg/sdg-13.png"
import Sdg14 from "../../../assets/images/sdg/sdg-14.png"

export const SdgItems = () => {
  return (
    <div className="py-10 px-10 md:px-14 md:py-14 cus-xs:!px-5 cus-xs:!py-5 2xl:flex items-center justify-center">
        <div className="2xl:w-[90%] w-full">
          <div className="inline-block">
              <h1 className="font-extrabold text-2xl cus-sm:text-xl cus-xs:!text-lg mb-2">SDGs</h1>
              <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
          </div> 
          <p className="text-gray-800 text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose mt-3">Get to know why we are the best.</p>
          
          <div className="grid grid-cols-7 gap-5 mt-5 cus-sm:grid-cols-4 cus-xs:!grid-cols-3">
              <Image preview={false} src={Sdg1} width="100%" height="100%" className="shadow-lg rounded-md"/>
              <Image preview={false} src={Sdg2} width="100%" height="100%" className="shadow-lg rounded-md"/>
              <Image preview={false} src={Sdg3} width="100%" height="100%" className="shadow-lg rounded-md"/>
              <Image preview={false} src={Sdg4} width="100%" height="100%" className="shadow-lg rounded-md"/>
              <Image preview={false} src={Sdg5} width="100%" height="100%" className="shadow-lg rounded-md"/>
              <Image preview={false} src={Sdg6} width="100%" height="100%" className="shadow-lg rounded-md"/>
              <Image preview={false} src={Sdg7} width="100%" height="100%" className="shadow-lg rounded-md"/>
              <Image preview={false} src={Sdg8} width="100%" height="100%" className="shadow-lg rounded-md"/>
              <Image preview={false} src={Sdg9} width="100%" height="100%" className="shadow-lg rounded-md"/>
              <Image preview={false} src={Sdg10} width="100%" height="100%" className="shadow-lg rounded-md"/>
              <Image preview={false} src={Sdg11} width="100%" height="100%" className="shadow-lg rounded-md"/>
              <Image preview={false} src={Sdg12} width="100%" height="100%" className="shadow-lg rounded-md"/>
              <Image preview={false} src={Sdg13} width="100%" height="100%" className="shadow-lg rounded-md"/>
              <Image preview={false} src={Sdg14} width="100%" height="100%" className="shadow-lg rounded-md"/>
          </div>
        </div>
    </div>
  )
}

