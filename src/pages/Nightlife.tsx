import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import four from '../assets/four.jpg';
import five from '../assets/five.jpg';

const Nightlife = () => {
  return (
    <div className="flex gap-10 flex-col-reverse items-center bg-primary min-h-screen text-primary md:py-20">
      <div className="flex flex-col items-center md:items-start md:flex-row justify-center gap-10">
        <img src={four} className="h-full md:h-[350px] w-[300px] md:w-[380px] object-cover" />
        <div className="p-10 md:p-20 bg-white">
          <div className="flex flex-col justify-center md:w-[500px]">
            <div className="flex flex-col self-center">
            <p className="relative text-4xl md:text-8xl mb-3">Nightlife Photography
            <div className="absolute h-[4px] md:h-[8px] w-[55px] md:w-[130px] top-2 -left-6 md:top-6 md:-left-16 bg-primary -rotate-50 border rounded-full"></div>
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
          <img src={five} className="h-full md:h-[350px] w-[300px] md:w-[380px] object-cover" />
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center bg-primary w-full py-10">
        <img src={one} className="h-full md:h-[350px] w-[300px] md:w-[380px] object-cover" />
        <img src={two} className="h-full md:h-[350px] w-[300px] md:w-[520px] object-cover" />
        <img src={three} className="h-full md:h-[350px] w-[300px] md:w-[520px] object-cover" />
      </div>
    </div>
  )
}

export default Nightlife
