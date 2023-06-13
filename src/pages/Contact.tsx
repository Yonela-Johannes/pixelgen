import { AiFillFacebook , AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white h-screen">
      <div className="bg-primary w-full h-full"></div>
      <div className="flex flex-col items-center h-full w-full justify-end md:mb-60">
        <div className="flex flex-col items-center justify-around w-[70%] ">
          <div className="flex flex-col gap-4 w-full">
            <p className="relative text-6xl mb-3">Contact me
            <div className="absolute h-[5px] w-[120px] bg-black -top-0 -left-12 -rotate-45 border border-white"></div>
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-4xl font-light">Facebook: @PizelGenZa</p>
                <div className="flex items-center gap-2">
                  <p className="text-4xl font-light">640+</p>
                  <AiFillFacebook size={32} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-4xl font-light">Instagram: @nes_327</p>
                <div className="flex items-center gap-2">
                  <p className="text-4xl font-light">520+</p>
                  <AiFillInstagram size={32} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-4xl font-light">Twitter: @nes_327</p>
                <div className="flex items-center gap-2">
                  <p className="text-4xl font-light">140+</p>
                  <FaTwitter size={32} />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end w-full font-light text-2xl">
              <div className="flex items-center gap-2">
                <p>denes327@gmail.com</p>
                <RiMailSendLine size={32} />
              </div>
              <div className="flex items-center gap-2">
                <p>+27 62 324 5563</p>
                <AiOutlineWhatsApp size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
