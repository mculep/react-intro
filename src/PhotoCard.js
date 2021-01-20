import React from 'react'

function PhotoCard(props) {
    console.log(props)
    return (
        <div className="card-frame">
            <img src={props.url} />
        </div>
    );
}

export default PhotoCard;