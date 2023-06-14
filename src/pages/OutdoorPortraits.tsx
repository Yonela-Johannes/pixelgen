import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';

const OutdoorPortraits = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-primary min-h-screen md:h-screen">
      <div className="flex flex-col text-white items-center h-full justify-end md:mb-60 w-full md:w-[50%]">
        <div className="p-8 md:p-0 mt-10">
          <div className="flex items-center flex-col mb- md:w-[480px]">
          <p className="relative text-4xl md:text-8xl mb-3">Outdoor Portraits
            <div className="absolute h-[4px] md:h-[8px] w-[55px] md:w-[170px] top-3 -left-6 md:top-4 md:-left-16 bg-white -rotate-45 border border-primary rounded-full"></div>
            </p>
            <div className="flex flex-col gap-4 text-1xl md:text-2xl font-light">
              <p>
                <i>The great Outdoors,</i> outdoor shoots are a challenge and
                sometimes that can be a huge understatement. But the fact that
                one can learn some trick/tactic everytime is pretty amazing. <br />
                Working around the challenges with nothing but only your creativity
                and some equipment is an experience on its own. The fact that
                one can work with what they have and still produce great quality
                content regardless is talent on its own.
              </p>
              <p>
                The element of coming together with nature to produce art is wholesome
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:flex-row gap-10 bg-white h-full w-full">
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
