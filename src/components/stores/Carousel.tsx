// @ts-nocheck
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = ({data}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  const img = data[0].img_file.split(',')
  let test;

  return(
    <div className="carousel">
      <Slider {...settings}>
      {
          img.map((item) => {
            test = 'https://storage.cloud.google.com/bitcamp-caffeine.appspot.com'+data[0].file_path+item;
            {
            return <div>
              <img className="h-96" src={test}>
              </img>
            </div>
            }

          })
        }
      </Slider>
    </div>
  );
}

export default Carousel;