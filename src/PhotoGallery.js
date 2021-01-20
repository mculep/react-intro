import React from 'react'
import PhotoCard from './PhotoCard'

const data = [
    {
        title: "Can't we have just a salad?",
        description: "Salad",
        url: "/one.jpeg"
    },
    {
        title: "Can't we have just a salad?",
        description: "Salad",
        url: "/two.jpeg"
    },
    {
        title: "Can't we have just a salad?",
        description: "Salad",
        url: "/three.jpeg"
    }
];

function PhotoGallery() {
    return (
        <>
        <h2>The Gallery</h2>
        <div className="gallery">
            {
                data.map(i => <PhotoCard 
                                title={i.title}
                                url={i.url} />)
            }
        </div>
        </>
    );
}

export default PhotoGallery;