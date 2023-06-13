import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import four from '../assets/four.jpg';
import five from '../assets/five.jpg';

const Nightlife = () => {
  return (
    <div className="flex gap-10 flex-col-reverse items-center bg-primary min-h-screen">
      <div className="flex justify-center gap-10">
        <img src={four} className="h-[350px] w-[520px] object-cover" />
          <div className="flex flex-col justify-center w-[520px] bg-white h-[460px]">
            <div className="flex flex-col self-center">
              <p className="relative text-6xl mb-3">Nightlife <br />
              Photography
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
          <img src={five} className="h-[350px] w-[520px] object-cover" />
      </div>
      <div className="flex gap-10 items-center justify-center bg-primary w-full">
        <img src={one} className="h-[350px] w-[520px] object-cover" />
        <img src={two} className="h-[350px] w-[520px] object-cover" />
        <img src={three} className="h-[350px] w-[520px] object-cover" />
      </div>
    </div>
  )
}

export default Nightlife
