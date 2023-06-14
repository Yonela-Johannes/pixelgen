import unnamed from '../assets/unnamed.png';
import bravo from '../assets/bravo.png'
import image3 from '../assets/image3.png'

const StudioPortraits = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center bg-white min-h-screen md:h-screen">
      <div className="flex flex-col items-center h-full justify-end md:mb-60 w-full md:w-[50%]">
        <div className="p-10 mt-10">
          <div className="mb-8">
            <p className="relative text-6xl mb-3">Studio  Portraits
            <div className="absolute h-[5px] w-[140px] bg-black -top-2 -left-12 -rotate-45 border border-white"></div>
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-lg font-light">
                Studio, oh how I enjoy working in the studio, because <br />
                I can dictate and control what I work with in order to <br />
                yield the best result even before editing. The best <br />
                parts is molding/shaping the light to whatever suits <br />
                my taste for a particular theme for a shoot. Obviously <br />
                working closely with the client/model also has its <br />
                perks, in terms of being in a closed space with no <br />
                outside interference during the shoot.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:p-20 gap-10 justify-center bg-primary h-full w-full">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="">
            <img src={unnamed} className="h-full md:h-[840px] w-full object-contain" />
          </div>
          <div className="flex gap-10 flex-col">
              <img src={bravo} className="h-[400px] w-[320px] object-cover" />
              <img src={image3} className="h-[400px] w-[320px] object-fit" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudioPortraits
