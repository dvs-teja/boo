import React, { useEffect, useState, useRef } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleMouseDown = (e) => {
    startX.current = e.clientX || e.touches[0].clientX;
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches[0].clientX;
    const moveX = currentX - startX.current;
    setDragOffset(moveX);
  };

  const handleMouseUp = () => {
    if (dragOffset > 100) {
      prevImage();
    } else if (dragOffset < -100) {
      nextImage();
    }
    setDragOffset(0);
    setIsDragging(false);
  };

  return (
    <div className='section'>
      <div
        ref={containerRef}
        className='scroll-container'
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: `translateX(${dragOffset + (-currentIndex * 1)}%)`, // Fixed syntax here
          transition: isDragging ? 'none' : 'transform 1s ease',
          width: '100%',
          position: 'relative'
        }}
      >
        <img
          className='imgg2'
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`} // Fixed template string syntax
          style={{ width: '70%', height: '296.8px', borderRadius: '10px' }}
        />
        <img
          className='imgg1'
          src={images[(currentIndex + 1) % images.length]}
          alt={`Image ${(currentIndex + 1) % images.length + 1}`} // Fixed template string syntax
          style={{ width: '85%', height: '296.8px', borderRadius: '10px', marginLeft: '20px', marginRight: '20px' }}
        />
        <img
          className='imgg2'
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`} // Fixed template string syntax
          style={{ width: '70%', height: '296.8px', borderRadius: '10px' }}
        />
      </div>
      <div className="dots">
        {images.map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`dot ${currentIndex === dotIndex ? 'active' : ''}`} // Fixed template string syntax
            onClick={() => setCurrentIndex(dotIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
