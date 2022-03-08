import './EpisodeCard.scss';

const EpisodeCard = ({ episodeData }) => {
  const { name, episode } = episodeData;

  return (
    <div className='episode-card'>
      <div className='episode-card__info'>
        <div className='episode-card__info-name'>Name: {name}</div>
        <div className='episode-card__info-episode'>
          Episode: {`${episode.slice(0, 3)} ${episode.slice(3, 6)}`}
        </div>
      </div>
      <div className='episode-card__btn'>+</div>
    </div>
  );
};

export default EpisodeCard;
