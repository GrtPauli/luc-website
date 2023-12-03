export const Videos = ({ videos }: any) => {
  return (
    <div className="flex flex-col items-start cus-md3:mt-10">
        <div className="inline">
            <h1 className="font-extrabold text-2xl cus-xs:!text-lg mb-2">Videos</h1>
            <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
            {/* <p className="text-sm text-gray-600 font-light underline mt-3">View all videos</p> */}
        </div>        

        <div className="w-full block sm:grid grid-rows-3 cus-md3:grid-rows-2 cus-md3:grid-cols-2 mt-5 h-full gap-5">
          {videos?.map((item: any, i: any) => (
            <iframe 
              key={i} 
              className="sm:mb-0 mb-5 h-full w-full rounded-lg shadow-md overflow-hidden cus-md3:h-[300px]" 
              src={
                `https://www.youtube.com/embed/${item?.youtube_link?.split('/')[3].split('?')[0]}`
              }
            />
          ))}
        </div>

        <p className="text-sm text-gray-600 font-light underline mt-5 text-right self-end">View all videos</p>
    </div>
  )
}

