import { Footer, Navbar } from "../../components"
import { ContactHeroSection, ContactItems } from "./components"

const ContactUs = () => {
  return (
    <div>
        <Navbar selectedKey="contact-us"/>
        <ContactHeroSection/>
        <ContactItems/>
        <Footer/>
    </div>
  )
}

export default ContactUs