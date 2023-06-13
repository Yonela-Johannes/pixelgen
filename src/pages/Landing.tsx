 import nkosinati from '../assets/nkosinatii.png'
const Landing = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white h-screen">
      <div className="flex flex-col items-center h-full justify-end w-[35%] md:mb-60">
        <div className="p-10 mt-10">
          <div className="mb-8">
            <p className="relative font-semibold text-4xl mb-3">Nkosinathi Sopangisa
            <div className="absolute h-[5px] w-[120px] bg-black -top-2 -left-12 -rotate-45 border border-white"></div>
            </p>
            <p className="text-4xl font-light">PORTFOLIO</p>
          </div>
          <div className="text-8xl mb-4">
            <h1>PHOTO <br />GRAPHY</h1>
          </div>
          <p className='text-4xl font-thin'>2021 SELECTION</p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-primary h-full w-full">
        <img src={nkosinati} className="h-full w-full object-contain" />
      </div>
    </div>
  )
}

export default Landing
