import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SpecialNews.scss";
import axios from "axios";
import moment from "moment";

export default function SpecialNews() {
  const { state } = useLocation();
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL).then((res) => setInfo(res.data));
  }, []);

  return (
    <div className="SpecialNews">
      <div>
        <h1>{state.title}</h1>
        <img src={state.poster} alt="" />
        <p>{state.desc}</p>
      </div>
      <div className="SpecialNews__links">
        {info.map((elem) => {
          return (
            <Link state={elem} key={elem.id}>
              <img src={elem.poster} />
              <div>
                <h2>{elem.title}</h2>
                <p>{moment(elem.date).fromNow()}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
