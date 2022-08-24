// @ts-nocheck
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Carousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  let img
  if (data != '') {
    img = data[0].img_file.split(',')
    img = img.filter((element, index) => index < img.length - 1)
  }
  let test

  return (
    <div className="carousel">
      <Slider {...settings}>
        {data != '' &&
          img.map((item, index) => {
            test =
              'https://storage.cloud.google.com/bitcamp-caffeine.appspot.com' +
              data[0].file_path +
              item
            {
              return (
                <div key={index}>
                  <img
                    src={test}
                    style={{ width: '100%', height: '24rem' }}
                  ></img>
                </div>
              )
            }
          })}
      </Slider>
    </div>
  )
}

export default Carousel
