import { SelectInput } from "../../../components"
import { Image } from "antd"
import Logo from "../../../assets/images/diploma.jpg"

export const CampusApply = () => {
  return (
    <div className="pt-14 px-14">
        <div className="w-full shadow-lg rounded-lg flex bg-neutral-900 overflow-hidden">
            <div className="px-10 py-10 w-[45%] text-white flex flex-col h-[450px] justify-between">
                <div>
                    <div className="inline-block">
                        <h1 className="font-extrabold text-3xl mb-2">Search For Programmes</h1>
                        <div className="w-[80%] h-0.5 rounded-full bg-red-600"/>
                        <p className="text-sm leading-relaxed my-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis odit fuga, debitis ducimus blanditiis quod.
                        </p>
                    </div>

                    <div className="mb-8 mt-5 flex justify-between">
                        <div className="w-full flex flex-col gap-3">
                            <SelectInput placeHolder="Field of Interest" name="" options={[]}/>
                            <SelectInput placeHolder="Level of Study" name="" options={[]}/>
                        </div>
                    </div>
                </div>

                <button className="w-full text-white font-extrabold bg-red-600 rounded-md h-[50px]">
                    Search Programmes
                </button> 
            </div>

            <div className="w-[55%] h-[450px]">
                <Image src={Logo} preview={false} width="100%" height="100%" className="object-cover object-center"/>
            </div>
        </div>
    </div>
  )
}

