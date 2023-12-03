import { SelectInput } from "."
import { Image } from "antd"
import Logo from "../assets/images/diploma.jpg"

export const SearchProgrammes = ({ campus }: any) => {
  return (
    <div className="py-10 px-10 md:px-14 md:py-14 cus-xs:!px-5 cus-xs:!py-5 2xl:flex items-center justify-center">
        <div className="2xl:w-[90%] w-full shadow-lg rounded-lg flex bg-black/90 overflow-hidden"> 
            <div className={`p-10 cus-md2:p-8 cus-xs:!p-5 ${campus ? "w-[50%]" : "w-[60%]"}  cus-md3:w-full 
            text-white flex flex-col justify-between`}>
                <div>
                    <div className="inline-block">
                        <h1 className="font-extrabold text-3xl mb-2 cus-sm:text-2xl cus-xs:!text-lg">Search For Programmes</h1>
                        <div className="w-[80%] h-0.5 rounded-full bg-red-600"/>
                    </div>

                    <div className="my-8 cus-sm2:my-3 flex justify-between items-start cus-sm2:flex-col cus-sm2:gap-5">
                        {!campus && (
                            <div className="w-[40%] cus-md2:w-[50%] cus-sm2:!w-full">
                                <h1 className="font-extrabold text-xl mb-3 cus-xs:!text-base">Our Campuses</h1>
                                <div className="flex gap-10 pl-5">
                                    <ul className="flex flex-col gap-5 cus-sm2:!gap-3 cus-sm2:!text-sm list-disc">
                                        <li>LUC (Abuja Campus)</li>
                                        <li>LUC (NSUK Campus)</li>
                                        <li>LUC (Gombe Campus)</li>
                                    </ul>
                                </div>
                            </div> 
                        )}

                        {campus ? (
                            <div className="w-full cus-sm2:!w-full flex flex-col gap-3">
                                <SelectInput placeHolder="Field of Interest" name="" options={[]}/>
                                <SelectInput placeHolder="Level of Study" name="" options={[]}/>
                            </div>
                        ) : (
                            <div className="w-[60%] cus-md2:w-[50%] cus-sm2:!w-full flex flex-col gap-3">
                                <SelectInput placeHolder="Field of Interest" name="" options={[]}/>
                                <SelectInput placeHolder="Campus" name="" options={[]}/>
                                <SelectInput placeHolder="Level of Study" name="" options={[]}/>
                            </div>
                        )}
                    </div>
                </div>

                <button className="w-full text-white font-extrabold bg-red-600 rounded-md h-[47px]">
                    Search Programmes
                </button>
            </div>

            <div className={`${campus ? "w-[50%]" : "w-[40%]"} h-[430px] cus-md3:hidden`}>
                <Image src={Logo} preview={false} width="100%" height="100%" className="object-cover object-center"/>
            </div>
        </div>
    </div>
  )
}