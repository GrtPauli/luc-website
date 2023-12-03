import { Image } from "antd"
// import User1 from "../assets/images/users/profile.png"
// import User2 from "../assets/images/users/cover (2).png"
// import User3 from "../assets/images/users/pexels-italo-melo-2379005.jpg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BACKEND_URL } from "../constants";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1150 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1150, min: 768 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};

export const Testimonials = ({ testimonials }: any) => {
  return (
    <div className="bg-gray-50 py-10 px-10 md:px-14 md:py-14 cus-xs:!px-5 cus-xs:!py-5 2xl:flex items-center justify-center">
        <div className="2xl:w-[90%] w-full">
            {/* <div className="flex justify-cente flex-col items-cente w-full"> */}
                <div className="inline-block flex-col">
                    <h1 className="font-extrabold text-2xl cus-xs:!text-lg mb-2">Testimonials</h1>
                    <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
                </div>
            {/* </div>  */}
            <p className="text-base cus-xs:!text-sm text-gray-600 font-light mt-3 text-cente">Experiences from our very own students</p>

            <div className="relative pb-5">
                <Carousel
                    swipeable={true}
                    draggable={false}
                    ssr={true}
                    renderDotsOutside={true}
                    showDots
                    itemClass="my-5 pr-3 cus-xs:px-2"
                    dotListClass=""
                    className="pb-10"
                    responsive={responsive}
                    autoPlay
                    infinite
                    pauseOnHover={false}
                >
                    {testimonials?.map((item: any, i: any) => (
                        <div key={i} className="bg-white rounded-md h-full shadow-xl px-8 cus-sm:px-5 cus-sm:py-3 py-5">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="">
                                    <Image 
                                        src={`${BACKEND_URL}/images/students/${item?.image_url}`} 
                                        width="80px" 
                                        height="80px" 
                                        className="rounded-full object-center object-cover"
                                    />
                                </div>

                                <div>
                                    <h1 className="font-bold text-lg h-full">{item?.fullname}</h1>
                                    {/* <p className="text-sm">Student of LUC</p> */}
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 leading-loose">
                                {item?.message}
                            </p>
                        </div>
                    ))}

                    {/* <div className="rounded-md shadow-xl px-8 py-5">
                        <div className="flex items-center gap-3 mb-2">
                            <Image src={User2} width="100px" height="100px" className="rounded-full object-center object-cover"/>
                            <div>
                                <h1 className="font-bold text-xl mb-2">Grace David</h1>
                                <p className="text-sm">Student of LUC</p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 leading-loose">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Illum hic commodi alias nam reprehenderit, aut dicta qui
                            accusantium blanditiis deleniti.
                        </p>
                    </div>

                    <div className="rounded-md shadow-xl px-8 py-5">
                        <div className="flex items-center gap-3 mb-2">
                            <Image src={User3} width="100px" height="100px" className="rounded-full object-center object-cover"/>
                            <div>
                                <h1 className="font-bold text-xl mb-2">Zack Sam</h1>
                                <p className="text-sm">Student of LUC</p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 leading-loose">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Illum hic commodi alias nam reprehenderit, aut dicta qui
                            accusantium blanditiis deleniti.
                        </p>
                    </div>

                    <div className="rounded-md shadow-xl px-8 py-5">
                        <div className="flex items-center gap-3 mb-2">
                            <Image src={User1} width="100px" height="100px" className="rounded-full object-center object-cover"/>
                            <div>
                                <h1 className="font-bold text-xl mb-2">Zainab Aliyu</h1>
                                <p className="text-sm">Student of LUC</p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 leading-loose">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Illum hic commodi alias nam reprehenderit, aut dicta qui
                            accusantium blanditiis deleniti.
                        </p>
                    </div>

                    <div className="rounded-md shadow-xl px-8 py-5">
                        <div className="flex items-center gap-3 mb-2">
                            <Image src={User2} width="100px" height="100px" className="rounded-full object-center object-cover"/>
                            <div>
                                <h1 className="font-bold text-xl mb-2">Grace David</h1>
                                <p className="text-sm">Student of LUC</p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 leading-loose">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Illum hic commodi alias nam reprehenderit, aut dicta qui
                            accusantium blanditiis deleniti.
                        </p>
                    </div> */}
                </Carousel>
            </div>

            {/* <div className="grid grid-cols-3 gap-10 mt-5">
                <div className="rounded-md shadow-xl px-8 py-5">
                    <div className="flex items-center gap-3 mb-2">
                        <Image src={User1} width="100px" height="100px" className="rounded-full object-center object-cover"/>
                        <div>
                            <h1 className="font-bold text-xl mb-2">Zainab Aliyu</h1>
                            <p className="text-sm">Student of LUC</p>
                        </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Illum hic commodi alias nam reprehenderit, aut dicta qui
                        accusantium blanditiis deleniti.
                    </p>
                </div>

                <div className="rounded-md shadow-xl px-8 py-5">
                    <div className="flex items-center gap-3 mb-2">
                        <Image src={User2} width="100px" height="100px" className="rounded-full object-center object-cover"/>
                        <div>
                            <h1 className="font-bold text-xl mb-2">Grace David</h1>
                            <p className="text-sm">Student of LUC</p>
                        </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Illum hic commodi alias nam reprehenderit, aut dicta qui
                        accusantium blanditiis deleniti.
                    </p>
                </div>

                <div className="rounded-md shadow-xl px-8 py-5">
                    <div className="flex items-center gap-3 mb-2">
                        <Image src={User3} width="100px" height="100px" className="rounded-full object-center object-cover"/>
                        <div>
                            <h1 className="font-bold text-xl mb-2">Zack Sam</h1>
                            <p className="text-sm">Student of LUC</p>
                        </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Illum hic commodi alias nam reprehenderit, aut dicta qui
                        accusantium blanditiis deleniti.
                    </p>
                </div>
            </div> */}
        </div>
    </div>
  )
}