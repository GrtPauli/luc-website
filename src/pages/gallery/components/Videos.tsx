import AbtVid from "../../../assets/images/abt.mp4"

export const VideoItems = () => {
  return (
    <div className="py-10 px-10 md:px-14 md:py-14 cus-xs:!px-5 cus-xs:!py-5 2xl:flex items-center justify-center">
      <div className="2xl:w-[90%] w-full">
        <div className="grid grid-cols-2 cus-sm:grid-cols-1 gap-5 w-full">
            <video controls className="w-full h-full object-cover object-center">
                <source src={AbtVid} type="video/mp4"/>
            </video>
            <video controls className="w-full h-full object-cover object-center">
                <source src={AbtVid} type="video/mp4"/>
            </video>
            <video controls className="w-full h-full object-cover object-center">
                <source src={AbtVid} type="video/mp4"/>
            </video>
            <video controls className="w-full h-full object-cover object-center">
                <source src={AbtVid} type="video/mp4"/>
            </video>
            <video controls className="w-full h-full object-cover object-center">
                <source src={AbtVid} type="video/mp4"/>
            </video>
            <video controls className="w-full h-full object-cover object-center">
                <source src={AbtVid} type="video/mp4"/>
            </video>
            <video controls className="w-full h-full object-cover object-center">
                <source src={AbtVid} type="video/mp4"/>
            </video>
        </div>
      </div>
    </div>
  )
}