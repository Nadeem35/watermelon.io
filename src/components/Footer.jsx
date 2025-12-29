import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa'
import { RiHeart3Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div id='/footer' className="pt-20 pb-5 bg-primary/5">
        <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-40">
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
            <div className="w-fit">
              <h1 className='text-3xl text-dark font-bold cursor-pointer'>
                <Link to="/home">BrightMater.io</Link>
              </h1>
              <p className='h-4 w-4 bg-primary rounded-full'></p>
              <p className='mt-5 text-dark/60 '>Whether you're launching a new business or looking to elevate your existing brand.</p>

              <div className="w-auto py-5 flex flex-wrap justify-between items-center font-semibold text-dark/60">
                <Link className="hover:hover:text-primary transition" to="/">Home</Link>
                <Link className="hover:hover:text-primary transition" to="/service">Services</Link>
                <Link className="hover:hover:text-primary transition" to="/our-work">Our Work</Link>
                <Link className="hover:hover:text-primary transition" to="/contact">Contact Us</Link>
              </div>
            </div >
            <div className="">
              <h1 className='text-2xl text-dark font-semibold'>Subscribe to our newsletter </h1>
              <p className='text-dark/60 '>The latest news, articles, and resources, sent to your inbox weekly.</p>

              <div className="mt-5 flex justify-center items-center">
                <div className="w-full border border-dark/60 rounded p-2">
                  <input type="mail" placeholder='Enter your email' className='text-sm outline-none w-full' />
                </div>
                <button className='ml-2 bg-primary hover:bg-primary/90 text-dark px-5 py-2 rounded font-semibold cursor-pointer flex justify-center items-center'>Subscribe</button>
              </div>
            </div>
          </div >
          <hr className='w-full text-dark/60 mt-6' />
          <div className="mt-6 gap-5 text-dark/60 grid grid-cols-1 lg:grid-cols-2 ">
            <p>
              Copyright 2026 ©{" "}
              <a
                href="https://github.com/Nadeem35"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                N4Nadeem
              </a>{" "}
              - All Right Reserved.
            </p>
            <div className="gap-5 text-primary cursor-pointer flex justify-center items-center mt-5 lg:mt-0 lg:justify-self-end">
              <FaFacebookF size={25} className='hover:scale-115 transition' />
              <FaTwitter size={25} className='hover:scale-115 transition' />
              <FaInstagram size={25} className='hover:scale-115 transition' />
              <FaGoogle size={25} className='hover:scale-115 transition' />
            </div>
          </div>
          <hr className='w-full text-dark/60 mt-6' />
          <div className="mt-3 gap-2 text-dark/80 flex justify-center items-center">
            <h1>Made with</h1>
            <span className='text-red-500'>
              <RiHeart3Fill />
            </span>
            <a
              href="https://github.com/Nadeem35"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              N4deem
            </a>{" "}
          </div>
        </div >
      </div >
    </>
  )
}

export default Footer