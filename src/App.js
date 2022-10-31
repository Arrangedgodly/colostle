import { useState } from 'react';
import './blocks/normalize.css';
import './blocks/App.css';
import Interface from './components/Interface';
import Background from './components/Background';
import Cards from './components/Cards';
import { deck, shuffle } from './utils/constants';

console.log(deck);

function App() {
  const [cards, setCards] = useState(deck);
  const [activeCards, setActiveCards] = useState([]);

  return (
    <div className="App">
      <Interface>
        <Background 
          cards={cards}
        />
      </Interface>
      <Cards
      activeCards={activeCards}
      />
    </div>
  );
}

export default App;
