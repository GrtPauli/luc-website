import { Image } from "antd"
import { BsArrowRight } from "react-icons/bs"

interface Props {
    bgImg: string
    programme: any
}

export const CourseHeroSection = ({ bgImg, programme }: Props) => {
  return (
    <div className='w-full pt-[65px] mb-10 cus-sm:mb-14'>
        <div className="relative bg-bottom bg-cover 2xl:h-[550px] h-[400px] cus-xs:h-[350px] w-full">
            <Image src={bgImg} preview={false} width="100%" height="100%" className="object-cover object-center"/>
            
            <div className="-bottom-16 left-14 absolute cus-sm:left-0 cus-sm:w-full cus-sm:px-10 cus-xs:!px-5">
                <div className='bg-red-600 rounded text-white px-10 cus-xs:!px-5 py-5 min-w-[600px] cus-sm:flex  justify-center items-center flex-col cus-sm:min-w-full'>
                    <div className="inline-block mb-3 cus-sm:flex cus-sm:text-center justify-center items-center flex-col">
                        <h1 className='font-black text-3xl cus-sm:text-2xl cus-xs:!text-xl mb-2'>{programme?.course}</h1>
                        <div className="w-[80%] h-0.5 rounded-full bg-white"/>
                    </div>
                    <div className="flex items-center gap-2">
                        <h1 className='text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose'>{programme?.program_type}</h1>
                        <BsArrowRight/>
                        <h1 className='text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose'>{programme?.certificate_type}</h1>
                    </div> 
                </div> 
            </div>
        </div>
    </div>
  )
}