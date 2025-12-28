import React from 'react'
import { FaFacebookF, FaGoogle, FaHeart, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div id='footer' className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-40">

          <div className="grid gap-10 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
            <div className="">
              <h1 className='text-3xl text-dark font-bold'>BrightMater.io</h1>
              <p className='h-4 w-4 bg-primary rounded-full'></p>
              <p className='mt-5 text-dark/60 w-96'>Whether you're launching a new business or looking to elevate your existing brand.</p>

              <div className="w-80 py-5 flex justify-between items-center font-semibold text-dark/60">
                <Link to="#home">Home</Link>
                <Link to="#service">Services</Link>
                <Link to="#ourwork">Our Work</Link>
                <Link to="#contact">Contact Us</Link>
              </div>
            </div>
            <div className="">
              <h1 className='text-2xl text-dark font-semibold'>Subscribe to our newsletter </h1>
              <p className='text-dark/60 text-sm'>The latest news, articles, and resources, sent to your inbox weekly.</p>

              <div className="mt-5 flex justify-center items-center">
                <div className="w-full border border-dark/60 rounded p-2">
                  <input type="mail" placeholder='Enter your email' className='outline-none w-full' px-5 />
                </div>
                <button className='ml-2 bg-primary hover:bg-primary/90 text-dark px-5 py-2 rounded font-semibold cursor-pointer flex justify-center items-center'>Subscribe</button>
              </div>
            </div>
          </div>
          <hr className='w-full text-dark/60 mt-6' />
          <div className="mt-6 gap-5 text-dark/60 grid grid-cols-1 lg:grid-cols-2 ">
            <p>Copyright 2025 © TheAbhishekCodes - All Right Reserved.</p>
            <div className="gap-5 text-primary flex justify-center items-center mt-5 lg:mt-0 lg:justify-self-end">
              <FaFacebookF size={25} />
              <FaTwitter size={25} />
              <FaInstagram size={25} />
              <FaGoogle size={25} />
            </div>
          </div>
          <hr className='w-full text-dark/60 mt-6' />

          <div className="mt-3 gap-2 text-dark/80 flex justify-center items-center">
            <h1>Made with</h1>
            <span className='text-red-500'> <FaHeart /></span>
            <h1>N4deem</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer