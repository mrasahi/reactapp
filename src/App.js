import React, { Component } from 'react'
import Jumbotron from './components/Jumbotron'
import Card from './components/Card'
import Song from './components/Song'
import './App.css'

// let songs = [
//   {
//     title: '17',
//     artist: 'Youth Lagoon',
//     cover: 'https://upload.wikimedia.org/wikipedia/en/2/2f/The_Year_of_Hibernation.jpg'
//   },
//   {
//     title:  'Plot Twist',
//     artist: 'Niki',
//     cover: 'https://images.genius.com/f24ec379bff2f7111791ea75cf5c6a2f.1000x1000x1.jpg'
//   },
//   {
//     title: 'Where I Wont Be Found',
//     artist: 'Seven Lions',
//     cover: 'https://images.genius.com/3a676f16f9efcf4cd488d2866005ecf7.1000x1000x1.jpg'
//   },
//   {
//     title: 'Under Cover of Darkness',
//     artist: 'The Strokes',
//     cover: 'https://upload.wikimedia.org/wikipedia/en/8/8f/The_Strokes_-_Under_Cover_Of_Darkness.jpg'
//   },
// ]

// Standard

// const App = () => {
//   return (
//     <>
//         <Jumbotron />

//         <div className="container">
          
//           <Card />

//           { songs.map(songs => <Song song={songs} />)}

//         </div>
//     </>
//   )
// }



// Using Component for the cool way


let nums = [...Array(100).keys()]

// Includes Component for more utility
class App extends Component {

  // Defines variables 
  state = {
    count: 0,
  }

  // Functions here to be called below
  handleResetCount = () => {
    this.setState({ count: 0 })
  }

  handleAddValue = props => {
    this.setState({ count: this.state.count + parseInt(props.target.value)})
  }


  // Render is the standard return to render page stuff
  render() {
    return (
      <>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handleResetCount}>Reset</button>
        { nums.map(num => <button onClick={this.handleAddValue} value={num}>{num}</button>)}
      </>
    )
  }

}


export default App