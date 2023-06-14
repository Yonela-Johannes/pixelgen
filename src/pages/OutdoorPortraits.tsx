import nkosinati from '../assets/nkosinati.png';
import unnamed from '../assets/unnamed.png';
import bravo from '../assets/bravo.png'
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';

const OutdoorPortraits = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-primary min-h-screen md:h-screen">
      <div className="flex flex-col text-white items-center h-full justify-end md:mb-60 w-full md:w-[50%]">
        <div className="p-10 mt-10">
          <div className="mb-8">
            <p className="relative text-6xl mb-3">Outdoor Portraits
            <div className="absolute h-[5px] w-[140px] bg-white -top-2 -left-12 -rotate-45 border border-primary"></div>
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-lg font-light">
                <i>The great Outdoors,</i> outdoor shoots are a challenge and <br />
                sometimes that can be a huge understatement. But the fact that<br />
                one can learn some trick/tactic everytime is pretty amazing. <br />
                Working around the challenges with nothing but only your creativity <br />
                and some equipment is an experience on its own. The fact that <br />
                one can work with what they have and still produce great quality <br />
                content regardless is talent on its own.
              </p>
              <p className="text-lg font-light">
                The element of coming together with nature to produce art is wholesome
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center md:p-20 gap-10 justify-center bg-white h-full w-full">
        <div className="flex flex-col md:flex-row md:gap-10 items-center justify-center">
          <div>
            <img src={image1} className="h-full md:h-[840px] w-full object-cover" />
          </div>
          <div>
              <img src={image2} className="h-full md:h-[840px] w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OutdoorPortraits
