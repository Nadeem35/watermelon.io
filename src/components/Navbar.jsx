import { FaArrowRightLong } from "react-icons/fa6";
// import { FiArrowRight } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full fixed top-0 backdrop-blur-2xl '>

      <div className="flex justify-between items-center px-6 py-5 sm:px-12 md:px-24 lg:px-40 bg-bue-400">

        {/* Left lgog */}
        <div className="">
          <span className='text-3xl font-bold text-dark'>BrightMatter.io</span>
          <div className="w-4 h-4 bg-primary rounded-full"></div>
        </div>

        {/* Nav bar */}
        <div className="hidden md:flex items-center space-x-6 text-dark/80 font-semibold ">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/service" className="hover:text-primary">Service</Link>
          <Link to="/our-work" className="hover:text-primary">Our Work</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
        </div>

        {/* Hambergar */}
        <div className="font-semibold hidden md:block">
          <button className="flex justify-center items-center gap-3 py-2.5 px-6 rounded-full cursor-pointer text-dark/80 bg-primary hover:bg-primary/90">Contact Us
            {/* <FiArrowRight /> */}
            <FaArrowRightLong />
          </button>
        </div>

        {/* hambergar */}
        <div className="">
          <GiHamburgerMenu />
          <RxCross2 />
        </div>

      </div>
    </div>
  )
}

export default Navbar