import React from 'react'
import Jumbotron from './components/Jumbotron'
import Card from './components/Card'
import './App.css'


const App = () => {
  return (
    <>
        <Jumbotron />

        <div className="container">
          
          <Card />

        </div>
    </>
  )
}

export default App