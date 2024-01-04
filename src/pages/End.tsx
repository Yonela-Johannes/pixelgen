import nkosinati from '../assets/nkosinatii.png';
const End = () => {
  return (
    <div className="md:relative flex flex-col md:flex-row items-end justify-end md:items-center text-white bg-primary h-screen w-full">
      <div className="flex items-center justify-center bg-primary h-full w-full">
        <img src={nkosinati} className="h-full w-full object-contain" />
      </div>
      <div className="p-10 md:p-0 md:absolute right-56 bottom-60">
        <div data-aos="zoom-out-up" data-aos-duration="1000" className="bg-white w-[2px] h-[30px]"></div>
          <div data-aos="zoom-out-up" data-aos-duration="2000" className="">
            <p className='text-2xl md:text-6xl'>
              Thank You
            </p>
          </div>
        <div data-aos="zoom-out-up" data-aos-duration="3000" className="bg-white w-[2px] h-[60px] mt-4"></div>
      </div>
    </div>
  )
}

export default End
