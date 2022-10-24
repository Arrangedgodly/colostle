import { useState } from 'react';
import './blocks/normalize.css';
import './blocks/App.css';
import Interface from './components/Interface';
import Background from './components/Background';
import Card from './components/Card';
import { deck, shuffle } from './utils/constants';

console.log(deck);

function App() {
  const [cards, setCards] = useState(deck);

  return (
    <div className="App">
      <Interface>
        <Background 
          cards={cards}
        />
      </Interface>
      <Card 
        card={cards[0]}
      />
    </div>
  );
}

export default App;
