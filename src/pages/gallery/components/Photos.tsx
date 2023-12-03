import { Image } from "antd"
import TestImg from "../../../assets/images/distance-l.png"

export const PhotoItems = () => {
  return (
    <div className="py-10 px-10 md:px-14 md:py-14 cus-xs:!px-5 cus-xs:!py-5 2xl:flex items-center justify-center">
      <div className="2xl:w-[90%] w-full">
        <div className="grid grid-cols-4 cus-sm:grid-cols-2 gap-5 w-full">
          <Image src={TestImg} width="100%" height="100%"/>
          <Image src={TestImg} width="100%" height="100%"/>
          <Image src={TestImg} width="100%" height="100%"/>
          <Image src={TestImg} width="100%" height="100%"/>
          <Image src={TestImg} width="100%" height="100%"/>
          <Image src={TestImg} width="100%" height="100%"/>
          <Image src={TestImg} width="100%" height="100%"/>
          <Image src={TestImg} width="100%" height="100%"/>
          <Image src={TestImg} width="100%" height="100%"/>
          <Image src={TestImg} width="100%" height="100%"/>
          <Image src={TestImg} width="100%" height="100%"/>
          <Image src={TestImg} width="100%" height="100%"/>
          <Image src={TestImg} width="100%" height="100%"/>
          <Image src={TestImg} width="100%" height="100%"/>
          <Image src={TestImg} width="100%" height="100%"/>
          <Image src={TestImg} width="100%" height="100%"/>
          <Image src={TestImg} width="100%" height="100%"/>
          <Image src={TestImg} width="100%" height="100%"/>
          <Image src={TestImg} width="100%" height="100%"/>
          <Image src={TestImg} width="100%" height="100%"/>
        </div>
      </div>
    </div>
  )
}