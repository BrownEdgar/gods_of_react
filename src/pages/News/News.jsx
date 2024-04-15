import React, { useReducer, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { ADD_BLOGS } from "./actionTypes";
import reducer from "./reducer";
import { Link } from "react-router-dom";
import ROUTES from "../../routes";
import Slider from "react-slick";
import "./News.scss";

export default function News() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [state, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL).then((res) =>
      dispatch({ type: ADD_BLOGS, payload: res.data })
    );
  }, []);

  return (
    <div className="News">
      <Slider>
        {state.map((elem) => {
          return (
            <article>
              <Link to={`${elem.id}`} state={elem}>
                <img src={elem.poster} />
              </Link>

              <h2>{elem.title}</h2>
              <p>{moment(elem.date).format("MMMM-DD-YYYY")}</p>
            </article>
          );
        })}
      </Slider>
    </div>
  );
}
