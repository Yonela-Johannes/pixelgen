import unnamed from '../assets/unnamed.png';
import bravo from '../assets/bravo.png'
import image3 from '../assets/image3.png'

const StudioPortraits = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white min-h-screen md:h-screen text-primary">
      <div className="flex flex-col items-center h-full justify-end w-full md:w-[50%] md:mb-60">
        <div className="p-8 md:p-0 mt-10">
          <div className="flex md:items-center flex-col mb-8 md:w-[480px]">
          <p className="relative text-4xl md:text-8xl mb-3">Studio Portraits
            <div className="absolute h-[4px] md:h-[8px] w-[55px] md:w-[170px] top-2 -left-6 md:top-2 md:-left-16 bg-primary -rotate-45 border rounded-full"></div>
            </p>
            <div className="flex flex-col gap-4 text-1xl md:text-2xl font-light">
              <p>
                Studio, oh how I enjoy working in the studio, because
                I can dictate and control what I work with in order to
                yield the best result even before editing. The best
                parts is molding/shaping the light to whatever suits
                my taste for a particular theme for a shoot. Obviously
                working closely with the client/model also has its
                perks, in terms of being in a closed space with no
                outside interference during the shoot.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:flex-row gap-10 bg-primary h-full w-full">
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
