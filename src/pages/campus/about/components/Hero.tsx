import AbtVid from "../../../../assets/images/abt.mp4"

export const CampusAboutHero = ({ title }: any) => {
  return (
    <div className='w-full pt-[65px] mb-24 cus-sm:mb-36'>
        <div className="relative bg-bottom bg-cover 2xl:h-[550px] h-[400px] cus-xs:h-[350px] w-full">
            <video loop muted autoPlay className="w-full h-full object-cover object-center">
                <source src={AbtVid} type="video/mp4"/>
            </video>

            <div className="-bottom-28 cus-sm:-bottom-36 left-14 absolute cus-sm:left-0 cus-sm:w-full cus-sm:px-10 cus-xs:!px-5">
                <div className='bg-red-600 rounded text-white px-10 py-8 max-w-[600px] cus-sm:text-center cus-sm:flex justify-center items-center flex-col cus-sm:max-w-full'>
                    <h1 className='font-black text-3xl cus-sm:text-2xl cus-xs:!text-xl mb-3'>
                        {title}
                    </h1>

                    <p className="text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose">
                        Lincoln University and College are drawing the best-qualified qualified thinkers, unconventional entrepreneurs, and hyper-resourceful technical experts in all fields of human endeavor.
                    </p>
                </div> 
            </div>
        </div>
    </div>
  )
}

