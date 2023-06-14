import nkosinati from '../assets/nkosinati.png'

const About = () => {
  return (
    <div className="md:relative flex flex-col-reverse md:flex-row-reverse items-center bg-white min-h-screen md:h-screen">
      <div className="flex flex-col items-center h-full justify-end w-full">
        <div className="p-8 mt-10 text-primary">
          <div className="mb-8">
            <p className="text-4xl md:text-1xl lg:text-3xl lg:text-5xl 2xl:text-8xl mb-3 text-primary">About Me
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
        <div className="lg:absolute bottom-60 2xl:left-[420px]">
          <img src={nkosinati} className="h-[500px] lg:w-[300px] lg:h-[300px] 2xl:w-[360px] w-[340px] 2xl:h-[360px] rounded-md md:rounded-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default About
