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
  const filepath = data[0].file_path;
  console.log(data[0].file_path)
  let test;
  //'https://storage.cloud.google.com/bitcamp-caffeine.appspot.com'+data[0].file_path+item
  console.log(test)
  return(
    <div className="carousel">
      <Slider {...settings}>
        {
          img.map((item) => {
            test = 'https://storage.cloud.google.com/bitcamp-caffeine.appspot.com'+data[0].file_path+item;
            {
            return <div>
              <img src={test}>
              </img>
            </div>
            }

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