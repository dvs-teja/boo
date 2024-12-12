import React, { useState } from 'react';
import flex1 from './flex1.avif';
import flex2 from './flex2.avif';
import flex3 from './flex3.avif';
import flex4 from './flex4.avif';
import flex5 from './flex5.avif';
import flex6 from './flex6.avif';
import flex7 from './flex7.avif';
import flex8 from './flex8.avif';
import flex9 from './flex9.avif';
import flex10 from './flex10.avif';

const allMovies = [
  flex1, flex2, flex3, flex4, flex5,
  flex6, flex7, flex8, flex9, flex10,
];

const MoviesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSet = () => {
    if (currentIndex < Math.ceil(allMovies.length / 5) - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevSet = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  // Get the current set of movies to display
  const movieList = allMovies.slice(currentIndex * 5, currentIndex * 5 + 5);

  return (
    <div className="movie-section">
  <div className="header">
    <h1 className='recomended'>Recommended Movies</h1>
    <h5 className='view-all'>See All</h5>
    <h6 className='view-all-arrow'>&gt;</h6>
  </div>
  <div className="movie-container" style={{ position: 'relative' }}>
    <div className="movie-slider" style={{ display: 'flex' }}>
      {movieList.map((movie, idx) => (
        <div key={idx} className={`movie-card`}>
          <img src={movie} alt={`Movie ${idx + 1}`} className='movie-image' />
          <h2 className='movie-title'>Movie Title {currentIndex * 5 + idx + 1}</h2>
          <h4 className='movie-genre'>Genre/Category</h4>
        </div>
      ))}
    </div>

    {/* Navigation Buttons */}
    <button className="button1class" style={{ left: '10px' }} onClick={handlePrevSet}>&lt;</button>
    <button className="button2clas" style={{ right: '10px' }} onClick={handleNextSet}>&gt;</button>
  </div>
</div>

  );
};

export default MoviesSection;
