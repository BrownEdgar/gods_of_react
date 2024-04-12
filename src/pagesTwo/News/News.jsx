import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { ADD_NEWS } from "./actionTypes";
import reducer from "./reducer";

import "./News.scss";
import moment from "moment";
import { Link } from "react-router-dom";

export default function News() {
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL).then((res) =>
      dispatch({ type: ADD_NEWS, payload: res.data })
    );
  }, []);
  return (
    <div className="News">
      {state.map((elem) => {
        return (
          <article key={elem.id}>
            <Link to={`/news/${elem.id}`} state={state}>
              <img src={elem.image} />
            </Link>
            <p className="News__title">{elem.title}</p>
            <p className="News__date">
              {moment(elem.date).startOf("day").fromNow()}
            </p>
          </article>
        );
      })}
    </div>
  );
}
