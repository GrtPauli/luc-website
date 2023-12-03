export const AboutInfo = ({ about }: any) => {
  return (
    <div className="py-10 px-10 md:px-14 md:py-14 cus-xs:!px-5 cus-xs:!py-5 2xl:flex items-center justify-center">
        <div className="2xl:w-[90%] w-full">
            {/* <div className='bg-red-600 cus-sm:block hidden rounded text-white px-14 py-8 w-full mb-5'>
                <h1 className='font-black text-lg mb-3 text-center'>
                    Lincoln University College
                </h1>

                <p className="leading-loose text-xs text-center">
                    In order to develop into complete individuals who will go out into the world and change it,
                    Lincoln University and College are drawing the best-qualified qualified thinkers, unconventional entrepreneurs, and hyper-resourceful technical experts in all fields of human endeavor.
                </p>
            </div>  */}

            <div className="inline-block">
                <h1 className="font-extrabold text-2xl cus-sm:text-xl cus-xs:!text-lg mb-2">About LUC</h1>
                <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
            </div> 
            {/* <p className="text-base text-gray-600 font-light mt-3">Get to know why we are the best.</p> */}

            <div className="mt-3">
                <p className="text-gray-800 text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose">
                    {about}
                </p>
            </div>
        </div>
    </div>
  )
}

