import Show from "../../types/spotify/Show";
import "./Episodes.css";
import EpisodeCard from "./episode-card/EpisodeCard";

function Episodes(props: { podcastData: Show }) {
    const EPISODES = props.podcastData.episodes.items;
    EPISODES.reverse();

    const podcast_cards = EPISODES.map((episode) => {
        return <EpisodeCard key={episode.id} episodeData={episode} />;
    });

    return (
        <div id="episodes" className="episodes section">
            <div className="section-title">Episodios</div>
            <div className="episode-cards">{podcast_cards}</div>
        </div>
    );
}

export default Episodes;
