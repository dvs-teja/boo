import React, { useState } from 'react';
import premieremain from './premieremain.avif';
import premiere1 from './premiere1.avif';
import premiere2 from './premiere2.avif';
import premiere3 from './premiere3.avif';
import premiere4 from './premiere4.avif';
import premiere5 from './premiere5.avif';
import premiere6 from './premiere6.avif';
import premiere7 from './premiere7.avif';
import premiere8 from './premiere8.avif';
import premiere9 from './premiere9.avif';
import premiere10 from './premiere10.avif';

const Premiere = () => {
  const [startIndex, setStartIndex] = useState(0);
  
  const premiereImages = [
    premiere1, premiere2, premiere3, premiere4, premiere5,
    premiere6, premiere7, premiere8, premiere9, premiere10,
  ];

  const imagesPerPage = 5;
  const endIndex = startIndex + imagesPerPage;

  const handleNext = () => {
    if (endIndex < premiereImages.length) {
      setStartIndex(startIndex + imagesPerPage);
    }
  };
  const premiereNames = [
    "Premiere 1", "Premiere 2", "Premiere 3", "Premiere 4", "Premiere 5",
    "Premiere 6", "Premiere 7", "Premiere 8", "Premiere 9", "Premiere 10",
  ];

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - imagesPerPage);
    }
  };

  return (
    <div className="premierediv">
      <img src={premieremain} alt="premiere" className="premieremainimg" />
      <h3 className="text1">Premieres</h3>
      <h4 className="text2">Brand new releases every Friday</h4>

      <div className="carousel-container">
        <button onClick={handlePrevious} disabled={startIndex === 0} className="nav-button1">{'<'}</button>
        
        <div className="scroolpremiere">
          {premiereImages.slice(startIndex, endIndex).map((src, index) => (
            <div key={index} className="image-container">
              <img src={src} alt={`Premiere ${startIndex + index + 1}`} className="carousel-image" />
              <p className="image-label">{premiereNames[startIndex + index]}</p>
            </div>
          ))}
        </div>
        
        <button onClick={handleNext} disabled={endIndex >= premiereImages.length} className="nav-button2">{'>'}</button>
      </div>
    </div>
  );
};

export default Premiere;
