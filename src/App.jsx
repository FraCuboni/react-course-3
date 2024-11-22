import { useState } from 'react'
import './App.css'

import Card from './components/Card'

function App() {

  const cities = [
    {
      id: 0,
      title: "Tokyo",
      description: "TOKYO DESCRIPTION",
      imgURL: "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false
    },
    {
      id: 1,
      title: "Milan",
      description: "MILAN DESCRIPTION",
      imgURL: "https://plus.unsplash.com/premium_photo-1661962887170-e7db3f307c7a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true
    },
    {
      id: 2,
      title: "Paris",
      description: "PARIS DESCRIPTION",
      imgURL: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false
    },
    {
      id: 3,
      title: "Turin",
      description: "TURIN DESCRIPTION",
      imgURL: "https://plus.unsplash.com/premium_photo-1690494958786-2ed9201fa251?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true
    },
  ];

  function handleClick() {
    alert('ciaone Giorgione');
  };

  function handleChange(event) {
    console.log(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log('form sent:', e)
  }


  return (
    <>
      <div className="container">

        <button onClick={handleClick} >Bottone Giorgione</button>

        <input onChange={handleChange} />

        {/* se uso button type submit si aggiorna la pagina */}
        <form onSubmit={handleSubmit}>
          <button type='submit'>mannala</button>
        </form>





        <h1 className='title'>tutte le città</h1>
        {cities.map((city) => (
          <Card
            // la key è necessaria per il map con passaggio props
            // è il corrispettivo di un ID
            key={city.id}
            title={city.title}
            description={city.description}
            imgURL={city.imgURL}
            isVisited={city.isVisited}
          >
          </Card>
        ))}


        {/* posso anche fare un filtro specifico nel front usando map */}
        <h1 className='title'>città visitate</h1>
        {cities
          .filter((city) => city.isVisited)
          .map((city) => (
            <Card
              // la key è necessaria per il map con passaggio props
              // è il corrispettivo di un ID
              key={city.id}
              title={city.title}
              description={city.description}
              imgURL={city.imgURL}
              isVisited={city.isVisited}
            >
            </Card>
          ))}
        <h1 className='title'>città non visitate</h1>
        {cities
          .filter((city) => !city.isVisited)
          .map((city) => (
            <Card
              // la key è necessaria per il map con passaggio props
              // è il corrispettivo di un ID
              key={city.id}
              title={city.title}
              description={city.description}
              imgURL={city.imgURL}
              isVisited={city.isVisited}
            >
            </Card>
          ))}


      </div>
    </>
  )
}

export default App
