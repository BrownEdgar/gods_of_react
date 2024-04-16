import React, { useEffect, useState } from "react";
import "./Blog.scss";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then((res) =>
      setPosts(res.data)
    );
  }, []);
  return (
    <div className="Blog">
      <h2>Posts</h2>
      <div className="Posts">
        {posts.map((elem) => {
          return (
            <Link key={elem.id} to={`${elem.id}`}>
              {elem.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
