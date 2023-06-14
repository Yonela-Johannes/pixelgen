import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png'

const Live = () => {
  return (
    <div className="xl:relative flex flex-col md:py-40 md:flex-row-reverse items-center bg-primary min-h-screen md:h-screen">
      <div className="xl:absolute bottom-0 right-0 flex flex-col self-end items-end justify-end xl:rounded-tl-[150px] px-10 py-10 bg-white lg:bg-primary xl:bg-white text-primary lg:text-white xl:text-primary w-full xl:w-[600px]">
        <div className="mt-10">
          <div className="flex md:items-center lg:w-[600px] flex-col xl:w-[480px]">
          <p className="w-full text-4xl md:text-1xl lg:text-3xl xl:text-5xl 2xl:text-8xl mb-3">Live Concerts
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
      <div className="flex items-center justify-center md:flex-row bg-primary lg:bg-white xl:bg-primary md:h-screen w-full lg:w-[52.1%] xl:w-full">
        <div className="flex flex-col md:flex-col-reverse  gap-2 md:gap-none lg:gap-2 xl:gap-none lg:flex-col xl:flex-row-reverse items-center justify-center w-full">
          <div className="xl:w-full">
            <img src={image5} className="h-[310px] lg:w-[200px] lg:h-[190px] xl:h-[700px] w-full 2xl:w-[1150px] xl:w-[800px] object-cover rounded-md 2xl:rounded-none" />
          </div>
          <div className="flex items-center bg-primary lg:bg-white xl:bg-primary gap-2 md:gap-none lg:gap-2 xl:gap-10 justify-center flex-col xl:w-[50%] h-full">
              <img src={image6} className="h-[310px] w-[380px] lg:w-[200px] lg:h-[190px] xl:h-[330px] xl:w-[300px] 2xl:w-[520px] rounded-md 2xl:rounded-none object-cover" />
              <img src={image7} className="h-[310px] w-[380px] lg:w-[200px] lg:h-[190px] xl:h-[330px] xl:w-[300px] 2xl:w-[520px] rounded-md 2xl:rounded-none object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Live
