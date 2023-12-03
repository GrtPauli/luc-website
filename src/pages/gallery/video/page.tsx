import { Navbar, Footer } from "../../../components"
import { GalleryHeroSection, VideoItems } from "../components"
import BgImg from "../../../assets/images/laptop-on-desk-from-above.jpg"

const VideoGalleryPage = () => {
  return (
    <div>
        <Navbar selectedKeys={['gallery', 'video-gallery']}/>
        <GalleryHeroSection bgImg={BgImg} title={'Our Video Gallery'}/>
        <VideoItems/>
        <Footer/>
    </div>
  )
}

export default VideoGalleryPage