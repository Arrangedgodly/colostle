import "../blocks/card.css";
import { checkBlackSuit } from '../utils/constants';

function Card({ card }) {
  return (
    <div className="card">
      <div className="card__values">
        <p className="card__value">{card.Value}</p>
        <p className={checkBlackSuit(card) ? "card__value card__suit card__suit-black" : "card__value card__suit card__suit-red" }>{card.Suit}</p>
      </div>
    </div>
  );
}

export default Card;
