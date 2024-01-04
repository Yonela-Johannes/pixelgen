import nkosinati from '../assets/nkosinatii.png';


const Landing = () => {

  return (
    <div className="flex flex-col sm:flex-row items-center bg-white w-screen min-h-screen h-screen sm:h-screen text-primary">
      <div className="flex flex-col items-center h-full justify-end w-full md:w-[50%] md:mb-60">
        <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" className="p-10 mt-10">
          <div className="mb-8">
            <p className="font-acumin font-semibold text-3xl md:text-1xl lg:text-3xl xl:text-5xl mb-3 text-primary">Nkosinathi Sopangisa
            </p>
            <p className="text-2xl md:text-4xl lg:text-2xl xl:text-4xl font-thin">PORTFOLIO</p>
          </div>
          <div className="text-6xl md:text-8xl lg:text-5xl 2xl:text-8xl mb-4">
            <h1>PHOTO <br />GRAPHY</h1>
          </div>
          <p className='text-2xl md:text-4xl lg:text-2xl xl:text-4xl font-thin'>2021+ SELECTION</p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-primary h-full w-full">
        <div
          className="p-2 md:p-20 h-full w-full flex flex-col md:flex-row items-center gap-7"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <img src={nkosinati} className="h-full w-full object-contain" />
        </div>
      </div>
    </div>
  )
}

export default Landing
