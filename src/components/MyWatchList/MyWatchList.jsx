import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getEpisodesData } from '../../store/actions';
import { episodesListSelector } from '../../store/selectors';
import EpisodeCard from '../EpisodeCard/EpisodeCard.jsx';
import './MyWatchList.scss';

const MyWatchList = ({ getEpisodesData, episodesList = [] }) => {
  const [inputValue, watchInputValue] = useState('');

  const onInputChange = event => {
    watchInputValue(event.target.value);
  };

  const searchEpisode = () => {
    getEpisodesData(inputValue);
  };

  return (
    <section className='watch-list'>
      <div className='watch-list__search'>
        <input
          className='watch-list__search-input'
          value={inputValue}
          onChange={onInputChange}
          type='text'
        />
        <button className='watch-list__search-btn' onClick={searchEpisode}>
          Search
        </button>
      </div>
      <div className='episodes-container'>
        {episodesList.map(episode => (
          <EpisodeCard key={episode.id} episodeData={episode} />
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
