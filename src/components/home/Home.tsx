import './Home.css';
import background_image from '../../images/old_school.jpg';
import Show from '../../types/spotify/Show';

function Home(props: {podcastData: Show}) {

  const show_id = props.podcastData.id;

  const latest_episode_data = props.podcastData.episodes.items[0];
  const release_date = latest_episode_data.release_date;
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

  return (
    <div id="home" className="home section color-overlay">
      <img
        src={background_image}
        alt="background showing a phonograph"
        className="background-image blur" />
      <div className="home-content">
        <div className="flex-item">
          <div className="text-introduction">
            <div className="section-title"><h1>La historia de la concha.</h1></div>
            <div className="section-text"><p>{props.podcastData.description}</p></div>
          </div>
        </div>
        <div className="flex-item">
          <div className="podcast">
            <div className="section-subtitle">¡Escuchá el último episodio del podcast!</div>
            <div className="podcast-player">
              <iframe
                title="Episodio más reciente del podcast"
                src={"https://open.spotify.com/embed-podcast/show/" + show_id}
                width="100%"
                height="232"
                style={{border: 0}}
                // frameBorder="0"
                // allowtransparency="true"
                allow="encrypted-media">
              </iframe>
              <div className="date">{formatted_release_date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;