import { useState } from "react"
import { ItemCard } from "."
import { Image } from "antd"
import { AppModal } from "../../../components"
import { BACKEND_URL } from "../../../constants"

export const News = ({news}: any) => {
  const [modal, setModal] = useState<{data?: any, open: boolean}>({
    data: null,
    open: false
  })

  return (
    <div className="mb-10">
        <div className="inline-block">
            <h1 className="font-extrabold text-2xl cus-xs:!text-lg mb-2">News & Updates</h1>
            <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
        </div>        

        <div className="block sm:grid grid-cols-2 mt-5 gap-5">
          {news?.map((item: any, i: any) => (
            <ItemCard 
              key={i}
              img={`${BACKEND_URL}/images/news/${item?.post_image_url}`}  
              title={item?.post_title}
              onReadMore={() => setModal({data: item, open: true})}
            />
          ))}
        </div>

        <p className="text-sm text-gray-600 font-light underline mt-5 text-right">View all news & updates</p>
    
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

