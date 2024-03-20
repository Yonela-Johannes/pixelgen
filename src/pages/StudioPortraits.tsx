import unnamed from '../assets/unnamed.png';
import bravo from '../assets/bravo.png'
import image3 from '../assets/image3.png'

const StudioPortraits = () => {

  return (
    <div className="flex flex-col lg:flex-row-reverse xl:flex-row items-center bg-white lg:bg-primary xl:bg-white min-h-screen lg:h-screen md:h-screen text-primary lg:text-white xl:text-primary" id="portfolio">
      <div className="flex flex-col items-center h-full justify-end w-full lg:w-full xl:w-[50%]">
        <div className="p-8 md:p-0 mt-10">
          <div className="flex md:items-center flex-col mb-8 lg:w-[600px] xl:w-[360px] 2xl:w-[480px]">
            <p className="font-acumin w-full text-4xl md:text-1xl lg:text-3xl xl:text-5xl 2xl:text-8xl mb-3">Studio Portraits
            </p>
            <div className="flex flex-col gap-4 text-1xl md:text-4xl font-light">
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
      <div className="flex items-center justify-center md:flex-row gap-10 lg:gap-2 xl:gap-10 bg-primary lg:bg-white xl:bg-primary lg:w-[50%] h-full w-full xl:w-full">
        <div className="flex flex-col lg:flex-col xl:flex-row gap-10 lg:gap-2 xl:gap-10 items-center justify-center">
          <div
            data-aos="fade-up-left" data-aos-duration="3000" className="">
            <img src={unnamed} className="h-full lg:w-[200px] lg:h-[190px] xl:w-full xl:h-[650px] 2xl:h-[840px] w-full object-cover rounded-md 2xl:rounded-none" />
          </div>
          <div className="flex gap-10 lg:gap-2 xl:gap-10 flex-col">
            <img src={bravo} className="2xl:h-[400px] lg:w-[200px] lg:h-[190px] xl:h-[300px] 2xl:w-[320px] rounded-md 2xl:rounded-none object-cover" />
            <img src={image3} className="2xl:h-[400px] lg:w-[200px] lg:h-[190px] xl:h-[300px] 2xl:w-[320px] rounded-md 2xl:rounded-none object-cover" />
          </div>
        </div>
      </div>
    </div >
  )
}

export default StudioPortraits
