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
  console.log(img)
  return(
    <div className="carousel">
      <Slider {...settings}>
        {
          img.map((item) => {
            return <div className="bg-slate-500">{item}</div>
          })
        }
        {/* <div className="bg-slate-500"><h3>1</h3></div>
        <div className="bg-blue-300"><h3>2</h3></div>
        <div className="bg-red-700"><h3>3</h3></div>
        <div className="bg-orange-500"><h3>4</h3></div> */}
      </Slider>
    </div>
  );
}

export default Carousel;