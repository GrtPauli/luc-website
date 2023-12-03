import { Carousel, ConfigProvider, Image } from "antd";
import { BACKEND_URL } from "../../../constants";

export const CampusHeroSection = ({ slides }: any) => {

  return (
    <div className='w-full pt-[65px]'>
        <div className="py-10 px-10 md:px-14 md:py-10 !pt-8 !pb-0 cus-xs:!px-5 cus-xs:!py-5">
            <div>
                <ConfigProvider
                    theme={{
                        token: {
                            fontFamily: "",
                            colorPrimary: "black"
                        },
                    }}
                >
                    <Carousel fade autoplaySpeed={5000} autoplay swipeToSlide dotPosition="left" pauseOnHover={false} >
                        {slides?.map((item: any, i: any) => (
                            <div key={i} className="relative rounded-lg bg-center bg-cover 2xl:h-[500px] h-[400px] cus-xs:h-[300px] w-full slide-">
                                <Image
                                    preview={false}
                                    height="100%"
                                    width="100%"
                                    src={`${BACKEND_URL}/images/sliders/${item?.image_url}`}
                                    className="object-center object-cover rounded-lg"
                                />
                                {/* <div className='bg-black/30 top-0 text-white rounded-lg absolute w-full h-full flex flex-col justify-center items-center px-5'>
                                    <h1 className='font-extrabold text-3xl md:text-4xl cus-sm2:!text-2xl cus-sm2:!leading-[1.5] md:leading-relaxed mb-3 text-center leading-normal'>
                                        {item?.title}
                                    </h1>
                                    <p className='sm:text-xl text-sm font-light text-center cus-xs:w-[300px]'>
                                        {item?.sub_title}
                                    </p>
                                </div> */}
                            </div>
                        ))}

                        {/*<div className="relative bg-center bg-cover 2xl:h-[550px] h-[400px] cus-xs:h-[400px] w-full slide-2">
                            <div className='bg-black/40 top-0 text-white absolute w-full h-full flex flex-col justify-center items-center'>
                                <h1 className='font-extrabold text-3xl md:text-5xl md:leading-relaxed mb-3 text-center leading-normal'>
                                    WE OFFER DUAL CERTIFICATE<br/> AT LINCOLN
                                </h1>
                                <p className='sm:text-xl text-sm font-light text-center cus-xs:w-[300px]'>We Guarantee Dual Certification To All Our Students</p>
                            </div>
                        </div>

                        <div className="relative bg-center bg-cover 2xl:h-[550px] h-[400px] cus-xs:h-[400px] w-full slide-3">
                            <div className='bg-black/40 top-0 text-white absolute w-full h-full flex flex-col justify-center items-center'>
                                <h1 className='font-extrabold text-3xl md:text-[40px] md:leading-relaxed mb-3 text-center leading-normal'>
                                    LINCOLN UNIVERSITY COLLEGE<br/> ABUJA CAMPUS
                                </h1>
                                <p className='sm:text-xl text-sm font-light text-center cus-xs:w-[300px]'>We Build And Nuture Our Students To Meet Industry Standard</p>
                                <button className="px-20 mt-10 text-white font-extrabold bg-red-600 rounded-md h-[47px]">
                                    Visit Campus
                                </button>
                            </div>
                        </div>

                        <div className="relative bg-center bg-cover 2xl:h-[550px] h-[400px] cus-xs:h-[400px] w-full slide-4">
                            <div className='bg-black/40 top-0 text-white absolute w-full h-full flex flex-col justify-center items-center'>
                                <h1 className='font-extrabold text-3xl md:text-[40px] md:leading-relaxed mb-3 text-center leading-normal'>
                                    LINCOLN UNIVERSITY COLLEGE<br/> NSUK CAMPUS
                                </h1>
                                <p className='sm:text-xl text-sm font-light text-center cus-xs:w-[300px]'>We Build And Nuture Our Students To Meet Industry Standard</p>
                                <button className="px-20 mt-10 text-white font-extrabold bg-red-600 rounded-md h-[47px]">
                                    Visit Campus
                                </button>
                            </div>
                        </div>

                        <div className="relative bg-center bg-cover 2xl:h-[550px] h-[400px] cus-xs:h-[400px] w-full slide-5">
                            <div className='bg-black/40 top-0 text-white absolute w-full h-full flex flex-col justify-center items-center'>
                                <h1 className='font-extrabold text-3xl md:text-[40px] md:leading-relaxed mb-3 text-center leading-normal'>
                                    LINCOLN UNIVERSITY COLLEGE<br/> GOMBE CAMPUS
                                </h1>
                                <p className='sm:text-xl text-sm font-light text-center cus-xs:w-[300px]'>We Build And Nuture Our Students To Meet Industry Standard</p>
                                <button className="px-20 mt-10 text-white font-extrabold bg-red-600 rounded-md h-[47px]">
                                    Visit Campus
                                </button>
                            </div>
                        </div>*/}
                    </Carousel>
                </ConfigProvider>
            </div>
        </div>
    </div>
  )
}