import nkosinati from '../assets/nkosinati.png'

const About = () => {
  return (
    <div className="md:relative flex flex-col-reverse md:flex-row-reverse items-center bg-white min-h-screen md:h-screen">
      <div className="flex flex-col items-center h-full justify-end md:mb-60 w-full">
        <div className="p-8 mt-10">
          <div className="mb-8">
            <p className="relative text-4xl md:text-8xl mb-3">About Me
            <div className="absolute h-[4px] md:h-[8px] w-[55px] md:w-[170px] top-3 -left-6 md:top-5 md:-left-16 bg-primary -rotate-45 border rounded-full"></div>
            </p>
            <div className="flex flex-col gap-4 text-1xl md:text-2xl font-light md:w-[600px]">
              <p>
                Hi my name is Nkosinathi and I do what I love. You might be curious why I chose
                this field, well that's a bit of a long story but what I can tell you is, I've always been
                fascinated by gadgets and how much impact they have in our lives generally.
              </p>
              <div>
                From studying IT and having a passion for the visual arts, the migration through
                self learning has been motivated by the drive to be among the best and well known
                for their work. Every snap is my own interpretation of the moment and how I
                choose to edit it. This is a journey that I enjoy and plan to stay on for a while.
              </div>
              <div>
                In the following slides you will see some of my work, feel free to contact me.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white md:bg-primary h-full w-full md:w-[50%]">
        <div className="md:absolute bottom-60 left-[420px]">
          <img src={nkosinati} className="h-[500px] md:w-[360px] w-[340px] md:h-[360px] md:rounded-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default About
