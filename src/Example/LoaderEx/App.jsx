import React, { useState, useEffect } from "react";
import "./App.scss";
import MyLoader from "../../components/Loaders/MyLoader";
import classNames from "classnames";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(setLoading, 1500, false);
  }, []);

  return (
    <div className='App'>
      {loading ? <MyLoader /> : ""}
     
      <div className={classNames(null, {
          "App-blur": loading,
        })}>

        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur
          iure voluptate. Deserunt corporis quae fuga aut! Quisquam rem sapiente
          ducimus eos ullam iste dicta alias amet temporibus est dolore quasi
          dolor, quo, itaque magnam maxime distinctio quos dignissimos
          perspiciatis! Rerum aperiam atque quas labore in aliquid! Earum a
          explicabo laudantium magnam corporis animi fugit enim dolor tenetur
          facere, omnis quia, atque blanditiis ex accusamus in necessitatibus
          quidem? Cum vel molestias aperiam eum consequuntur debitis est
          recusandae quas error enim, explicabo minima laborum delectus maiores
          neque architecto illo vitae earum vero cupiditate odio, reprehenderit
          et. Consectetur distinctio sint, veniam quas deserunt vel natus
          provident commodi quis beatae minus nemo impedit iste quam dolorem
          consequatur quibusdam neque porro delectus totam voluptatum
          voluptates. Accusantium ab distinctio magnam facere repellendus. In
          voluptate alias, officiis harum quia sed sapiente repellendus placeat
          pariatur delectus, corporis vitae excepturi, corrupti quasi. Quas
          ipsum quisquam excepturi laborum voluptatem!
        </p>
      </div>
    </div>
  );
}
