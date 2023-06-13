import pixel from '../assets/pixel.png'

const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center text-white bg-primary h-screen w-full">
      <div className="absolute left-56 bottom-60">
      <div className="bg-white w-[2px] h-[30px]"></div>
        <div className="flex ">
          <img src={pixel} className='w-[580px] h-[100px] object-contain' alt="pixel" />
          <p className=''>TM</p>
        </div>
        <div className="">
          <p className='text-2xl'>
            // PHOTOGRAPHER / GRAPHIC DESIGNER // CONTENT CREATOR /// <br />
            / NKOSINATHI SOPANGISA // @NES_327 /// <br />
            ///SOPANGISA (PTY) LTD//
          </p>
        </div>
      <div className="bg-white w-[2px] h-[60px] mt-4"></div>
      </div>
    </div>
  )
}

export default Hero
