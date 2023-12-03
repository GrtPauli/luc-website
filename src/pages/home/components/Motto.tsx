// import MottoImg from "../../../assets/images/motto-pic.png"

// export const Motto = () => {
//   return (
//     <div id='portfolio' className="parallax-m relative" style={{backgroundImage: `url(${MottoImg})`}}>
//         <div className='absolute h-full w-full bg-black/30 flex justify-center items-center'>
//             <h1 className="text-white sm:text-[40px] text-3xl cus-xs:text-2xl cus-xs:leading-loose font-black text-center sm:leading-relaxed">
//                 EDUCATION FOR ALL<br/>IMPACTING LIVES
//             </h1>
//             {/* <div className='bg-white p-5 text-center rounded-lg flex justify-center items-center flex-col'>
//                 <h1 className='alt-font text-skin-primary text-5xl mb-2'>OUR PORTFOLIO</h1>
//                 <p className='font-light mb-5'>Feast your eyes on all of our fantastic and<br/> awesome work</p>

//                 <button className='flex justify-between gap-2 items-center border border-skin-secondary bg-skin-secondary text-white py-3 px-6 rounded-full text-sm'>
//                     View Our Portfolio
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
//                     </svg>
//                 </button>
//             </div> */}
//         </div>
//     </div>
//   )
// }
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slide1 from "../../../assets/images/Doing-Things-Differently_700x514-e1692600896395.png"
import Slide2 from "../../../assets/images/Digitalisation.png"
import Slide3 from "../../../assets/images/Diversification.png"
import Slide4 from "../../../assets/images/Globalisation.png"
import { Image } from "antd";

const responsive = {
    desktop: {
      breakpoint: { max: 2500, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    // tablet: {
    //   breakpoint: { max: 1150, min: 768 },
    //   items: 2,
    //   slidesToSlide: 1 // optional, default to 1.
    // },
    // mobile: {
    //   breakpoint: { max: 768, min: 0 },
    //   items: 1,
    //   slidesToSlide: 1 // optional, default to 1.
    // }
};

export const Motto = () => {
    return (
      <div className="bg-gray-50 py-10 px-10 md:px-14 md:py-14 cus-xs:!px-5 cus-xs:!py-5 2xl:flex items-center justify-center">
            <div className="2xl:w-[90%] w-full">
                <div className="inline-block">
                    <h1 className="font-extrabold text-2xl cus-xs:!text-lg mb-2">Redefining the Education Landscape</h1>
                    <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
                </div> 

                <div className="relative pb-5">
                    <Carousel
                        swipeable={true}
                        draggable={false}
                        ssr={true}
                        renderDotsOutside={true}
                        showDots
                        itemClass="my-5 pr-3 cus-xs:px-0"
                        dotListClass=""
                        className="pb-10"
                        responsive={responsive}
                        autoPlay
                        infinite
                        pauseOnHover={false}
                    >
                        <div className="flex max-h-[250px] shadow-lg rounded-lg bg-white overflow-hidden">
                            <div className="h-[250px] w-[35%] cus-sm:hidden">
                                <Image className="object-cover object-center" src={Slide1} preview={false} width="100%" height="100%"/>
                            </div>

                            <div className="w-[65%] cus-sm:w-full p-10 cus-md3:p-8 cus-sm:!p-5">
                                <h1 className="font-extrabold text-2xl cus-sm:text-xl cus-xs:!text-lg">Redefining the Education Landscape</h1>
                                <p className="text-gray-600 text-sm cus-sm:!text-xs cus-sm:!leading-loose leading-loose mt-2">
                                    Spearheaded by a hybrid group of talents, Lincoln University & Colleges consistently
                                    raises the bar in providing quality and affordable education from K-12 to higher
                                    education, both conventional and remote learning. Its strong local and global
                                    presence is demonstrated through its Higher Education campuses,
                                    Skill-Based Programmes.
                                </p>
                            </div>
                        </div>

                        <div className="flex max-h-[250px] shadow-lg rounded-lg bg-white overflow-hidden">
                            <div className="h-[250px] w-[35%] cus-sm:hidden">
                                <Image className="object-cover object-center" src={Slide2} preview={false} width="100%" height="100%"/>
                            </div>

                            <div className="w-[65%] cus-sm:w-full p-10 cus-md3:p-8 cus-sm:!p-5">
                                <h1 className="font-extrabold text-2xl cus-sm:text-xl cus-xs:!text-lg">Borderless learning</h1>
                                <p className="text-gray-600 text-sm cus-sm:!text-xs cus-sm:!leading-loose leading-loose mt-2">
                                    Lincoln's commitment to innovative education has led to advancements across 
                                    its campuses and regional centres. Its enhanced infrastructure includes 
                                    a wide range of apps and tools as well as new sources of revenue like 
                                    Lincoln LMS, and more, revolutionising the dissemination of knowledge.
                                </p>
                            </div>
                        </div>

                        <div className="flex max-h-[250px] shadow-lg rounded-lg bg-white overflow-hidden">
                            <div className="h-[250px] w-[35%] cus-sm:hidden">
                                <Image className="object-cover object-center" src={Slide3} preview={false} width="100%" height="100%"/>
                            </div>

                            <div className="w-[65%] cus-sm:w-full p-10 cus-md3:p-8 cus-sm:!p-5">
                                <h1 className="font-extrabold text-2xl cus-sm:text-xl cus-xs:!text-lg">Endless possibilities</h1>
                                <p className="text-gray-600 text-sm cus-sm:!text-xs cus-sm:!leading-loose leading-loose mt-2">
                                    Lincoln’s academic programmes are industry-driven with academic know-how. 
                                    Micro-credentials also give students and adult learners a flexible
                                    approach to access higher education and upskilling certifications. 
                                    Multi-entry pathway options are also available regardless of one’s 
                                    prior education experience.
                                </p>
                            </div>
                        </div>

                        <div className="flex max-h-[250px] shadow-lg rounded-lg bg-white overflow-hidden">
                            <div className="h-[250px] w-[35%] cus-sm:hidden">
                                <Image className="object-cover object-center" src={Slide4} preview={false} width="100%" height="100%"/>
                            </div>

                            <div className="w-[65%] cus-sm:w-full p-10 cus-md3:p-8 cus-sm:!p-5">
                                <h1 className="font-extrabold text-2xl cus-sm:text-xl cus-xs:!text-lg">Doing things differently</h1>
                                <p className="text-gray-600 text-sm cus-sm:!text-xs cus-sm:!leading-loose leading-loose mt-2">
                                Lincoln is home to 16,000 students from 85 nations. SEGi also has strong partnerships with renowned universities and institutions from the USA, UK, China, Switzerland, and Finland.
                                </p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
      </div>
    )
}