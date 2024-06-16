import React from 'react';

const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.length === 0 ? (
        <p className="col-span-3 text-center text-gray-500">No images match your search.</p>
      ) : (
        images.map((image) => (
          <div key={image.link} className="relative aspect-w-1 aspect-h-1">
            <a href={image.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <img src={image.media.m} alt={image.title} className="object-cover w-full h-full rounded-lg" />
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default ImageGrid;
