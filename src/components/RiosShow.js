import { useState } from "react";
import Slider from "./Slider";

const RiosShow = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const [autoSlider, setAutoSlider] = useState(false); 

  return (
    <Slider
    data={slides}
    current={current}
    setCurrent={setCurrent}
    autoSlider={autoSlider}
    setAutoSlider={setAutoSlider}
  />
  )
}

export default RiosShow
