import React, { useState } from 'react';
import outdoor1 from "./outdoor1.avif"; // Replace with your actual image path
import outdoor2 from "./outdoor2.avif"; // Replace with your actual image path
import outdoor3 from "./outdoor3.avif"; // Replace with your actual image path
import outdoor4 from "./outdoor4.avif"; // Replace with your actual image path
import outdoor5 from "./outdoor5.avif"; // Replace with your actual image path
import outdoor6 from "./outdoor6.avif"; // Replace with your actual image path
import outdoor7 from "./outdoor7.avif"; // Replace with your actual image path
import outdoor8 from "./outdoor8.avif"; // Replace with your actual image path
import outdoor9 from "./outdoor9.avif"; // Replace with your actual image path
import outdoor10 from "./outdoor10.avif"; // Replace with your actual image path

const Ourdoor = () => { // Change the component name to start with an uppercase letter
  const [startIndex, setStartIndex] = useState(0);
  
  const musicImages = [
    outdoor1, outdoor2, outdoor3, outdoor4, outdoor5,
    outdoor6, outdoor7, outdoor8, outdoor9, outdoor10,
  ];
  

  const musicNames = [
    "Music 1", "Music 2", "Music 3", "Music 4", "Music 5",
    "Music 6", "Music 7", "Music 8", "Music 9", "Music 10",
  ];

  const imagesPerPage = 5;
  const endIndex = startIndex + imagesPerPage;

  const handleNext = () => {
    if (endIndex < musicImages.length) {
      setStartIndex(startIndex + imagesPerPage);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - imagesPerPage);
    }
  };

  return (
    <div>
      <h3 className="text11">Outdoor Events</h3>
      <h4 className="text2">Explore your favorite tracks</h4>

      <div className="carousel-container">
        <button onClick={handlePrevious} disabled={startIndex === 0} className="nav-button1">{'<'}</button>
        
        <div className="scroolpremiere">
          {musicImages.slice(startIndex, endIndex).map((src, index) => (
            <div key={index} className="image-container">
              <img src={src} alt={`Track ${startIndex + index + 1}`} className="carousel-image" />
              <p className="image-label">{musicNames[startIndex + index]}</p>
            </div>
          ))}
        </div>
        
        <button onClick={handleNext} disabled={endIndex >= musicImages.length} className="nav-button2">{'>'}</button>
      </div>
    </div>
  );
};

export default Ourdoor;  // Ensure the component is exported correctly
