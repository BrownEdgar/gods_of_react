import React, { useState, useEffect } from 'react';

import './App.scss'
import MyLoader from '../../components/Loaders/MyLoader';
import classNames from 'classnames';

export default function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(setloading, 1500, false);
  }, [])

  return (
    <div className={classNames("App")}>
      {loading ? <MyLoader /> : null}
      <div className={classNames(null, {
        "App-blur": loading
      })}>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci enim veritatis iusto, architecto ab consectetur aliquid dicta hic, totam quidem ullam fugiat exercitationem saepe ut obcaecati! Voluptates, nobis a autem repudiandae odit mollitia consequatur voluptatum pariatur necessitatibus, omnis repellendus impedit suscipit exercitationem ex recusandae voluptate perspiciatis optio enim molestiae voluptatibus, temporibus ut itaque vel. Mollitia nobis praesentium a veniam. Ex unde assumenda quidem quam recusandae nisi eum delectus quo nobis provident perspiciatis tenetur impedit dolorum debitis, illo reiciendis pariatur dolorem fugiat. Laboriosam nobis sapiente, provident ducimus eius fugiat quis ea reiciendis ad animi, at qui non eveniet architecto exercitationem ratione illo? Doloribus, animi commodi et laborum exercitationem culpa modi quos perspiciatis. Ex atque omnis suscipit nam ea voluptate dolores velit, rerum eligendi culpa fuga tenetur odit in recusandae explicabo eveniet dolor reiciendis laudantium quaerat natus maxime. Tenetur voluptas ex obcaecati quam error! Ipsam aliquid quasi, sint commodi iure dolorem.</p>
      </div>

    </div>
  )
}
