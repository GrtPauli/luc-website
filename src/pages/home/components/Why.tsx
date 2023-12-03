export const WhyLincoln = ({}: any) => {
  return (
    <div className="bg-gray-50 py-10 px-10 md:px-14 md:py-14 cus-xs:!px-5 cus-xs:!py-5 2xl:flex items-center justify-center">
      <div className="2xl:w-[90%] w-full">
          <div className="inline-block">
              <h1 className="font-extrabold text-2xl cus-sm:text-xl cus-xs:!text-lg mb-2">Why Lincoln</h1>
              <div className="w-[80%] h-0.5 rounded-full bg-red-500"/>
          </div> 
          <p className="text-base cus-xs:!text-sm text-gray-600 font-light mt-3">Get to know why we are the best.</p>

          <div className="w-full grid grid-cols-3 cus-md3:grid-cols-2 cus-sm:!grid-cols-1 mt-5 gap-5">
            <div className="px-5 py-5 cus-sm:!p-5 w-full rounded-lg shadow-md overflow-hidden relative bg-red-600 text-white">
              <h1 className="font-extrabold text-xl cus-sm:!text-base cus-sm:!mb-1 text-center mb-2 capitalize">Accessibility</h1>
              <p className="text-base cus-sm:!text-xs cus-sm:!leading-loose leading-loose text-cente">
              Lincoln University is committed to breaking down barriers to education, making it accessible to everyone without limitations. Our institution believes in the transformative power of education and strives to ensure that anyone with the desire to learn has the opportunity to do so. By prioritizing accessibility, Lincoln University aims to create a diverse and inclusive community where individuals from various backgrounds can come together to learn. 
              </p>
            </div>

            <div className="px-5 py-5 cus-sm:!p-5 w-full rounded-lg shadow-md overflow-hidden relative bg-red-600 text-white">
              <h1 className="font-extrabold text-xl cus-sm:!text-base cus-sm:!mb-1 text-center mb-2">Quality Education</h1>
              <p className="text-base cus-sm:!text-xs cus-sm:!leading-loose leading-loose text-cente">
              At Lincoln University, quality education is not just a goal; it is the foundation of our mission. We understand that the true value of education lies in its ability to empower individuals with the knowledge and skills necessary for success. Our institution is dedicated to providing a rigorous and comprehensive academic experience that goes beyond textbooks, encouraging critical thinking, creativity, and practical application of knowledge.
              </p>
            </div>

            <div className="px-5 py-5 cus-sm:!p-5 w-full rounded-lg shadow-md overflow-hidden relative bg-red-600 text-white">
              <h1 className="font-extrabold text-xl cus-sm:!text-base cus-sm:!mb-1 text-center mb-2"> Impacting Lives and Society</h1>
              <p className="text-base cus-sm:!text-xs cus-sm:!leading-loose leading-loose text-cente">
              Lincoln University's vision extends beyond the academic realm; it is rooted in the belief that education should be a force for positive change in both individual lives and society at large. Our institution is dedicated to producing graduates who not only possess the necessary knowledge and skills but also a sense of social responsibility and a commitment to making a difference.
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}
