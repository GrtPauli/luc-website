// import { useLoaderData } from "react-router-dom";
import { Footer, Navbar, Recognitions, Testimonials, SearchProgrammes, AppLoader } from "../../components"
import { Events, HeroSection, Motto, News, Videos, WhyLincoln } from "./components"
import { useEffect, useState } from "react";
import { HomeService, GeneralService, AboutUsService } from "../../services";

const HomePage = () => {
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const exec = async () => {
      const sliders = await HomeService.getSliders()
      const recognitions = await GeneralService.getRecognitions()
      const testimonials = await GeneralService.getTestimonials()
      const videos = await GeneralService.getVideos()
      const about = await (await AboutUsService.getAboutUs()).json()
      const news = await HomeService.getNews()
      const events = await HomeService.getEvents()

      setData({
        sliders,
        recognitions,
        testimonials,
        videos,
        about,
        news,
        events
      })

      setLoading(false)
    }

    exec()
  }, [])

  return (
    <>
      {loading ? <AppLoader/> : (
        <div>
          <Navbar selectedKey="home" />
          <HeroSection slides={data?.sliders?.data}/>
          <div className="pb-10 px-10 md:px-14 md:pb-14 cus-xs:!px-5 cus-xs:!pb-5 2xl:flex items-center justify-center">
            <div className="grid grid-cols-3 cus-md3:block gap-8 2xl:w-[90%] w-full">
              <div className="col-span-2">
                <News news={data?.news?.data}/>
                <Events events={data?.events?.data}/>
              </div>

              <Videos videos={data?.videos?.data}/>
            </div>
          </div>
          <WhyLincoln about={data?.about?.data}/>
          <SearchProgrammes/>
          <Motto/>
          <Recognitions recognitions={data?.recognitions?.data}/>
          <Testimonials testimonials={data?.testimonials?.data}/>
          <Footer/>
        </div>
      )}
    </>
  )
}

export default HomePage