import React from 'react';
import bookMyShowLogo from './bookmyshowlogo.png'; 
import searchIcon from './search.png'; 
import downarrow from './down-arrow.png';
import menu from './menu.png';
import Navbar1 from './navbar1';
import Navbar2 from './navbar2';
import MovieRecommendations from './MovieRecommendations';
import scrool1 from './scrool1.avif';
import scrool2 from './scrool2.avif'; 
import flex1 from './flex1.avif';
import flex2 from './flex2.avif';
import flex3 from './flex3.avif';
import flex4 from './flex4.avif';
import flex5 from './flex5.avif';
import ImageSlider from './imageslider';
import Endlessentire from './Endlessentire';
import Events from "./Events"; 
import Premiere from './premiere'; 
import Ourdoor from './ourdoor';  // Import 'Ourdoor' with the correct case (lowercase 'o' in file name)
import Totaldown from './totaldown'; // Import Totaldown component
import Music from './yourmusic'; // Import the Music component
import './App.css';
import Foooter from './footer';
const App = () => {
  const images = [scrool1, scrool2];
  const movieImages = [flex1, flex2, flex3, flex4, flex5];

  return (
    <div className='body'>
      <Navbar1 />
      <Navbar2 />
      <ImageSlider images={images} />
      <MovieRecommendations />
      <Endlessentire />
      <Events />
      <Premiere />
      <Music />
      <Ourdoor />  {/* Correct usage of 'Ourdoor' with a capital 'O' */}
      <Foooter/>
      </div>
  );
}

export default App;
