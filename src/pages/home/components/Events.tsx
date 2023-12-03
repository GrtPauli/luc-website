import { Image } from "antd"
import ItemImg from "../../../assets/images/distance-l.png"
import { BACKEND_URL } from "../../../constants"
import { useState } from "react"
import { AppModal } from "../../../components"


export const Events = ({events}: any) => {
  const [modal, setModal] = useState<{data?: any, open: boolean}>({
    data: null,
    open: false
  })

  return (
    <div className="cus-md3:mt-10">
        <div className="inline-block">
            <h1 className="font-extrabold text-2xl cus-xs:!text-lg mb-2">Events</h1>
            <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
            {/* <p className="text-sm text-gray-600 font-light underline mt-3">View all events</p> */}
        </div>   

        <div className="block sm:grid grid-cols-2 mt-5 gap-5">
            {events?.map((item: any, i: any) => (
              <ItemCard 
                key={i}
                img={`${BACKEND_URL}/images/news/${item?.post_image_url}`}  
                title={item?.post_title}
                onReadMore={() => setModal({data: item, open: true})}
              />
            ))}
        </div>

        <p className="text-sm text-gray-600 font-light underline mt-5 text-right">View all Events</p>
    
        <AppModal
          open={modal.open}
          onDismiss={() => setModal({open: false})}
          width={700}
          destroyOnClose
        >
          <div className="w-[100%] h-[350px]">
            <Image
              preview={false}
              src={`${BACKEND_URL}/images/news/${modal?.data?.post_image_url}`}
              width="100%"
              height="100%"
            />
          </div>

          <div className="mt-5">
            <div className="mb-5 flex border-b pb-2 border-red-600 justify-between items-center">
              <div className="flex gap-2 items-center">
                <h1 className="font-black text-red-600 text-xl leading-none">27</h1>
                <p className="font-light text-sm mt-1 leading-none">OCT</p>
              </div>

              <p className="font-light text-sm mt-1 leading-none">10:00 am - 6:00 pm</p>
            </div>

            {modal?.data?.post_content}
          </div>
        </AppModal>
    </div>
  )
}

const ItemCard = ({ img, title, onReadMore }: any) => {
  return (
    <div className="bg-white sm:mb-0 mb-5 w-full rounded-lg shadow-md overflow-hidden">
        <Image src={img || ItemImg} width="100%" height="250px" className="object-center object-fit"/>
        <div className="px-5 py-3 flex flex-col gap-2">
          <div className="flex border-b pb-2 border-red-600 justify-between items-center">
            <div className="flex gap-2 items-center">
              <h1 className="font-black text-red-600 text-xl leading-none">27</h1>
              <p className="font-light text-sm mt-1 leading-none">OCT</p>
            </div>

            <p className="font-light text-sm mt-1 leading-none">10:00 am - 6:00 pm</p>
          </div>

          <h1 className="font-extrabold text-slate-800 sm:text-sm text-sm">
            {title || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis at itaque distinctio!"}
          </h1>
          
          <div className="flex justify-end">
            {/* <p className="sm:text-sm text-xs text-gray-400">23th Sept, 2023</p> */}
            <button onClick={onReadMore} className="text-red-500 sm:text-sm text-xs">Read More</button>
          </div>
          {/* <div className="flex justify-between">
            <p className="sm:text-sm text-xs text-gray-400">23th Sept, 2023</p>
            <button className="text-red-500 sm:text-sm text-xs">Read More</button>
          </div> */}
        </div>
    </div>
  )
}