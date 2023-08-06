import { useEffect, useState } from "react";
import "./App.css";
import LoadingScreen from "./components/loading-screen/LoadingScreen";
import NavBar from "./components/navigation/navbar/NavBar";
import Home from "./components/home/Home";
import Episodes from "./components/episodes/Episodes";
import AboutMe from "./components/about-me/AboutMe";
import Books from "./components/books/Books";
import Contact from "./components/contact/Contact";

// hiscon.json is used as a fallback in case the spotify api is down.
import hiscon from "./hiscon.json";
import Show from "./types/spotify/Show";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [podcastData, setPodcastData] = useState<Show>(
        hiscon as unknown as Show
    );

    useEffect(() => {
        if (isLoading === true) {
            fetch("/spoti/hiscon.json")
                .then((res) => res.json())
                .then((res) => {
                    setPodcastData(res);
                })
                .catch((e) => {
                    console.error("Could not fetch live data.");
                    console.error(e);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [isLoading]);

    if (isLoading === true) {
        return <LoadingScreen isLoading={isLoading} />;
    }

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
