import React from 'react'

const FancyHeading = () => {
  return (
    <div className="flex flex-col justify-around text-4xl font-bold uppercase text-gray-500">
      {/* <span>Ich bin Andreas</span> */}
      <div className="h-14 overflow-hidden">
        <div className="animate-slide">
          <span className="mt-1 mb-11 inline-block bg-blue-500 py-1 px-3 text-white">
            Web Designer
          </span>
        </div>
        <div>
          <span className="mb-11 inline-block bg-teal-400 py-1 px-3 text-white">
            Web Developer
          </span>
        </div>
        <div>
          <span className="mb-11 inline-block bg-red-500 py-1 px-3 text-white">
            Freelancer
          </span>
        </div>
      </div>
      {/* <span>Aus Wien</span> */}
    </div>
  )
}

export default FancyHeading
