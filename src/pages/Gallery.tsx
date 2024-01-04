import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image10 from '../assets/image10.jpg'
import image11 from '../assets/image11.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image18 from '../assets/image18.jpg'
import image19 from '../assets/image19.jpg'
import shape from '../assets/hero-shape.svg'

function Gallery(){

  return (
    <div className="gallery md:flex items-center justify-center md:mt-20" id="gallery">
      <div className="">
        <ul data-aos="zoom-in-up" data-aos-duration="3000" data-aos-easing="linear" className="gallery-list">

            <li className="gallery-item" data-reveal>

              <div className="gallery-card">

                <figure className="card-banner img-holder has-before w-[310px] h-[430px] lg:w-[410px] lg:h-[650px]">
                  <img src={image6} className='w-[300px] h-[420px] lg:w-[400px] lg:h-[625px] object-cover rounded-xl' loading="lazy" alt="Featured"
                  />
                </figure>
              </div>

              <div className="gallery-card">

                <figure className="card-banner img-holder has-before ww-[310px] h-[430px] lg:w-[410px] lg:h-[650px]">
                  <img src={image7} className=' w-[300px] h-[420px] lg:w-[400px] lg:h-[625px] object-cover rounded-xl' loading="lazy"
                    alt="Featured" />
                </figure>
              </div>

            </li>


            <li className="gallery-item" data-reveal >

              <div className="gallery-card">

                <figure className="card-banner img-holder has-before w-[310px] h-[430px] lg:w-[410px] lg:h-[650px]">
                  <img src={image4} className='w-[300px] h-[420px] lg:w-[400px] lg:h-[625px] object-cover rounded-xl' loading="lazy" alt="Featured"
                  />
                </figure>
              </div>

              <div className="gallery-card">

                <figure className="card-banner img-holder has-before w-[310px] h-[430px] lg:w-[410px] lg:h-[650px]">
                  <img src={image5} className='w-[300px] h-[420px] lg:w-[400px] lg:h-[625px] object-cover rounded-xl' loading="lazy" alt="Featured"
                  />
                </figure>
              </div>

            </li>

            <li className="gallery-item" data-reveal >

              <div className="gallery-card">

                <figure className="card-banner img-holder has-before ww-[310px] h-[430px] lg:w-[410px] lg:h-[650px]">
                  <img src={image10} className='w-[300px] h-[420px] lg:w-[400px] lg:h-[625px] object-cover rounded-xl' loading="lazy" alt="Featured"
                  />
                </figure>

              </div>

              <div className="gallery-card">

                <figure className="card-banner img-holder has-before ww-[310px] h-[430px] lg:w-[410px] lg:h-[650px]">
                  <img src={image11} className='w-[300px] h-[420px] lg:w-[400px] lg:h-[625px] object-cover rounded-xl' loading="lazy" alt="Featured"
                  />
                </figure>

              </div>

            </li>

            <li className="gallery-item" data-reveal >

              <div className="gallery-card">

                <figure className="card-banner img-holder has-before ww-[310px] h-[430px] lg:w-[480px] lg:h-[650px]">
                  <img src={image19} className='w-[300px] h-[420px] lg:w-[450px] lg:h-[625px] object-cover rounded-xl' loading="lazy"
                    alt="Featured" />
                </figure>

              </div>

              <div className="gallery-card">

                <figure className="card-banner img-holder has-before ww-[310px] h-[430px] lg:w-[480px] lg:h-[650px]">
                  <img src={image18} className='w-[300px] h-[420px] lg:w-[450px] lg:h-[625px] object-cover rounded-xl' loading="lazy"
                    alt="Featured" />
                </figure>
              </div>

            </li>
        </ul>
        <img src={shape} loading="lazy" alt="" className="shape w-[100px] h-[70px]" />

      </div>
    </div>
  )

}

export default Gallery
