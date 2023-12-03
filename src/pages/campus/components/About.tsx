export const ReadAboutUs = () => {
  return (
    <div className="bg-red-600 py-10 px-10 md:px-14 md:py-14 cus-xs:!px-5 cus-xs:!py-8 text-white flex flex-col items-center justify-center">
        <div className="inline-flex items-center flex-col mb-3">
            <h1 className="font-extrabold text-3xl cus-sm:text-xl cus-xs:!text-lg mb-2">Know More About Us</h1>
            <div className="w-[80%] h-0.5 rounded-full bg-white"/>
        </div>

        <p className="text-center text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
            Nobis, in nihil? Harum, accusamus earum? Ullam cumque perferendis<br/> 
            voluptatibus aut mollitia.
        </p>

        <button className="w-[400px] cus-sm:w-[200px] text-base cus-sm:text-sm cus-xs:!text-xs text-red-600 font-extrabold bg-white rounded-md h-[50px] cus-sm:h-[40px]">
            Visit About Us
        </button> 
    </div>
  )
}

