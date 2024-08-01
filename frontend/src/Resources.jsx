import React from 'react'

const Resources = () => {
  return (
    <div className='flex flex-wrap'>
      <div className='text-5xl font-semibold mt-5 mb-10 ml-auto mr-86'>
        Resources
      </div>
      <div className="grid grid-cols-2
       grid-rows-2 gap-2 text-white ml-180">
          <div className=" bg-[#F7365B] p-6 rounded-lg w-96 h-64  ">
            <h3 className=" text-xl font-semibold mb-1">Technology</h3>
            <p>Engage in project-based learning where students can build, create, and innovate, making education interactive and enjoyable.</p>
          </div>
          <div className=" bg-[#8238F3] p-6 rounded-lg  w-96 h-64 ">
            <h3 className="text-xl font-semibold mb-2">Content Creation</h3>
            <p>Engage in project-based learning where students can build, create, and innovate, making education interactive and enjoyable.</p>
          </div>
          <div className=" bg-[#3260DA] p-6 rounded-lg  w-96 h-64 ">
            <h3 className="text-xl font-semibold mb-2">Bussiness</h3>
            <p>Engage in project-based learning where students can build, create, and innovate, making education interactive and enjoyable.</p>
          </div>
          <div className=" bg-[#1CBF98] p-6 rounded-lg  w-96 h-64 ">
            <h3 className="text-xl font-semibold mb-2">Personality Development</h3>
            <p>Engage in project-based learning where students can build, create, and innovate, making education interactive and enjoyable.</p>
          </div>
      </div>
    </div>
  )
}

export default Resources