import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getEpisodesData } from '../../store/actions';
import { episodesListSelector } from '../../store/selectors';
import EpisodeCard from '../EpisodeCard/EpisodeCard.jsx';
import './MyWatchList.scss';

const MyWatchList = ({ getEpisodesData, episodesList = [] }) => {
  const [inputValue, watchInputValue] = useState('');
  const [, render] = useState(null);

  const getLocalStorage = key => {
    return JSON.parse(localStorage.getItem(key));
  };

  const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const onEpisodeDelete = e => {
    const updatedStore = getLocalStorage('episodes').filter(
      episode => episode.name !== e.target.dataset.name
    );

    setLocalStorage('episodes', updatedStore);
    render(Math.random());
  };

  const onEpisodeCheck = e => {
    const selectedEpisode = getLocalStorage('episodes').filter(
      episode => episode.name === e.target.dataset.name
    )[0];

    selectedEpisode.checked = e.target.checked;

    const updatedStore = [
      ...getLocalStorage('episodes').filter(
        episode => episode.name !== e.target.dataset.name
      ),
      selectedEpisode,
    ];

    setLocalStorage('episodes', updatedStore);
    render(Math.random());
  };

  const onInputChange = event => {
    watchInputValue(event.target.value);
  };

  const searchEpisode = () => {
    getEpisodesData(inputValue);
  };

  const addEpisodeToWatchList = episodeData => {
    const currentStolage = getLocalStorage('episodes');

    if (currentStolage.find(el => el.id === episodeData.id)) {
      alert('Episod already in your list');
      return null;
    }

    localStorage.setItem(
      'episodes',
      JSON.stringify([...currentStolage, { ...episodeData, checked: false }])
    );

    render(Math.random());
  };

  const button =
    inputValue === '' ? (
      <button className='watch-list__search-btn' disabled>
        Search
      </button>
    ) : (
      <button className='watch-list__search-btn' onClick={searchEpisode}>
        Search
      </button>
    );

  return (
    <section className='watch-list'>
      <div className='to-watch'>
        <div className='to-watch__text'>To Watch List</div>
        <div className='to-watch__container'>
          {getLocalStorage('episodes')
            .sort((a, b) => a.checked - b.checked)
            .map(episode => (
              <EpisodeCard
                onEpisodeCheck={onEpisodeCheck}
                onEpisodeDelete={onEpisodeDelete}
                key={episode.id}
                isWatchList={true}
                episodeData={episode}
              />
            ))}
        </div>
      </div>
      <div className='watch-list__search'>
        <input
          className='watch-list__search-input'
          placeholder='Find your episode'
          value={inputValue}
          onChange={onInputChange}
          type='text'
        />
        {button}
      </div>
      <div className='episodes-container'>
        {episodesList.map(episode => (
          <EpisodeCard
            isWatchList={false}
            key={episode.id}
            btnHandler={addEpisodeToWatchList}
            episodeData={episode}
          />
        ))}
      </div>
    </section>
  );
};

const mapState = state => {
  return {
    episodesList: episodesListSelector(state),
  };
};

const mapDispatch = {
  getEpisodesData,
};

export default connect(mapState, mapDispatch)(MyWatchList);
