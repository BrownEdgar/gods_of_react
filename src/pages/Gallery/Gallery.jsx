import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Gallery.scss";
import { Link, useParams } from "react-router-dom";

export default function Gallery() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/`).then((res) =>
      setFiles(res.data)
    );
  }, []);

  return (
    <div className="Gallery">
      <h1>Welcome to our products </h1>
      <div className="Products">
        {files.map((elem) => {
          return (
            <div className="Products__cont" key={elem.id}>
              <Link to={`${elem.id}`}>
                <h2>{elem.title}</h2>
                <img src={elem.image} alt="" />
           
             
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
