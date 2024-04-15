import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ROUTES from "../../routes";
import "./Post.scss";

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
    return (
      <>
        <h1 className="error">404 POST NOT FOUND</h1>
        <Link to={ROUTES.BLOG} className="Link">
          All posts
        </Link>
      </>
    );
  }

  return (
    <div className="Post">
      <h1>Welcome to the post N {id}</h1>
      <div className="Post__content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <Link to={ROUTES.BLOG} className="Link">
        All posts
      </Link>
    </div>
  );
}
