import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.scss";

const Carousel = () => {
  return (
    <div className="container-carousel">
    <Slider
      dots={true}
      arrows={true}
      slidesToShow={1}
      autoplay={true}
      autoplaySpeed={4000}
    >
      <div>
        <img src="http://placekitten.com/g/400/200" />
      </div>
      <div>
        <img src="http://placekitten.com/g/400/200" />
      </div>
      <div>
        <img src="http://placekitten.com/g/400/200" />
      </div>
    </Slider>
  </div>
  )
}

export default Carousel;