import React, { useState, useRef, useEffect } from 'react';
import './EpisodeCard.css';
// import heart from '../../../images/heart.svg';
// import speech_bubble from '../../../images/speech-bubble.svg';

function EpisodeCard(props) {

  const [flagExpandDesc, setFlagExpandDesc] = useState(false);

  const EPISODE_DATA = props.episodeData;

  const id = EPISODE_DATA.id;
  const url = EPISODE_DATA.external_urls.spotify;
  const embed_url = "https://open.spotify.com/embed-podcast/episode/" + id;

  const release_date = EPISODE_DATA.release_date;
  const release_year = parseInt(release_date.substring(0, 4));
  const release_month = parseInt(release_date.substring(5, 7));
  const release_day = parseInt(release_date.substring(8, 10));

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"];

  const formatted_release_date = release_day + " de " + months[release_month - 1] + ", " + release_year;

  const name = EPISODE_DATA.name;
  const description = EPISODE_DATA.description;

  const desc_elem_ref = useRef(null);
  const desc_button_ref = useRef(null);

  const ShowMoreButtonContent = () => {
    if ( flagExpandDesc === false ) {
      return <span>...<br />Mostrar más.</span>
    } else {
      return <span>Mostrar menos.</span>
    }
  }
  
  useEffect(() => {
    const desc = desc_elem_ref.current;
    if ( flagExpandDesc === true ) {
      const sectionHeight = desc.scrollHeight;
      desc.style.maxHeight = sectionHeight + "px";
    } else {
      desc.style.removeProperty("max-height");
    }
  })

  const toggle_description = () => {

    setFlagExpandDesc(!flagExpandDesc);

    // if (desc.classList.contains(expanded_class)) {
    //   desc.classList.remove(expanded_class);
    //   desc.style.removeProperty("max-height");
    //   button_elem.innerHTML = "...</br>Mostrar más.";

    // } else {
    //   desc.classList.add(expanded_class);
    //   desc.style.maxHeight = sectionHeight + "px";
    //   button_elem.innerHTML = "Mostrar menos.";
    // }

  };

  return (
    <div className="episode-card">
      <div className="podcast-player">
        <iframe
          title={"podcast-player-episode-" + id}
          src={embed_url}
          width="100%"
          height="232"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"></iframe>
      </div>
      <div className="episode-information">
        <div className="release-date">{formatted_release_date}</div>
        <div className="title"><a href={url}>{name}</a></div>
        <div ref={desc_elem_ref} className={"description" + (flagExpandDesc ? " expanded" : "")}>
          {description}
        </div>
        <div ref={desc_button_ref} onClick={toggle_description} className="show-more">
            <ShowMoreButtonContent />
        </div>
      </div>
      {/* <div className="show_info d-flex flex-row align-items-start justify-content-start">
                <div className="show_fav d-flex flex-row align-items-center justify-content-start">
                  <div className="show_fav_icon show_info_icon"><img className="svg" src={heart} alt="" /></div>
                  <div className="show_fav_count">2371</div>
                </div>
                <div className="show_comments">
                  <a href="#">
                    <div className="d-flex flex-row align-items-center justify-content-start">
                      <div className="show_comments_icon show_info_icon"><img className="svg" src={speech_bubble} alt="" /></div>
                      <div className="show_comments_count">88 Comments</div>
                    </div>
                  </a>
                </div>
              </div> */}
    </div>
  );
}

export default EpisodeCard;