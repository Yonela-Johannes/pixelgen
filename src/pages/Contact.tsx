import { AiFillFacebook , AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white min-h-screen md:h-screen">
      <div className="bg-primary w-full h-full"></div>
      <div className="py-20 md:p-0 flex flex-col items-center h-full w-full justify-end md:mb-60">
        <div className="flex flex-col items-center justify-around md:w-[70%] ">
          <div className="flex flex-col gap-4 w-full">
          <p className="relative text-4xl md:text-8xl mb-3 text-primary">Contact me
            <div className="absolute h-[4px] md:h-[8px] w-[55px] md:w-[170px] top-3 -left-6 md:top-4 md:-left-16 bg-primary -rotate-45 border rounded-full"></div>
            </p>
            <div className="flex text-1xl md:text-4xl flex-col gap-2font-light">
              <div className="flex items-center justify-between">
                <p>Facebook: @PizelGenZa</p>
                <div className="flex items-center gap-2">
                  <p>640+</p>
                  <AiFillFacebook className="text-[22px] md:text-[32px]" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>Instagram: @nes_327</p>
                <div className="flex items-center gap-2">
                  <p>520+</p>
                  <AiFillInstagram className="text-[22px] md:text-[32px]" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>Twitter: @nes_327</p>
                <div className="flex items-center gap-2">
                  <p>140+</p>
                  <FaTwitter className="text-[22px] md:text-[32px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end w-full font-light text-2xl">
              <div className="flex items-center gap-2">
                <p>denes327@gmail.com</p>
                <RiMailSendLine className="text-[22px] md:text-[32px]" />
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
  )
}

export default Contact
