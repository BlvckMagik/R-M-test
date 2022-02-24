import './CharacterCard.scss';

const CharacterCard = ({ characterData }) => {
  const { status, name, gender, origin, image, species } = characterData;

  return (
    <div className='char-card'>
      <img className='char-card__img' src={image} alt='charAvatar' />
      <div className='char-info'>
        <div className='char-info__name'>Name: {name}</div>
        <div className='char-info__species'>Species: {species}</div>
        <div className='char-info__gender'>Gender: {gender}</div>
        <div className='char-info__origin'>Origin: {origin.name}</div>
        <div className='char-info__status'>Status: {status}</div>
      </div>
    </div>
  );
};

export default CharacterCard;
