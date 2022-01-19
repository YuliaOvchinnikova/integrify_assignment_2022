import { useNavigate } from 'react-router-dom';

function Card(props) {
  const navigate = useNavigate();

  function onClick() {
    navigate(`/brewery/${props.brewery.id}`);
  }

  return (
    <div className="card">
      <div className="card__container">
        <h2 className="card__name">{props.brewery.name}</h2>
        <p className="card__info">{props.brewery.brewery_type}</p>
        <p className="card__info">{props.brewery.city}</p>
      </div>
      <button
        type="button"
        aria-label="Open more information"
        className="interactive-button button card__button"
        onClick={onClick}
      >
        View Details
      </button>
    </div>
  );
}

export default Card;
