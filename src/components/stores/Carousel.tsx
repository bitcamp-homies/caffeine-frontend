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

  
  const imgPath = data[0].file_path
  const img = data[0].img_file.split(',')
  console.log('https://storage.cloud.google.com/bitcamp-caffeine.appspot.com/'+img+imgPath)
  return(
    <div className="carousel">
      <Slider {...settings}>

        <div>
          <img id="img" className='' />
        </div>
        <div className="bg-blue-300">
          <img src="https://storage.cloud.google.com/bitcamp-caffeine.appspot.com/cafe/seoul/gangnam/a3boutcoffee/gangnam-a3boutcoffee-1.jpg"></img>
        </div>
        {
          img.map((item) => {
            return <div className="bg-slate-500">
              {item}
              </div>
          })
        }
      </Slider>
    </div>
  );
}

export default Carousel;