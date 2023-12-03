import { Image } from "antd"
import Rec1 from "../assets/images/recgonitions/1.png"
import Rec2 from "../assets/images/recgonitions/2.png"
import Rec3 from "../assets/images/recgonitions/3.png"
import Rec4 from "../assets/images/recgonitions/4.png"
import Rec5 from "../assets/images/recgonitions/9.png"
import Rec6 from "../assets/images/recgonitions/6.png"
import Rec7 from "../assets/images/recgonitions/7.png"
import Rec8 from "../assets/images/recgonitions/8.png"
import Rec9 from "../assets/images/recgonitions/5.png"
import Rec10 from "../assets/images/recgonitions/10.jfif"

// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 768 },
//     items: 7,
//     slidesToSlide: 1 // optional, default to 1.
//   },
//   // tablet: {
//   //   breakpoint: { max: 1200, min: 768 },
//   //   items: 3,
//   //   slidesToSlide: 1 // optional, default to 1.
//   // },
//   // mobile: {
//   //   breakpoint: { max: 768, min: 0 },
//   //   items: 2,
//   //   slidesToSlide: 1 // optional, default to 1.
//   // }
// };

export const Recognitions = ({  }: any) => {
  return (
    <div className=" py-10 px-10 md:px-14 md:py-14 cus-xs:!px-5 cus-xs:!py-5 2xl:flex items-center justify-center">
      <div className="2xl:w-[90%] w-full">
        <div className="inline-block">
            <h1 className="font-extrabold text-2xl cus-xs:!text-lg mb-2">Recognitions & Accreditation</h1>
            <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
        </div> 
        <p className="text-base cus-xs:!text-sm text-gray-600 font-light mt-3">Our recgonitions</p>

        {/* <div className="relative pb-5">
          <Carousel
            swipeable={true}
            draggable={false}
            ssr={true}
            renderDotsOutside={true}
            showDots
            itemClass="my-5 px-3 cus-xs:px-2"
            dotListClass=""
            className="pb-8"
            responsive={responsive}
            autoPlay
            infinite
            pauseOnHover={false}
          >
            <Image preview={false} src={Rec1} width="100%" height="98%" className="shadow-lg rounded-md"/>
            <Image preview={false} src={Rec2} width="100%" height="98%" className="shadow-lg rounded-md"/>
            <Image preview={false} src={Rec3} width="100%" height="98%" className="shadow-lg rounded-md"/>
            <Image preview={false} src={Rec4} width="100%" height="98%" className="shadow-lg rounded-md"/>
            <Image preview={false} src={Rec5} width="100%" height="98%" className="shadow-lg rounded-md"/>
            <Image preview={false} src={Rec6} width="100%" height="98%" className="shadow-lg rounded-md"/>
            <Image preview={false} src={Rec7} width="100%" height="98%" className="shadow-lg rounded-md"/>
            <Image preview={false} src={Rec8} width="100%" height="98%" className="shadow-lg rounded-md"/>
            <div className="w-full h-full shadow-lg rounded-md p-5 bg-white">
              <Image preview={false} src={Rec9} width="100%" height="98%" className="object-cover object-center"/>
            </div>
            <Image preview={false} src={Rec10} width="100%" height="98%" className="shadow-lg rounded-md"/>
          </Carousel>
        </div>  */}

        <div className="grid grid-cols-7 gap-5 mt-5 cus-sm:grid-cols-4 cus-xs:!grid-cols-3">
            <Image preview={false} src={Rec1} width="100%" height="98%" className="shadow-lg rounded-md"/>
            <Image preview={false} src={Rec2} width="100%" height="98%" className="shadow-lg rounded-md"/>
            <Image preview={false} src={Rec3} width="100%" height="98%" className="shadow-lg rounded-md"/>
            <Image preview={false} src={Rec4} width="100%" height="98%" className="shadow-lg rounded-md"/>
            <Image preview={false} src={Rec5} width="100%" height="98%" className="shadow-lg rounded-md"/>
            <Image preview={false} src={Rec6} width="100%" height="98%" className="shadow-lg rounded-md"/>
            <Image preview={false} src={Rec7} width="100%" height="98%" className="shadow-lg rounded-md"/>
            <Image preview={false} src={Rec8} width="100%" height="98%" className="shadow-lg rounded-md"/>
            <div className="w-full h-[96%] p-3 shadow-lg rounded-md bg-white">
              <Image preview={false} src={Rec9} width="100%" height="98%" className="object-cover object-center"/>
            </div>            
            <Image preview={false} src={Rec10} width="100%" height="98%" className="shadow-lg rounded-md"/>
        </div>
      </div>
    </div>
  )
}

