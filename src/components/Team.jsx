import React from 'react'
import { assets } from '../assets/assets'

const Team = () => {

  const team = [
    { name: "Samar", role: "CEO Founder" },
    { name: "Samar", role: "CEO Founder" },
    { name: "Samar", role: "CEO Founder" },
    { name: "Samar", role: "CEO Founder" },
    { name: "Sanam", role: "CO Founder" },
    { name: "Reddy", role: "Manager" },
    { name: "Michael", role: "Businessman" },
    { name: "Michael", role: "Businessman" },
  ]
  return (
    <>
      <div id='team' className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-40">
          <div className="w-full sm:w-1/2 text-center mx-auto">
            <h1 className='text-5xl text-dark pb-2 '>Meet the Team</h1>
            <p className='text-dark/60'>Behind every successful project is a passionate and skilled team — and ours is no exception.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
            {
              team.map((item, index) => (
                <div key={index} className="w-full m-2 border flex flex-wrap justify-center items-center bg-primary/10 border-primary/50 cursor-pointer hover:scale-105 transition rounded-2xl">
                  <img src={assets.profile1Img} className='h-20 w-20 p-2 rounded-full' alt="" />
                  <div className="p-5">
                    <p className='font-semibold text-dark'>{item.name}</p>
                    <p className='text-dark/60'>{item.role}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Team
