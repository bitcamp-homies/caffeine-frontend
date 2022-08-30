// @ts-nocheck
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRef } from 'react'

const Carousel = ({ data }) => {
  // console.log(data)
  const settings = {
    lazyLoad: true,
    swipe: false,
    infinite: true,
    speed: 500,
    arrows: false
  }
  let img
  if (data != '') {
    img = data.img_file.split(',')
    img = img.filter((element, index) => index < img.length - 1)
  }
  let test

  const sliderRef = useRef();

  const handleNextSlide = () => {
    sliderRef.current.slickNext()
  }

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev()
  }

  return (
    <div className="carousel relative">
      <Slider {...settings} ref={sliderRef}>
        {data != '' &&
          img.map((item, index) => {
            test =
              'https://storage.googleapis.com/bitcamp-caffeine.appspot.com' +
              data.file_path +
              item
            {
              return (
                <div key={index}>
                  <img
                    src={test}
                    className='object-contain bg-white'
                    style={{ width: '100%', height: '24rem' }}
                  ></img>
                </div>
              )
            }
          })}
      </Slider>
      <button id='leftBtn' className='absolute w-11 top-[10.5rem] left-8 rotate-180' onClick={handlePrevSlide}>
        <img src={`${process.env.PUBLIC_URL}/img/ArrowBtn-128px.png`} alt='Next Button' className='invert'/>
      </button>
      <button id='rightBtn' className='absolute w-11 top-[10.5rem] right-8' onClick={handleNextSlide}>
        <img src={`${process.env.PUBLIC_URL}/img/ArrowBtn-128px.png`} alt='Previous Button' className='invert'/>
      </button>
    </div>
  )
}

export default Carousel
