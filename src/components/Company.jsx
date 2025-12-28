import { FaApple, FaFacebook, FaGoogle, FaGoogleDrive, FaInstagram, FaLinkedin, FaMicrosoft } from 'react-icons/fa6'

const Company = () => {
  return (
    <div id='#company' className='py-20'>
      <div className="bg-white px-3">
        <div className="container mx-auto">
          <h2 className='text-center text-2xl text-dark'>Trusted by leading companies</h2>

          <div className="flex flex-wrap justify-center items-center py-14 gap-10 text-primary/80">

            <span className='border border-primary/80 rounded-full p-4 cursor-pointer transition-transform duration-300 hover:scale-110'><FaMicrosoft size={40} /> </span>
            <span className='border border-primary/80 rounded-full p-4 cursor-pointer transition-transform duration-300 hover:scale-110'><FaFacebook size={40} /> </span>
            <span className='border border-primary/80 rounded-full p-4 cursor-pointer transition-transform duration-300 hover:scale-110'><FaLinkedin size={40} /> </span>
            <span className='border border-primary/80 rounded-full p-4 cursor-pointer transition-transform duration-300 hover:scale-110'><FaApple size={40} /> </span>
            <span className='border border-primary/80 rounded-full p-4 cursor-pointer transition-transform duration-300 hover:scale-110'><FaInstagram size={40} /> </span>
            <span className='border border-primary/80 rounded-full p-4 cursor-pointer transition-transform duration-300 hover:scale-110'><FaGoogle size={40} /> </span>
            <span className='border border-primary/80 rounded-full p-4 cursor-pointer transition-transform duration-300 hover:scale-110'><FaGoogleDrive size={40} /> </span>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Company

