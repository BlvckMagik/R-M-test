import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <button className='header__btn'>Characters</button>
      </Link>
      <Link to='/my_watch'>
        <button className='header__btn'>My watch list</button>
      </Link>
    </header>
  );
};

export default Header;
