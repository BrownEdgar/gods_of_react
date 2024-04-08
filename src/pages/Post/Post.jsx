import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Post.scss";
import axios from "axios";
import ROUTES from "../../../routes";

export default function Post() {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => setHasError(true));
  }, []);

  if (hasError) {
    return(
      <>
      <h1>404| post not found</h1>
      <Link to={ROUTES.BLOG} className="button"></Link>
      </>
    ) 
  }

  return (
    <div className="Post">
      <h1>welcome in the post N {id}</h1>
      <div className="Post__content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <Link to={ROUTES.BLOG} className="button">
        All posts
      </Link>
    </div>
  );
}
