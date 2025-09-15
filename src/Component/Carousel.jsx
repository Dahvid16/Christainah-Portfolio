import React from 'react'
import Graphic1 from '../assets/Images/Graphic_1.png'
import Graphic2 from '../assets/Images/Graphic_2.jpg'
import Graphic3 from '../assets/Images/Graphic_3.jpg'
import Graphic4 from '../assets/Images/Graphic_4.jpg'
import Graphic5 from '../assets/Images/Graphic_5.png'
import Graphic6 from '../assets/Images/Graphic_6.png'
import Graphic7 from '../assets/Images/Graphic_7.png'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'

const Carousel = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()], { loop: false });

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
            <div className="embla__slide">
              <img className="embla__slide__img" src={Graphic1} alt="Your alt text" />
            </div>
            <div className="embla__slide">
              <img className="embla__slide__img" src={Graphic2} alt="Your alt text" />
            </div>
            <div className="embla__slide">
              <img className="embla__slide__img" src={Graphic3} alt="Your alt text" />
            </div>
            <div className="embla__slide">
              <img className="embla__slide__img" src={Graphic4} alt="Your alt text" />
            </div>
            <div className="embla__slide">
              <img className="embla__slide__img" src={Graphic5} alt="Your alt text" />
            </div>
            <div className="embla__slide">
              <img className="embla__slide__img" src={Graphic6} alt="Your alt text" />
            </div>
            <div className="embla__slide">
              <img className="embla__slide__img" src={Graphic7} alt="Your alt text" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel