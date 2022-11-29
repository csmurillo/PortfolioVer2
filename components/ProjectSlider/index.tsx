import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function PrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{ ...style, cursor:"pointer", display: "block",width: 0, height: 0, borderTop: "50px solid transparent", borderBottom: "50px solid transparent", borderRight: "50px solid white", position:"absolute",top:"50%",transform: "translate(-50%, -50%)", left:"-50px"  }}
      onClick={onClick}
    />
  );
}
function NextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{ ...style, cursor:"pointer", display: "block",width: 0, height: 0, borderTop: "50px solid transparent", borderBottom: "50px solid transparent", borderLeft: "50px solid white", position:"absolute",top:"50%",transform: "translate(-50%, -50%)", right:"-100px"  }}
      onClick={onClick}
    />
  );
}
interface projectSliderProps{
    images:string []
}
const ProjectSlider:React.FC<projectSliderProps>= ({images})=>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow:<PrevArrow />,
      };
      return (
        <Slider {...settings}>
            {images.map((image,index)=>(
                <div key={index} className="relative w-full h-80 3xl:h-[40rem]">
                    <Image fill src={image} alt="programming project"/>
                </div>
            ))}
        </Slider>
      );
};


export default ProjectSlider;