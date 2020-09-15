import React from 'react'

const Movie = props => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top img-fluid" src={props.movie.poster} alt={props.movie.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.movie.title}</h5>
                    <p className="card-text">{props.movie.plot}</p>
                </div>
        </div>
    )
}

export default Movie