import React, { useEffect, useState } from 'react';
import './App.css';
import LoadingScreen from './components/loading-screen/LoadingScreen.js'
import NavBar from './components/navigation/navbar/NavBar.js';
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
          console.error("Could not fetch live data. Using cache as a fallback.")
          setIsLoading(false);
        })
      
    }
  }, [isLoading]);

  if(isLoading === true) {return <LoadingScreen isLoading={isLoading} />}

  return (
    <div className="app-container">
      <NavBar />
      <Home podcastData={podcastData} />
      <Episodes podcastData={podcastData} />
      <AboutMe />
      <Books />
      <Contact />
    </div>
  );
}

export default App;
