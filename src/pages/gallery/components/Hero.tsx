import { Image } from "antd"

export const GalleryHeroSection = ({ title, bgImg }: any) => {
  return (
    <div className='w-full pt-[65px] mb-24 cus-sm:mb-36'>
        <div className="relative bg-bottom bg-cover 2xl:h-[550px] h-[400px] cus-xs:h-[350px] w-full">
            <Image src={bgImg} preview={false} width="100%" height="100%" className="object-cover object-center"/>


            <div className="-bottom-28 cus-sm:-bottom-36 left-14 absolute cus-sm:left-0 cus-sm:w-full cus-sm:px-10 cus-xs:!px-5">
                <div className='bg-red-600 rounded text-white px-10 py-8 max-w-[600px] cus-sm:text-center cus-sm:flex justify-center items-center flex-col cus-sm:max-w-full'>
                    <h1 className='font-black text-3xl cus-sm:text-2xl cus-xs:!text-xl mb-3'>
                      {title}
                    </h1>

                    <p className="text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose">
                        Have a question? Want to leave feedback or just say hi? Please don’t
                        hesitate to complete the form below if you want to discuss ways
                        we could help you reach your objectives.
                    </p>
                </div> 
            </div>
        </div>
    </div>
  )
}

