import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/about/page"
import { CampusPage } from "./pages/campus/page"
import HomePage from "./pages/home/page"
import UndergraduatePage from "./pages/programmes/undergraduate/page";
import PostgraduatePage from "./pages/programmes/postgraduate/page";
import CoursePage from "./pages/course/page";
import ContactUs from "./pages/contact/page";
import OdlPage from "./pages/programmes/odl/page";
import VisionAndMissionPage from "./pages/about/vision-mission/page";
import SdgPage from "./pages/sdg/page";
import PhotoGalleryPage from "./pages/gallery/photo/page";
import VideoGalleryPage from "./pages/gallery/video/page";
import { AboutUsService, HomeService, GeneralService } from "./services";
import { CampusAboutPage } from "./pages/campus/about/page";
import { CampusProgrammePage } from "./pages/campus/programme/page";

const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: "/",

    // loader: async ({request}) => {
    //   const sliders = await HomeService.getSliders(request.signal)
    //   const recognitions = await GeneralService.getRecognitions(request.signal)
    //   const testimonials = await GeneralService.getTestimonials(request.signal)
    //   const videos = await GeneralService.getVideos(request.signal)
    //   const about = await (await AboutUsService.getAboutUs(request.signal)).json()
    //   const news = await HomeService.getNews(request.signal)
    //   const events = await HomeService.getEvents(request.signal)

    //   return {
    //     sliders,
    //     recognitions,
    //     testimonials,
    //     videos,
    //     about,
    //     news,
    //     events
    //   }
    // },
  },
  { 
    path: "/about-us", 
    element: <AboutPage/> ,
    // loader: async ({request}) => {
    //   return AboutUsService.getAboutUs()
    // }
  },
  { path: "/gallery/photo", element: <PhotoGalleryPage/> },
  { path: "/gallery/video", element: <VideoGalleryPage/> },
  { path: "/sdg", element: <SdgPage/> },
  { 
    path: "/about-us/vision-and-mission", 
    element: <VisionAndMissionPage/>,
    // loader: async ({request}) => {
    //   return AboutUsService.getAboutUs()
    // }
  },
  { 
    path: "/campus/:campusName", 
    element: <CampusPage/>,
    
    loader: async ({}) => {
      const sliders = await HomeService.getSliders()
      const recognitions = await GeneralService.getRecognitions()
      const testimonials = await GeneralService.getTestimonials()

      return {
        sliders,
        recognitions,
        testimonials
      }
    },
  },
  { 
    path: "/campus/:campusName/about-us", 
    element: <CampusAboutPage/>,
    loader: async ({}) => {
      return AboutUsService.getAboutUs()
    }
  },
  {
    path: "/campus/:campusName/programme/:programme", 
    element: <CampusProgrammePage/>,
  },
  { 
    path: "/programmes/postgraduate/:type", 
    element: <PostgraduatePage/>,
    // loader: async ({request}) => {
    //   const programmes = await ProgrammesService.getProgrammes(request.signal)

    //   return {
    //     programmes
    //   }
    // },
  },
  { 
    path: "/programmes/undergraduate/:type", 
    element: <UndergraduatePage/>,
    // loader: async ({request}) => {
    //   const programmes = await ProgrammesService.getProgrammes(request.signal)

    //   return {
    //     programmes
    //   }
    // },
  },
  {
    path: "/programme/:code", 
    element: <CoursePage/>,

    // loader: async ({request, params}: any) => {
    //   const programme = await ProgrammesService.getProgramme(request.signal, params?.code)

    //   return {
    //     programme
    //   }
    // },
  },
  { path: "/programmes/open-distance-learning/:type", element: <OdlPage/> },
  { path: "/programmes/postgraduate/:type/course", element: <CoursePage/> },
  { path: "/contact-us", element: <ContactUs/> },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App