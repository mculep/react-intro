import React from 'react'
import PhotoCard from './PhotoCard'

const data = [
    {
        title: "Can't we have just a salad?",
        description: "Salad",
        url: "/one.jpeg"
    },
    {
        title: "How did you find me in the wilderness?",
        description: "Wilderness",
        url: "/two.jpeg"
    },
    {
        title: "We are ready to go pro",
        description: "Lords cheeps",
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
                                description={i.description}
                                url={i.url} />)
            }
        </div>
        </>
    );
}

export default PhotoGallery;