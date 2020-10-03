import React, { useEffect, useState } from 'react';
import './App.css';
import LoadingScreen from './components/loading-screen/LoadingScreen.js'
import NavBar from './components/navigation/navbar/NavBar.js';
import Menu from './components/menu/Menu.js';
import Home from './components/home/Home.js';
import Episodes from './components/episodes/Episodes.js';
import AboutMe from './components/about-me/AboutMe.js';
import Books from './components/books/Books.js';
import Contact from './components/contact/Contact.js';

// hiscon.json is used as a fallback in case the spotify api is down.
import hiscon from './hiscon.json';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [podcastData, setPodcastData] = useState();
  const [flagShowMenu, setFlagShowMenu] = useState(false);
  const toggleMenu = () => {
    setFlagShowMenu(!flagShowMenu);
    console.log(JSON.stringify(podcastData.episodes.items))
  }
  
  useEffect(() => {
    if (isLoading === true ) {
      fetch("https://lahistoriadelaconcha.com.ar/spoti/hiscon.json")
        .then(res => res.json())
        .then(res => {
          setPodcastData(res);
          setIsLoading(false);
        })
        .catch((e) => {
          setPodcastData(hiscon);
          console.log("Using static copy of hiscon.json.")
          setIsLoading(false);
        })
      
    }
  }, [isLoading]);

  if(isLoading === true) {return <LoadingScreen isLoading={isLoading} />}

  return (
    <div className="app-container">
      <NavBar toggleMenu={toggleMenu} />
      <Menu flagShow={flagShowMenu} toggleMenu={toggleMenu} />
      <Home podcastData={podcastData} />
      <Episodes podcastData={podcastData} />
      <AboutMe />
      <Books />
      <Contact />
    </div>
  );
}

export default App;
