import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../../../routes";
import axios from "axios";

import "./SpecialNews.scss";
import moment from "moment";

export default function SpecialNews() {
  const [news, setNews] = useState({});
  const [current, setCurrent] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios.get(import.meta.env.VITE_DB_URL).then((res) => {
      setNews(res.data);
      const news = res.data.find((elem) => elem.id === id);
      setCurrent(news);
    });
  }, []);

  return (
    <div className="SpecialNews">
      {current ? (
        <div className="SpecialNews__content">
          <div className="SpecialNews__left">
            <h1>{current.title}</h1>
            <img src={current.image} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam voluptates quisquam illum recusandae repudiandae,
              voluptate, dolorem velit amet impedit ullam earum laudantium. Modi
              nesciunt officia recusandae aut ipsum eligendi optio! Dolore,
              consequuntur blanditiis. Voluptate maxime laborum iste ipsa
              quidem. Ipsam amet aut quam? Blanditiis, et accusamus perspiciatis
              quisquam a adipisci necessitatibus mollitia esse nam tenetur.{" "}
              <br />
              <br /> Id nostrum tempora unde harum quisquam repellat quos, quo
              quis eum illum quidem a sint mollitia amet quam dolore voluptatum
              impedit, ad enim distinctio numquam maiores! Obcaecati, quia?
              Iure, aperiam repellat deleniti quod, nisi doloremque obcaecati
              natus a ipsum tempora explicabo similique accusamus corrupti animi
              quae ipsa expedita, inventore debitis eum error consequatur!
              Doloremque, dolores suscipit? Cupiditate, expedita! Eum, hic
              adipisci repudiandae sunt eligendi delectus? Voluptates, laborum.
              Magni maiores consectetur alias, quia laboriosam voluptatem sequi
              eum saepe velit neque explicabo adipisci aliquid fuga reiciendis
              ipsum amet enim possimus ut ab esse fugiat minima voluptatum
              officiis! Nesciunt officia tenetur ipsa ducimus molestias?
              Possimus eligendi sed cumque pariatur recusandae dignissimos
              tempora est excepturi sit reprehenderit vel hic velit impedit
              dolor tempore dolore, voluptatum ad alias incidunt placeat eius
              molestias! Dolores possimus nostrum et necessitatibus perferendis.
              Ipsum voluptas, consectetur architecto iusto nemo a ipsam sapiente
              sint. Quisquam, tenetur.
            </p>
            <ul>
              <li>
                This is a unorder list. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Morbi sagittis, sem quis lacinia faucibus, orci
                ipsum gravida tortor, vel interdum mi sapien ut justo.
              </li>
              <li>
                Nulla varius consequat magna, id molestie ipsum volutpat quis.
                Suspendisse consectetur fringilla luctus.
              </li>
              <li>
                Fusce id mi diam, non ornare orci. Pellentesque ipsum erat,
                facilisis ut venenatis eu, sodales vel dolor.
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor,
              vel interdum mi sapien ut justo. Nulla varius consequat magna, id
              molestie ipsum volutpat quis. Suspendisse consectetur fringilla
              luctus. Fusce id mi diam, non ornare orci. Pellentesque ipsum
              erat, facilisis ut venenatis eu, sodales vel dolor.
            </p>
          </div>
          <div className="SpecialNews__right">
            <Link className="autumn">
              <img src={news[2].image} />
              <span>
                <p>{news[2].title}</p>
                <p>{moment(news[2].date).startOf("day").fromNow()}</p>
              </span>
            </Link>
            <Link className="autumn">
              <img src={news[3].image} />
              <span>
                <p>{news[3].title}</p>
                <p>{moment(news[3].date).startOf("day").fromNow()}</p>
              </span>
            </Link>
            <Link className="autumn">
              <img src={news[4].image} />
              <span>
                <p>{news[4].title}</p>
                <p>{moment(news[4].date).startOf("day").fromNow()}</p>
              </span>
            </Link>
            <Link className="autumn">
              <img src={news[5].image} />
              <span>
                <p>{news[5].title}</p>
                <p>{moment(news[5].date).startOf("day").fromNow()}</p>
              </span>
            </Link>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
