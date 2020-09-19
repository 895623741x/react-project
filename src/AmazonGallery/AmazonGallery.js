import React from 'react';
import Gallery from 'react-amazon-gallery';
import image1 from '../assets/download.jpg';
import image2 from '../assets/on_protein_background.jpg';
import image3 from '../assets/on_protein_background2.jpg';

let images = [image1, image2, image3]

function AmazonGallery() {
    
    return (
        <div className='amazonGallery'>
            <Gallery images={images}
                ></Gallery>
        </div>
    )
}

export default AmazonGallery
