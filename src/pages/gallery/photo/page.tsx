import { Navbar, Footer } from "../../../components"
import { GalleryHeroSection, PhotoItems } from "../components"
import BgImg from "../../../assets/images/grad-cap-diploma-and-stacked-books.jpg"

const PhotoGalleryPage = () => {
  return (
    <div>
        <Navbar selectedKeys={['gallery', 'photo-gallery']}/>
        <GalleryHeroSection bgImg={BgImg} title={'Our Photo Gallery'}/>
        <PhotoItems/>
        <Footer/>
    </div>
  )
}

export default PhotoGalleryPage