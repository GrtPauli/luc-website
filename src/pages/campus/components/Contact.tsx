import { Image } from "antd"
import BgImg from "../../../assets/images/cc.png"

export const CampusContactSection = () => {
  return (
    <div className="flex w-full h-[500px] relative">
        <Image
            src={BgImg}
            preview={false}
            width="100%"
            height="100%"
            className="object-cover object-center relative cus-sm2:hidden"
        />
        
        <div className="absolute h-full flex flex-col justify-between cus-sm2:bg-black/90 bg-black/80 right-0 w-[40%] cus-md3:w-[50%] cus-sm2:w-full top-0 p-8 cus-sm:p-5 text-white">
            <div className="flex flex-col gap-5">
                <div className="inline-block">
                    <h1 className="font-extrabold text-2xl cus-sm:text-xl cus-xs:!text-lg mb-2">Let's Talk About Your Future</h1>
                    <div className="w-[80%] h-0.5 rounded-full bg-red-600"/>
                    <p className="text-sm leading-relaxed my-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <div className="flex gap-5">
                    <input 
                        placeholder="Full Name" 
                        className="bg-white text-sm rounded-lg h-[45px] w-full px-5 placeholder-slate-700"
                    />
                    <input 
                        placeholder="Email" 
                        className="bg-white text-sm rounded-lg h-[45px] w-full px-5 placeholder-slate-700"
                    />
                </div>
                <input 
                    placeholder="Contact No" 
                    className="bg-white text-sm rounded-lg h-[45px] w-full px-5 placeholder-slate-700"
                />
                <textarea 
                    placeholder="Message"
                    className="bg-white text-sm rounded-lg h-[100px] py-3 w-full px-5 placeholder-slate-700"
                />
            </div>

            <button className="w-full text-white font-extrabold bg-red-600 rounded-md h-[50px]">
                Submit
            </button> 
        </div>
    </div>
  )
}

