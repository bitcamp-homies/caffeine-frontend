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
<<<<<<< HEAD
  const path = img+data[0].file_path
  console.log(path)
=======
  const filepath = data[0].file_path;
  console.log(data[0].file_path)
  let test;
  //'https://storage.cloud.google.com/bitcamp-caffeine.appspot.com'+data[0].file_path+item
  console.log(test)
>>>>>>> a12f5274639ab4df04a8dc34f7f939d01f09571c
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
<<<<<<< HEAD
          img.map((item,index) => {
            return(
              <div key={index}>
              </div>
            )
=======
          img.map((item) => {
            test = 'https://storage.cloud.google.com/bitcamp-caffeine.appspot.com'+data[0].file_path+item;
            {
            return <div>
              <img src={test}>
              </img>
            </div>
            }

>>>>>>> a12f5274639ab4df04a8dc34f7f939d01f09571c
          })
        }
      </Slider>
    </div>
  );
}

export default Carousel;