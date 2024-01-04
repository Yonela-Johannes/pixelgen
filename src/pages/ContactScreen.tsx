import { AiFillFacebook , AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import Contact from '../components/contact/Contact';


const ContactScreen = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center bg-primary " id='contact'>
        <div className="bg-primary w-full md:h-full">
          <Contact />
        </div>
        <div className="py-20 p-8 md:p-0 flex flex-col items-center h-full w-full justify-end lg:pb-20 2xl:pb-60 bg-white">
          <div className="flex text-primary flex-col items-center justify-around w-full lg:w-[90%] 2xl:w-[70%] ">
            <div className="flex flex-col gap-4 w-full">
            <p className="font-acumin w-full text-4xl md:text-1xl lg:text-3xl xl:text-5xl 2xl:text-8xl mb-3">Find me
              </p>
              <div className="flex text-1xl md:text-4xl flex-col gap-2 font-light mb-4">
                <div className="flex items-center justify-between">
                  <p>Facebook: @PizelGenZa</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Instagram: @nes_327</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Twitter: @nes_327</p>
                </div>
              </div>
              <div className="flex flex-col items-end w-full font-light text-1xl md:text-4xl">
                <div className="flex items-center gap-2">
                  <p>denes327@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>+27 62 324 5563</p>
                  <AiOutlineWhatsApp className="text-[22px] md:text-[32px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactScreen
