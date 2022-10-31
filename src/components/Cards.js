import Card from './Card';

function Cards({ activeCards }) {
  return (
    <div className="cards">
      {activeCards.map(card => (
        <Card
          card={card}
          key={`${card.Value}-${card.Suit}`}
        />
      ))}
    </div>
  );
}

export default Cards;