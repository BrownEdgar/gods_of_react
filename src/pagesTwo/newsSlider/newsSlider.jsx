import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";

import './newsSlider.scss'

export default function newsSlider() {
  const [slider, setSlider] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL).then((res) => setSlider(res.data));
  }, []);

  return (
    <div className="newsSlider">
      <Slider {...settings}>
        {slider.map((elem) => {
          return (
            <div className="newsSlider__content" key={elem.id}>
              <img src={elem.image} />
              <p>{elem.title}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
