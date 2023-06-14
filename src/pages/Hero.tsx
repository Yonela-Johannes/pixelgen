import pixel from '../assets/pixel.png'

const Hero = () => {
  return (
    <div className="md:relative flex flex-col md:flex-row items-end justify-end md:items-center text-white bg-primary min-h-screen md:h-screen w-full">
      <div className="p-10 md:p-0 md:absolute self-end md:left-56 bottom-60">
        <div className="bg-white w-[2px] h-[30px]"></div>
          <div className="flex ">
            <img src={pixel} className='md:w-[700px] h-full w-[200px] md:h-[100px] object-cover' alt="pixel" />
            <p className=''>TM</p>
          </div>
          <div className="">
            <p className=' text-1xl md:text-2xl'>
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
