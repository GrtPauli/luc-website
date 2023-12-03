import { Image } from "antd"
import UniImg from "../../../assets/images/uni.png"
import {FaPhoneAlt} from "react-icons/fa"
// import {AiOutlineMail} from "react-icons/ai"
// import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1200 },
//       items: 3,
//       slidesToSlide: 1, // optional, default to 1.
//     //   partialVisibilityGutter: 70,
//     },
//     tablet: {
//       breakpoint: { max: 1200, min: 768 },
//       items: 2,
//       slidesToSlide: 1, // optional, default to 1.
//       partialVisibilityGutter: 50,
//     },
//     mobile: {
//       breakpoint: { max: 768, min: 0 },
//       items: 1,
//       slidesToSlide: 1, // optional, default to 1.
//       partialVisibilityGutter: 30,
//     },
// }

export const ContactItems = () => {
  return (
    <div className="py-10 px-10 md:px-14 md:py-14 cus-xs:!px-5 cus-xs:!py-5 2xl:flex items-center justify-center">
        <div className="2xl:w-[90%] w-full">
            <p className="text-gray-800 text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose">
                In order to develop into complete individuals who will go out into the world and change it,
                Lincoln University and College are drawing the best-qualified qualified thinkers,
                unconventional entrepreneurs, and hyper-resourceful technical experts in all fields
                Lincoln University and College are drawing the best-qualified qualified thinkers,
                unconventional entrepreneurs, and hyper-resourceful technical experts in all fields  
                of human endeavor.
            </p>

            {/* <div className="relative mt-5 pb-14 -translate-x-5">
                <Carousel
                    swipeable={false}
                    draggable={false}
                    ssr={true}
                    renderDotsOutside={true}
                    showDots
                    itemClass="my-5 pl-5"
                    // dotListClass="pt-5"
                    partialVisible={true}
                    responsive={responsive}
                >
                    <Item/>
                    <Item/>
                    <Item/>
                </Carousel>
            </div> */}

            <div className="grid grid-cols-3 cus-md3:grid-cols-2 cus-sm2:grid-cols-1 gap-5 w-full mt-5">
                <Item 
                    title="Lincoln College (Abuja Campus)"
                    address="Lincoln building opposite Munirat plaza, Along Jikwoyi Karshi Road, Azhata FCT Abuja."
                />
                <Item 
                    title="Lincoln University (NSUK Campus)"
                    address="Lincoln University Malaysia admin block, Nassarawa State University, Keffi."
                />
                <Item 
                    title="Lincoln University (Gombe Campus)"
                    address="Lincoln University Malaysia, Kumo Gombe State."
                />
            </div>
        </div>
    </div>
  )
}

const Item = ({ title, address }: any) => {

    return(
        <div className="flex flex-col w-full relative shadow-lg rounded-md overflow-hidden">
            <div className="h-[250px] w-full relative cus-sm:h-[200px]">
                <Image
                    preview={false} 
                    src={UniImg} 
                    width="100%" 
                    height="100%"
                    className="object-fill" 
                />
            </div>

            <div className="py-3 px-5 w-full ">
                <h1 className="font-black text-lg cus-sm:text-base mb-1 text-red-600">{title}</h1>
                <div className="h-full flex flex-col jb">
                    <p className="mb-2 leading-loose text-sm cus-sm:text-xs cus-sm:leading-loose">{address}</p>
                    <div className="flex gap-4">
                        <div className="flex gap-2 items-center cus-sm:text-sm">
                            <FaPhoneAlt/>
                            +2348038341496
                        </div>

                        {/* <div className="flex gap-2 items-center">
                            <div className="text-lg"><AiOutlineMail/></div>
                            <p>info@lincoln.edu.ng</p>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* <div className="py-5 px-5">
                <div>
                    <h1 className="font-black text-xl text-red-600 mb-1">Lincoln College (Abuja Campus)</h1>
                    <p className="leading-loose text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                        Sint beatae odio laborum eligendi praesentium saepe<br/>
                        explicabo enim voluptatibus. Dolor, harum!
                    </p>
                </div>

                <div className="text-sm mt-3">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="flex gap-2 items-center">
                            <FaPhoneAlt/>
                            +2349145678903
                        </div>

                        <div className="flex gap-2 items-center">
                            <div className="text-lg"><AiOutlineMail/></div>
                            <p>info@lincoln.edu.ng</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex gap-2 items-center">
                            <div className="text-lg"><FaWhatsapp/></div>
                            +2349145678903
                        </div>

                        <div className="flex gap-2 items-center">
                            <div className="text-lg"><AiOutlineMail/></div>
                            <p>info@lincoln.edu.ng</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}