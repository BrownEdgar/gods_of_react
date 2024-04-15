import React, { useEffect, useReducer } from "react";
import axios from "axios";
import Slider from "react-slick";


import "./newsSlider.scss";
import moment from "moment";
import reducer from "./reducer";




export default function newsSlider() {
  const [state, dispatch] = useReducer(reducer, []);


    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL).then((res) =>
      dispatch({ type: "slider", payload: res.data })
    );
  }, []);



  return (
    <div className="newsSlider">
       <Slider {...settings}>
       {state.map((elem) => {
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
