import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { categories } from "../../utils/constants";

import "./Products.scss";

export default function Products() {
  const [product, setProduct] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [timerId, setTimerId] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    const filtering = (product, value) => {
      if (value.trim() === "") setFiltered(product);
      setFiltered(
        product.filter((elem) =>
          elem.title.toLowerCase().includes(value.toLowerCase())
        )
      );
    };
    filtering(product, searchValue);
  }, [searchValue]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) => {
      setProduct(res.data);
      setFiltered(res.data);
    });
  }, []);

  useEffect(() => {
    if (currentCategory === "all") {
      setFiltered(product);
    } else {
      setFiltered(product.filter((elem) => elem.category === currentCategory))
    }
  }, [currentCategory]);


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    if (timerId !== null) {
      clearTimeout(timerId);
    }

    const timer = setTimeout(() => {
      setSearchValue(e.target.value);
      setTimerId(timer);
    }, 500);
  };
  const selectChange = (e) => {
    setCurrentCategory(e.target.value);
  };

  return (
    <div className="Products">
      <h2>Products</h2>
      <select
        name="categories"
        id="categories"
        defaultValue="all"
        onChange={selectChange}
      >
        <option value="all">All</option>
        {categories.map((elem) => {
          return (
            <option value={elem} key={elem}>
              {elem}
            </option>
          );
        })}
      </select>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          placeholder="Search"
          onChange={handleChange}
        />
      </form>

      <div className="Products__content">
        {filtered.map((elem) => {
          return (
            <Link key={elem.id} to={`${elem.id}`}>
              {<img src={elem.image} />}
              {elem.id}.{elem.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
