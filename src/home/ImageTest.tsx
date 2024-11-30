import React, { useState, useEffect } from 'react';

interface ImageComponentProps {
    imageName: string;
    height: number;
    width: number;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ imageName, height, width }) => {
    const [imageUrl, setImageUrl] = useState('');

    const imageStyle = {
        width: `${width}px`, // Set width dynamically
        height: `${height}px`,
      };

    useEffect(() => {
        // Replace with your actual API endpoint
        fetch(`http://localhost:8080/api/images/${imageName}`)
            .then((response) => response.blob())  // Treat the response as a Blob
            .then((imageBlob) => {
                const imageObjectUrl = URL.createObjectURL(imageBlob); // Convert the Blob into an object URL
                setImageUrl(imageObjectUrl);  // Set the image URL to be used in <img> tag
            })
            .catch((error) => {
                console.error('Error fetching image:', error);
            });
    }, []); // Runs when the fileName prop changes

    return (
        <div>
            {imageUrl ? (
                <img style={imageStyle} src={imageUrl} alt="Fetched from API" />
            ) : (
                <p>Loading image...</p>
            )}
        </div>
    );
}

export default ImageComponent;
