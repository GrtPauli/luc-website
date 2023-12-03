export const VisionAndMissionInfo = ({ data }: any) => {
    return (
      <div className="py-10 px-10 md:px-14 md:py-14 cus-xs:!px-5 cus-xs:!py-5 2xl:flex items-center justify-center">
          <div className="2xl:w-[90%] w-full">
            <p className="text-gray-800 text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose">
                In order to develop into complete individuals who will go out into the world and change it,
                Lincoln University and College are drawing the best-qualified qualified thinkers,
                unconventional entrepreneurs, and hyper-resourceful technical experts in all fields
                Lincoln University and College are drawing the best-qualified qualified thinkers,
                unconventional entrepreneurs, and hyper-resourceful technical experts in all fields  
                of human endeavor.
            </p>

            <div className="grid grid-cols-2 cus-sm:grid-cols-1 gap-5 text-white my-10">
                <div className="w-full p-8 bg-neutral-900 rounded-md flex gap-3">
                    <div>
                        <div className="inline-block">
                            <h1 className="font-extrabold text-2xl mb-2">Vision</h1>
                            <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
                        </div>

                        <p className="text-sm leading-loose mt-3">
                            {data?.vision}
                        </p>
                    </div>
                </div>

                <div className="w-full p-8 bg-neutral-900 rounded-md flex gap-3">
                    <div>
                        <div className="inline-block">
                            <h1 className="font-extrabold text-2xl mb-2">Mission</h1>
                            <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
                        </div>

                        <p className="text-sm leading-loose mt-3">
                            {data?.mission}
                        </p>
                    </div>
                </div>

                {/* <div className="w-full p-8 bg-neutral-900 rounded-md flex gap-3">
                    <div>
                        <div className="inline-block">
                            <h1 className="font-extrabold text-2xl mb-2">Quality Policy</h1>
                            <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
                        </div>

                        <p className="text-sm leading-loose mt-3">
                            {data?.policy}
                        </p>
                    </div>
                </div> */}

                {/* <div className="w-full p-8 bg-neutral-900 rounded-md flex gap-3">
                    <div>
                        <div className="inline-block">
                            <h1 className="font-extrabold text-2xl mb-2">Objectivies</h1>
                            <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
                        </div>

                        <p className="text-sm leading-loose mt-3">
                            {data?.objectives}
                        </p>
                    </div>
                </div> */}
            </div>

            <div>
                <div className="inline-block">
                    <h1 className="font-extrabold text-2xl cus-sm:text-xl cus-xs:!text-lg mb-2">Quality Policy</h1>
                    <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
                </div> 

                <div className="mt-3">
                    <p className="text-gray-800 text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose">
                        {data?.policy}
                    </p>
                </div>
            </div>

            <div className="pt-14">
                <div className="inline-block">
                    <h1 className="font-extrabold text-2xl cus-sm:text-xl cus-xs:!text-lg mb-2">Objectivies</h1>
                    <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
                </div> 

                <div className="mt-3 flex flex-col gap-5">
                    <div>
                        <h1 className="mb-2">Accessible Education:</h1>
                        <ul>
                            <li>• To maintain an inclusive and accessible learning environment that accommodates students from diverse backgrounds and abilities.</li>
                            <li>• To explore and implement innovative approaches to make education more affordable and reachable.</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="mb-2">Practical Skill Development:</h1>
                        <ul>
                            <li>•	To prioritize practical skill development alongside theoretical knowledge, ensuring graduates are well-prepared for the demands of the workforce.</li>
                            <li>•	To collaborate with industry partners to align curriculum with real-world needs and trends.</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="mb-2">Global Perspective:</h1>
                        <ul>
                            <li>•	To enhance the global perspective of education by incorporating international perspectives and experiences into the curriculum.</li>
                            <li>•	To encourage students to engage in global opportunities such as study abroad programs and international collaborations.</li>
                        </ul>
                    </div>

                    
                    <div>
                        <h1 className="mb-2">Student Financial Support:</h1>
                        <ul>
                            <li>•	To establish mechanisms that support students in managing their tuition fees, such as instalment payment options and scholarship opportunities.</li>
                            <li>•	To provide transparent information about financial assistance programs available to students.</li>
                        </ul>
                    </div>

                    
                    <div>
                        <h1 className="mb-2">Community Engagement:</h1>
                        <ul>
                            <li>•	To actively engage with the local community, seeking opportunities for students to apply their knowledge and skills in addressing real-world challenges.</li>
                            <li>•	To promote a sense of social responsibility and community service among students through various initiatives.</li>
                        </ul>
                    </div>

                    
                    <div>
                        <h1 className="mb-2">Innovation and Skill Development:</h1>
                        <ul>
                            <li>•	To integrate innovative teaching methods and technology to enhance the learning experience.</li>
                            <li>•	To focus on skill development, ensuring graduates are well-equipped for success in their chosen fields.</li>
                        </ul>
                    </div>

                    {/* <p className="text-gray-800 text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose">


                        	


                        

                        
                        

                        

                        
                        

                        

                        
                        

                        

                        
                        

                        

                        
                        
                    </p> */}
                </div>
            </div>

            {/* <p className="text-gray-800 text-base cus-sm:text-sm cus-xs:!text-xs !leading-loose cus-xs:!leading-loose">
                In order to develop into complete individuals who will go out into the world and change it,
                Lincoln University and College are drawing the best-qualified qualified thinkers,
                unconventional entrepreneurs, and hyper-resourceful technical experts in all fields
                Lincoln University and College are drawing the best-qualified qualified thinkers,
                unconventional entrepreneurs, and hyper-resourceful technical experts in all fields  
                of human endeavor.
            </p> */}
          </div>
      </div>
    )
  }
  
  