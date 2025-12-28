import { FaArrowRight, FaUser } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <>
      <div id='/contact' className="py-10">
        <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-40">
          <div className="w-full sm:w-1/2 text-center mx-auto px-6">
            <h1 className='text-5xl text-dark'>Reach out to us</h1>
            <p className='text-dark/60 py-5'>Let’s talk! Whether it’s a quick question or a big project, we’re just a message away.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <form action="">
              <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">

                <div className="">
                  <label htmlFor="" className='block text-dark mb-2'>Name</label>
                  <div className="flex items-center gap-4 p-2 border border-dark/30 rounded ">
                    {/* Name */}
                    <FaUser size={15} />
                    <input type="text" placeholder='Enter your name' className='w-full text-sm outline-none' />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="" className='block text-dark mb-2'>Email</label>
                  <div className="flex items-center gap-4 p-2 border border-dark/30 rounded ">
                    {/* Email */}
                    <GrMail size={20} />
                    <input type="text" placeholder='Enter your email' className='w-full text-sm outline-none' />
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <label htmlFor="" className='block text-dark mb-2'>Your message</label>
                <div className="flex items-center gap-4 p-2 border border-dark/30 rounded ">
                  {/* Email */}
                  <textarea name="" id="" placeholder='Enter your message' className='w-full text-sm h-30 outline-none'></textarea>
                </div>
              </div>

              <button className='bg-primary hover:bg-primary/90 text-dark mt-5 px-5 py-2 rounded font-semibold cursor-pointer flex justify-center items-center'>Submit <FaArrowRight className='ml-3' />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact