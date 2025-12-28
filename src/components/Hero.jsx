import { assets } from '../assets/assets'
const Hero = () => {
  return (
    <div id='#home' className=" bg-primary/5 py-30">
      {/* <div className='w-full'> */}
      <div className="container mx-auto w-full px-10">
        <div className="w-fit px-2 py-1 text-dark/80 border border-primary rounded-full flex flex-wrap justify-center items-center mx-auto text-center">
          <div className="flex items-center -space-x-3">
            <img src={assets.profile1Img} className='h-8 w-8 rounded-full flex justify-center text-center object-center object-cover' alt="profile1" />
            <img src={assets.profile2Img} className='h-8 w-8 rounded-full flex justify-center text-center object-center object-cover' alt="profile1" />
            <img src={assets.profile3Img} className='h-8 w-8 rounded-full flex justify-center text-center object-center object-cover' alt="profile1" />
            <img src={assets.profile4Img} className='h-8 w-8 rounded-full flex justify-center text-center object-center object-cover' alt="profile1" />
          </div>
          <span className='ml-3'>Trusted by 20k+ users</span>
        </div>

        <h1 className='text-center py-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>We Help Brands Grow With <span className='text-primary'> Performance </span> Marketing</h1>
        <p className='max-w-xl font-thin mx-auto text-2xl text-dark/70 text-center'>At our agency, we take pride in delivering impactful solutions that combine creativity, strategy, and technology.</p>
        <div className="py-10 px-3 gap-5 flex flex-wrap justify-center items-center font-semibold">
          <button className='px-8 py-3 bg-primary hover:bg-primary/90 cursor-pointer rounded-full'>Contact Me</button>
          <button className='px-8 py-3 bg-dark hover:bg-dark/90 rounded-full cursor-pointer text-amber-50'>Digital Market</button>
        </div>

        <div className="max-w-5xl flex mx-auto justify-center items-center overflow-hidden">
          <img className='w-fit object-cover rounded-xl' src={assets.heroImg} alt="hero-image" />
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Hero
