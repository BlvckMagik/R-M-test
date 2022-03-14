import Header from './Header/Header';
import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CharactersInfo from './CharactersInfo/CharactersInfo';
import MyWatchList from './MyWatchList/MyWatchList';

const App = () => {
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('episodes')) === null)
      localStorage.setItem('episodes', JSON.stringify([]));
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<CharactersInfo />} />
        <Route path='/my_watch' element={<MyWatchList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
