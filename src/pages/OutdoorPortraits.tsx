import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';

const OutdoorPortraits = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse 2xl:flex-row items-center bg-white min-h-screen 2xl:h-screen">
      <div className="flex flex-col 2xl:flex-col items-center h-full justify-end w-full lg:w-full 2xl:w-[50%] 2xl:bg-primary">
        <div className="p-8 md:p-0 mt-10 2xl:text-white">
          <div className="flex md:items-center flex-col mb-8 lg:w-[600px] 2xl:w-[480px]">
          <p className="w-full text-4xl md:text-1xl lg:text-3xl xl:text-5xl 2xl:text-8xl mb-3">Outdoor Portraits
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
      <div className="flex items-center justify-center md:flex-row gap-10 bg-white lg:bg-primary 2xl:bg-white h-full w-full lg:h-screen lg:w-[50%] 2xl:w-full ">
        <div className="flex flex-col lg:flex-col 2xl:flex-row md:gap-10 items-center justify-center">
          <div>
            <img src={image1} className="h-full w-full  lg:h-[190px]  lg:w-[200px]  xl:w-[300px]  xl:h-[300px] lg:rounded-md 2xl:rounded-none md:h-[600px] 2xl:h-[800px] 2xl:w-[450px] object-cover" />
          </div>
          <div>
              <img src={image2} className="h-full w-full  lg:h-[190px]  lg:w-[200px]  xl:w-[300px]  xl:h-[300px] lg:rounded-md 2xl:rounded-none md:h-[600px] 2xl:h-[800px] 2xl:w-[450px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OutdoorPortraits
