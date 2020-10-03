import React from 'react';
import './Episodes.css';
import EpisodeCard from './episode-card/EpisodeCard.js';

function Episodes(props) {

  const PODCAST_DATA = props.podcastData;
  const EPISODES = PODCAST_DATA.episodes.items;

  const podcast_cards = EPISODES.map((episode, i, episodes) => {
    return (
      <EpisodeCard
        key={episodes[episodes.length-i-1].id}
        episodeData={episodes[episodes.length-i-1]} />
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