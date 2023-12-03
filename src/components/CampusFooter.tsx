import { Image } from "antd"
import AbjLogo from "../assets/images/abj-logo.jpg"
import NsukLogo from "../assets/images/nsuk-logo.png"
import GombeLogo from "../assets/images/gombe-logo.png"
import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaPhoneAlt, FaWhatsapp} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import { Link, useParams } from 'react-router-dom';
import { Collapse, ConfigProvider } from "antd";
const { Panel } = Collapse;

const panelStyle: React.CSSProperties = {
  backgroundColor: "#373633",
  color: "#fff",
};

export const CampusFooter = () => {
  let { campusName } = useParams();

  const RenderSmallerFooter = () => {
    return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "white",
            fontFamily: "",
          },
        }}
      >
        <div className="footer-exp text-white">
          <Collapse
            rootClassName="!text-white"
            expandIconPosition="right"
            defaultActiveKey={1}
            bordered={false}
            accordion
            style={{
              borderRadius: 20,
            //   marginTop: 30,
            //   marginBottom: -20,
              color: "white",
            }}
          >
            <Panel
              style={{
                ...panelStyle,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
              header={<h1 className="text-white font-extrabold">Quick Links</h1>}
              key="1"
            >
              <div className="flex flex-col gap-3 text-xs text-white">
                <Link to="/about-us">About LUC</Link>
                <Link to="/about-us/vision-and-mission">Our Vision and Mission</Link>
                <Link to="/gallery/photo">Photo Gallery</Link>
                <Link to="/gallery/video">Video Gallery</Link>
                <p>Professional Development</p>
                <p>Undergraduate Programmes</p>
              </div>
            </Panel>

            <Panel
              header={<h1 className="text-white font-extrabold">Quick Links</h1>}
              key="2"
              style={panelStyle}
            >
              <div className="flex flex-col gap-3 text-xs text-white">
                <Link to="/sdg">Sustainable Development Goals</Link>
                <p>Our E-Library</p>
                <p>Journals</p>
                <p>Conferences</p>
                <p>Facilities and Services</p>
                <p>Postgraduate Programmes</p>
              </div>
            </Panel>

            <Panel
              header={<h1 className="text-white font-extrabold">Our Campuses</h1>}
              key="3"
              style={panelStyle}
            >
              <div className="flex flex-col gap-3 text-xs text-white">
                <div>
                  <h1 className="font-bold text-sm mb-2">Universities</h1>
                  <div className="flex flex-col gap-3.5">
                      <Link to="/campus/nsuk">LUC (NSUK Campus)</Link>
                      <Link to="/campus/gombe">LUC (Gombe Campus)</Link>
                  </div>
                </div>

                <div>
                    <h1 className="font-bold text-sm mb-2">College</h1>
                    <Link to="/campus/abuja">Lincoln College Abuja</Link>
                </div>
              </div>
            </Panel>

            <Panel
              header={<h1 className="text-white font-extrabold">Contact Us</h1>}
              key="4"
              style={{
                ...panelStyle,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <div className="flex flex-col gap-3 text-xs text-white">
                <p className="leading-7">Wisma Lincoln, No. 12-18, Jalan SS 6/12, 47301 Petaling Jaya, Selangor Darul Ehsan, Malaysia.</p>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 items-center">
                        <FaPhoneAlt/>
                        +2348038341496
                    </div>

                    <div className="flex gap-2 items-center">
                        <FaPhoneAlt/>
                        +60 13-320 8530
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="text-xl"><FaWhatsapp/></div>
                        +2348038341496
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="text-xl"><AiOutlineMail/></div>
                        <p>info@lincoln.edu.ng</p>
                    </div>
                </div>
              </div>
            </Panel>
          </Collapse>
        </div>
      </ConfigProvider>
    );
  };
      
  return (
    <div className="w-full bg-neutral-900 h-full text-white">
      <div className="md:px-14 px-10 cus-xs:px-8 py-10 2xl:flex items-center justify-center">
          <div className="2xl:w-[90%] w-full">
              <div className="flex justify-between mb-10">
                  <div className="w-[180px] h-[80px] cus-xs:w-[130px] cus-xs:h-[60px]">
                  <Image 
                            src={
                              campusName == "abuja" ? AbjLogo :
                              campusName == "nsuk" ? NsukLogo : GombeLogo
                            } 
                            preview={false} 
                            width="100%" 
                            height="100%"
                          />
                  </div>

                  <div className="text-2xl flex items-center gap-5">
                      <FaFacebook/>
                      <FaInstagram/>
                      <FaLinkedin/>
                      <FaYoutube/>
                  </div>
              </div>

              <div className="lg:flex hidden">
                  <div className="w-[23%]">
                      <div className="inline-block mb-5">
                          <h1 className="font-extrabold text-2xl mb-2">Quick Links</h1>
                          <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
                      </div> 

                      <div className="flex flex-col gap-4">
                          <Link to="/about-us">About LUC</Link>
                          <Link to="/about-us/vision-and-mission">Our Vision and Mission</Link>
                          <Link to="/gallery/photo">Photo Gallery</Link>
                          <Link to="/gallery/video">Video Gallery</Link>
                          <p>Professional Development</p>
                          <p>Undergraduate Programmes</p>
                      </div>
                  </div>

                  <div className="w-[23%]">
                      <div className="inline-block mb-5">
                          <h1 className="font-extrabold text-2xl mb-2">Quick Links</h1>
                          <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
                      </div> 

                      <div className="flex flex-col gap-4">
                          <Link to="/sdg">Sustainable Development Goals</Link>
                          <p>Our E-Library</p>
                          <p>Journals</p>
                          <p>Conferences</p>
                          <p>Facilities and Services</p>
                          <p>Postgraduate Programmes</p>
                      </div>
                  </div>

                  <div className="w-[23%]">
                      <div className="inline-block mb-5">
                          <h1 className="font-extrabold text-2xl mb-2">Our Campuses</h1>
                          <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
                      </div> 

                      <div className="flex flex-col gap-8">
                          <div>
                              <h1 className="font-extrabold text-xl mb-2">Universities</h1>
                              <div className="flex flex-col gap-3.5">
                                  <Link to="/campus/nsuk">LUC (NSUK Campus)</Link>
                                  <Link to="/campus/gombe">LUC (Gombe Campus)</Link>
                              </div>
                          </div>

                          <div>
                              <h1 className="font-extrabold text-xl mb-2">College</h1>
                              <Link to="/campus/abuja">Lincoln College Abuja</Link>
                          </div>
                      </div>
                  </div>

                  <div className="w-[31%]">
                      <div className="inline-block mb-3">
                          <h1 className="font-extrabold text-2xl mb-2">Contact Us</h1>
                          <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
                      </div> 

                      <div className="flex flex-col gap-4">
                      <p className="leading-7">Wisma Lincoln, No. 12-18, Jalan SS 6/12, 47301 Petaling Jaya, Selangor Darul Ehsan, Malaysia.</p>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-2 items-center">
                                    <FaPhoneAlt/>
                                    +2348038341496
                                </div>

                                <div className="flex gap-2 items-center">
                                    <FaPhoneAlt/>
                                    +60 13-320 8530
                                </div>

                                <div className="flex gap-2 items-center">
                                    <div className="text-xl"><FaWhatsapp/></div>
                                    +2348038341496
                                </div>

                              <div className="flex gap-2 items-center">
                                  <div className="text-xl"><AiOutlineMail/></div>
                                  <p>info@lincoln.edu.ng</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="lg:hidden block w-full">
                  <RenderSmallerFooter />
              </div>
          </div>
      </div>

      <div className="w-full text-center py-5 bg-black cus-xs:text-sm px-3">
          <p>Copyright © 2023 Lincoln College and University Nigeria  - All Rights Reserved.</p>
      </div>
    </div>
  )
}