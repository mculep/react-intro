import React from 'react'

function PhotoCard(props) {
    console.log(props)
    return (
        <div className="card-frame">
            <h6>{props.title}</h6>
            <p>{props.description}</p>
            <img src={props.url} />
        </div>
        
    );
}

export default PhotoCard;