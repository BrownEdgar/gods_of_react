import React, { useState, useEffect } from 'react';
import "./App.scss"
import MyLoader from '../../components/Loaders/MyLoader';
import classNames from 'classnames';

export default function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(setLoading, 1500, false)
    }, [])
    

  return (
<div className = {classNames("App")}>
        {loading ? <MyLoader/> : null}
        <div className = {classNames(null, {
        "App-blur": loading
        })}>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Quos ducimus sed itaque adipisci sapiente suscipit illum corrupti? 
        Repudiandae, aspernatur nam? Rerum voluptatem quae voluptatum nemo, 
        facere sapiente inventore velit quisquam qui sit saepe animi, ratione 
        quas accusamus. At perferendis consequuntur eum quaerat eveniet qui 
        rerum in ipsa minima repellendus. Sapiente iste nobis nesciunt ducimus 
        laboriosam veniam sequi ex neque ut dolorum porro quos expedita vel 
        possimus fugiat impedit aperiam, reprehenderit voluptate quidem, 
        architecto quibusdam hic aspernatur nulla optio. Provident fugit 
        deserunt nihil aspernatur explicabo modi. Accusantium exercitationem 
        voluptatibus nobis omnis cupiditate veniam mollitia, nam vitae. Ut 
        laudantium nulla adipisci voluptatum aut delectus rem maxime eum vero 
        corporis numquam commodi eveniet magnam, perspiciatis doloremque. Delectus 
        consequuntur totam repellendus, aliquam magni, incidunt, nihil alias sed 
        nisi modi cum! Tenetur esse provident, totam libero tempore alias, eum 
        velit eos dolorem perspiciatis ea cum iste reiciendis rem, laboriosam minus 
        mollitia officia quas similique! Illum?
        </p>
        </div>
    </div>
  )
}
