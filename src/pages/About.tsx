import nkosinati from '../assets/nkosinati.png'

const About = () => {
  return (
    <div className="md:relative flex flex-col-reverse md:flex-row-reverse items-center bg-white min-h-screen md:h-screen">
      <div className="flex flex-col items-center h-full justify-end md:mb-60 w-full">
        <div className="p-10 mt-10">
          <div className="mb-8">
            <p className="relative text-6xl mb-3">About Me
            <div className="absolute h-[5px] w-[140px] bg-black -top-2 -left-12 -rotate-45 border border-white"></div>
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-xl font-light">
                Hi my name is Nkosinathi and I do what I love. You might be curious why I chose<br />
                this field, well that's a bit of a long story but what I can tell you is, I've always been <br />
                fascinated by gadgets and how much impact they have in our lives generally.
              </p>
              <div className="text-xl font-light">
                From studying IT and having a passion for the visual arts, the migration through <br />
                self learning has been motivated by the drive to be among the best and well known<br />
                for their work. Every snap is my own interpretation of the moment and how I <br />
                choose to edit it. This is a journey that I enjoy and plan to stay on for a while.
              </div>
              <div className="text-xl font-light">
                In the following slides you will see some of my work, feel free to contact me.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-primary h-full w-full md:w-[50%]">
        <div className="md:absolute bottom-40 left-[360px]">
          <img src={nkosinati} className="h-[500px] md:w-[500px] w-full md:rounded-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default About
