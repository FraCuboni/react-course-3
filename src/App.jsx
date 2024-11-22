import { useState } from 'react'
import './App.css'

import Card from './components/Card'

function App() {

  return (
    <>
      <div className="container">

        <Card
          isVisited={true}
          title="Tokyo"
          description="TOKYOOOOOOOOOOOOOO"
          imgURL="https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></Card>

        <Card
          isVisited={true}
          title="Paris"
          description="PARISSSSSSSSSSS"
          imgURL="https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></Card>

        <Card
          isVisited={false}
          title="Berlin"
          description="BERLINNNNNNNNN"
          imgURL="https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></Card>

        <Card
          isVisited={true}
          title="London"
          description="LONDOOOOOOOOOOOON"
          imgURL="https://plus.unsplash.com/premium_photo-1671734045770-4b9e1a5e53a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></Card>

      </div>
    </>
  )
}

export default App
