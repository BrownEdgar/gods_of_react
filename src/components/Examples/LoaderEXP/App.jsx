import React, { useState, useEffect } from 'react';
import './App.scss'
import Myloader from '../../Loaders/Myloader';

export default function App() {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(setLoading, 1500, false);
  }, [])
  


  return (
    <div className='App'>
      {loading ? <Myloader /> : null}
      <h1>Loading...</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ut soluta laboriosam quisquam facere sint harum quasi. Repudiandae numquam debitis, maiores ducimus ab rem cupiditate necessitatibus tempore eos excepturi adipisci. Sequi ipsa quisquam perspiciatis expedita. Temporibus accusantium, velit consectetur corrupti beatae minima possimus error praesentium unde. Doloremque pariatur iste ipsam? Facilis maxime consectetur nulla reprehenderit maiores. Autem esse, nesciunt nam soluta sit non. Cum unde eum voluptas! Adipisci, harum velit animi labore consequuntur omnis autem veritatis accusamus quo! At molestiae quidem ad dignissimos, quis eaque praesentium sed deserunt ipsum. Nisi accusamus alias, eligendi sed, fuga fugit recusandae illum magni sint odit laudantium? Necessitatibus atque porro exercitationem expedita. Velit placeat, fugit modi asperiores nostrum accusamus maxime voluptatibus unde dolores possimus quo, facere ipsum animi officiis corporis pariatur sunt! Ut expedita repudiandae placeat nulla cum laborum iure, ratione culpa asperiores laudantium aut consequatur reiciendis aliquam autem quas dolores! Molestiae blanditiis magni quis.</p>

    </div>
  )
}
