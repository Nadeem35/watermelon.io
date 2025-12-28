import React from 'react'
import { assets } from '../assets/assets'

const OurWork = () => {
  const work = [
    {
      "category": "E-Commerce", "description": "Developed a fully responsive and high-performance e-commerce platform."
    },

    {
      "category": "E-Commerce", "description": "Developed a fully responsive and high-performance e-commerce platform."
    },
    {
      "category": "E-Commerce", "description": "Developed a fully responsive and high-performance e-commerce platform."
    },
    {
      "category": "E-Commerce", "description": "Developed a fully responsive and high-performance e-commerce platform."
    },
    {
      "category": "E-Commerce", "description": "Developed a fully responsive and high-performance e-commerce platform."
    },
    {
      "category": "E-Commerce", "description": "Developed a fully responsive and high-performance e-commerce platform."
    },

  ]
  return (
    <>
      <div id='#ourwork' className="py-20">
        <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-40">
          <h1 className='text-5xl text-center text-dark'>Our latest work</h1>
          {/* <p className='text-dark/60 text-center py-5'>Whether you're launching a new business or looking to elevate your existing brand</p> */}
          <p className='text-dark/60 text-center mt-5 mb-8 max-w-2xl mx-auto'>
            Whether you're launching a new business or looking to elevate your existing brand
          </p>

          {/* Card section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {work.map((items, index) => (
              <div key={index} className="w-full border border-primary/60 rounded-2xl cursor-pointer overflow-hidden hover:scale-105 transition duration-300">
                < img src={assets.work1Img} className='h-44 w-full object-cover rounded-tl-2xl rounded-tr-2xl' alt="work1" />
                <div className="p-3">
                  <h1 className='text-xl text-dark'>{items.category}</h1>
                  <p className='py-5 text-dark/60'>{items.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div >
    </>
  )
}

export default OurWork