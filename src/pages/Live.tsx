import nkosinati from '../assets/nkosinati.png';
import unnamed from '../assets/unnamed.png';
import bravo from '../assets/bravo.png';
import image3 from '../assets/image3.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png'

const Live = () => {
  return (
    <div className="md:relative flex flex-col py-40 md:flex-row-reverse items-center bg-primary min-h-screen md:h-screen">
      <div className="md:absolute bottom-0 right-0 flex flex-col self-end items-end justify-end md:rounded-tl-[150px] px-10 py-20 bg-white w-full md:w-[600px]">
        <div className="">
          <div className="mb-8">
            <p className="relative text-6xl mb-3">Live <br />
            Concerts
            <div className="absolute h-[5px] w-[140px] bg-black -top-2 -left-12 -rotate-45 border border-white"></div>
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-lg font-light">
                Loud music, unpredictable moving lights and tone<br />
                by the performers themselves, it's a beautiful mess <br />
                for me behind the lens. I just love how challenging and <br />
                mindblowing the experience is everytime, while trying <br />
                to achieve the best angle to portray the mood, the <br />
                energy, the atmosphere to make you wish you were there!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-primary min-h-full min-h-screen md:h-screen w-full">
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
