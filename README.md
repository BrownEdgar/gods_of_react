{
        state.map(elem =>{
          return(
            <article key ={elem.id}>
              <Link to={`${elem.id}`} state={elem}>
              <img src={elem.poster}/>
              <h2>{elem.title}</h2>
              <p>{moment(elem.date).format('Do MMM')}</p>
              </Link>
            </article>
          )
        })
      }