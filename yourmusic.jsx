import React, { useState } from 'react';
import music1 from "./music1.avif"; // Replace with your actual image path
import music2 from "./music2.avif"; // Replace with your actual image path
import music3 from "./music3.avif"; // Replace with your actual image path
import music4 from "./music4.avif"; // Replace with your actual image path
import music5 from "./music5.avif"; // Replace with your actual image path
import music6 from "./music6.avif"; // Replace with your actual image path
import music7 from "./music7.avif"; // Replace with your actual image path
import music8 from "./music8.avif"; // Replace with your actual image path
import music9 from "./music9.avif"; // Replace with your actual image path
import music10 from "./music10.avif"; // Replace with your actual image path

const YourMusic = () => {
  const [startIndex, setStartIndex] = useState(0);
  
  const musicImages = [
    music1, music2, music3, music4, music5,
    music6, music7, music8, music9, music10,
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
      <h3 className="text11">Your Music Studio</h3>
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

export default YourMusic;  // Make sure the export matches the component name
