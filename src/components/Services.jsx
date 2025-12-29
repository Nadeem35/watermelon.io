import { services } from '../assets/assets';

const Service = () => {

  return (
    <div id='services' className='bg-primary/5 py-20'>
      <div className="container mx-auto">
        <div className="w-full sm:w-1/2 mx-auto mb-10 text-center text-dark">
          <h1 className='text-5xl'>How we can Help you? </h1>
          <p className='py-5 text-xl text-dark/60'>Whether you're launching a new business or looking to elevate your existing brand.</p>
        </div>

        {/* Service card */}
        <div className="flex justify-center items-center px-4 cursor-pointer">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
            {services.map((item, index) => (
              <div
                key={index} // <--- MOVED KEY HERE (Critical Fix)
                className="flex flex-col md:flex-row items-center rounded-xl border border-primary p-10 hover:scale-105  duration-300"
              >
                {/* Icon Wrapper */}
                <div className='shrink-0 border-4 border-primary/30 rounded-full text-primary p-4 mb-4 md:mb-0 md:mr-6'>
                  <span>{<item.icon size={35} />}</span>
                </div>

                {/* Text Content */}
                <div className="text-center md:text-left"> {/* Center text on mobile, left on desktop */}
                  <h3 className='font-bold text-lg text-dark/80 mb-2'>{item.title}</h3>
                  <p className='text-dark/60 leading-relaxed'>{item.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Service