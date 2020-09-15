import React from 'react'

const Song = props => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={props.song.cover} alt={props.song.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.song.title}</h5>
                    <p className="card-text">{props.song.artist}</p>
                </div>
        </div>
    )
}

export default Song