import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png'

const Live = () => {
  return (
    <div className="md:relative flex flex-col md:py-40 md:flex-row-reverse items-center bg-primary min-h-screen md:h-screen">
      <div className="md:absolute bottom-0 right-0 flex flex-col self-end items-end justify-end md:rounded-tl-[150px] px-10 py-20 bg-white w-full md:w-[600px]">
        <div className="mt-10">
          <div className="flex md:items-center flex-col mb- md:w-[480px]">
          <p className="relative text-4xl md:text-8xl mb-3 text-primary">Live Concerts
            <div className="absolute h-[4px] md:h-[8px] w-[55px] md:w-[170px] top-2 -left-6 md:top-1 md:-left-16 bg-primary -rotate-45 border rounded-full"></div>
            </p>
            <div className="flex flex-col gap-4 text-1xl md:text-2xl font-light">
              <p>
                Loud music, unpredictable moving lights and tone
                by the performers themselves, it's a beautiful mess
                for me behind the lens. <br />
                I just love how challenging and
                mindblowing the experience is everytime, while trying
                to achieve the best angle to portray the mood, the
                energy, the atmosphere to make you wish you were there!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:flex-row gap-10 bg-primary h-full w-full">
        <div className="flex flex-col-reverse md:flex-row-reverse gap-10 md:gap-20 items-center justify-center">
          <div className="w-full">
            <img src={image5} className="h-[700px] w-[1100px] object-cover" />
          </div>
          <div className="flex items-start bg-primary gap-10  md:gap-20 flex-col md:w-[40%] h-full">
              <img src={image6} className="h-[310px] w-[520px] object-cover" />
              <img src={image7} className="h-[310px] w-[520px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Live
