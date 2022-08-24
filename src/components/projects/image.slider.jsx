import { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./carousel.css";

export default function ImageSlider(props) {
  const { slides } = props;
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <KeyboardArrowLeftIcon className="left-arrow" onClick={prevSlide} />
      <KeyboardArrowRightIcon className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
            x
          >
            <div>
              {index === current && (
                <img src={slide.image} alt="travelimage" className="image" />
              )}
            </div>
            <div className="content">
              <h2>{slide.title}</h2>
              <h4>{slide.content}</h4>
              <a href={slide.link}>Github link</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
