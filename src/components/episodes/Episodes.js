import React from 'react';
import './Episodes.css';
import EpisodeCard from './episode-card/EpisodeCard.js';

function Episodes(props) {

  const PODCAST_DATA = props.podcastData;
  const EPISODES = PODCAST_DATA.episodes.items;

  const podcast_cards = EPISODES.reverse().map((episode_data) => {
    return (
      <EpisodeCard
        key={episode_data.id}
        episodeData={episode_data} />
    );
  });

  return (
    < div id="episodes" className="episodes section" >
      <div className="section-title">Episodios</div>
      <div className="episode-cards">
          {podcast_cards}
      </div>
    </div >
  );
}

export default Episodes;