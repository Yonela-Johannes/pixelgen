 import nkosinati from '../assets/nkosinatii.png'
const Landing = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white min-h-screen md:h-screen text-primary">
      <div className="flex flex-col items-center h-full justify-end w-full md:w-[50%] md:mb-60">
        <div className="p-10 mt-10">
          <div className="mb-8">
            <p className="relative font-semibold text-3xl md:text-5xl mb-3">Nkosinathi Sopangisa
            <div className="absolute h-[5px] h-[6px] h-[6px] w-[80px] md:w-[120px] -top-0 -left-8 md:-top-0 md:-left-12 bg-primary -rotate-45 border rounded-full"></div>
            </p>
            <p className="text-2xl md:text-4xl font-thin">PORTFOLIO</p>
          </div>
          <div className="text-6xl md:text-8xl mb-4">
            <h1>PHOTO <br />GRAPHY</h1>
          </div>
          <p className='text-2xl md:text-4xl font-thin'>2021 SELECTION</p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-primary h-full w-full">
        <img src={nkosinati} className="h-full w-full object-contain" />
      </div>
    </div>
  )
}

export default Landing
