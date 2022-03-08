import Header from './Header/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CharactersInfo from './CharactersInfo/CharactersInfo';
import MyWatchList from './MyWatchList/MyWatchList';

const App = () => {
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
