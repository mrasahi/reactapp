import React, { Component } from 'react'
import Movie from './components/Movie'

let nums = [...Array(101).keys()]

// Includes Component for more utility
class App extends Component {

  // Defines variables 
  state = {
    count: 0,
    title: '',
    plot: '',
    poster: '',
    movie: '',
    movies: []

  }

  // Functions here to be called below
  handleResetCount = () => {
    this.setState({ count: 0 })
  }

  handleAddValue = props => {
    this.setState({ count: this.state.count + parseInt(props.target.value) })
  }

  // This boiler plate function makes a state of the item as its name
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleAddMovie = event => {
    event.preventDefault()
    let movies = JSON.parse(JSON.stringify(this.state.movies))
    movies.push({
      title: this.state.title,
      plot: this.state.plot,
      poster: this.state.poster
    })
    this.setState({ movies })
  }


  // Render is the standard return to render page stuff
  render() {
    return (
      <>

        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handleResetCount}>Reset</button>
        { nums.map(num => <button onClick={this.handleAddValue} value={num}>{num}</button>)}
        <hr />


        <h1>Movie App</h1>
        <form>
          <label htmlFor="item">Movie title:</label>
          <input
            type="text"
            name="title"
            value={this.state.item}
            onChange={this.handleInputChange} />

          <label htmlFor="plot">Movie plot:</label>
          <input
            type="text"
            name="plot"
            value={this.state.item}
            onChange={this.handleInputChange} />

          <label htmlFor="poster">Movie Poster:</label>
          <input
            type="text"
            name="poster"
            value={this.state.item}
            onChange={this.handleInputChange} />

          <button onClick={this.handleAddMovie}>Add Movie</button>

        </form>

        { this.state.movies.map(movies => <Movie movie={movies} />)}
      </>
    )
  }

}


export default App