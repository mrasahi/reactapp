import React from 'react'
import './Card.css'

const makoto = {
    name: "Makoto Asahi",
    email: "makoto@email.com",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore sint sed eveniet, ipsa dolore et tenetur mollitia quod. Incidunt voluptatem inventore quam ducimus illum sit repellendus impedit voluptatibus eius itaque!"
}

const Card = () => {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{makoto.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{makoto.email}</h6>
                <p class="card-text">{makoto.bio}</p>
            </div>
        </div>
    )
}

export default Card