import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return(
    <div className="carousel">
      <Slider {...settings}>
        <div>
          <img id="img" className='' />
        </div>
        <div className="bg-blue-300">
          <img src="https://storage.cloud.google.com/bitcamp-caffeine.appspot.com/cafe/seoul/gangnam/a3boutcoffee/gangnam-a3boutcoffee-1.jpg"></img>
        </div>
        <div className="bg-red-700"><h3>3</h3></div>
        <div className="bg-orange-500"><h3>4</h3></div>
      </Slider>
    </div>
  );
}

export default Carousel;