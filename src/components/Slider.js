import { useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Slider = ({ data, current, setCurrent, autoSlider, setAutoSlider }) => {  

  // Auto slider
  useEffect(() => {
    if (autoSlider) {
      let slider = setInterval(() => {
        setCurrent(current === data.length - 1 ? 0 : current + 1);
      }, 5000);
      return () => clearInterval(slider);
    }
  }, [autoSlider, current, data.length, setCurrent]);

  const nextSlide = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return;
  }

  //console.log(autoSlider)

  return (
    <section className="slider">
      <div className="theshow">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />

        {data.map((slide, index) => (
          <div className={index === current ? "slide active" : "slide"} key={index}>
            {index === current && (
              <img src={slide.image} alt="travel" className="image" />
            )}
            {index === current && <h2>{slide.title}</h2>}
          </div>
        ))}

        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </div>

      <div className="slider-buttons">
        <button 
            onClick={() => setAutoSlider(true)}
            disabled={autoSlider}
            className={autoSlider ? "run-button disabled" : "run-button"}
        >
          Activar carrousel
        </button>

        <button 
            onClick={() => setAutoSlider(false)}
            disabled={!autoSlider}
            className={autoSlider ? "stop-button" : "stop-button disabled"}
        >
          Detener carrousel
        </button>
      </div>
    </section>
  );
};

export default Slider;
