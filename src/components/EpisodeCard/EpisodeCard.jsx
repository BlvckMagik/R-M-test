import './EpisodeCard.scss';

const EpisodeCard = ({
  episodeData,
  btnHandler,
  isWatchList,
  onEpisodeDelete,
  onEpisodeCheck,
}) => {
  const { name, episode } = episodeData;

  const buttons = isWatchList ? (
    <div className='btns'>
      <input
        data-name={name}
        onChange={e => onEpisodeCheck(e)}
        className='btns__checkbox'
        type='checkbox'
      />
      <div
        data-name={name}
        onClick={e => onEpisodeDelete(e)}
        className='btns__crossbtn'
      >
        +
      </div>
    </div>
  ) : (
    <div
      className='episode-card__plusbtn'
      onClick={() => btnHandler(episodeData)}
    >
      +
    </div>
  );

  return (
    <div className='episode-card'>
      <div className='episode-card__info'>
        <div className='episode-card__info-name'>Name: {name}</div>
        <div className='episode-card__info-episode'>
          Episode: {`${episode.slice(0, 3)} ${episode.slice(3, 6)}`}
        </div>
      </div>
      {buttons}
    </div>
  );
};

export default EpisodeCard;
