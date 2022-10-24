import Calling from './Calling';
import Nature from './Nature';
import CharacterClass from './CharacterClass';
import { useState } from 'react';

function Background({ cards }) {
  const [characterClass, setCharacterClass] = useState('');

  const handleClassChange = (e) => {
    setCharacterClass(e.target.value);
  }

  return (
    <div className="background">
      <Calling 
        card={cards[0]}
      />
      <Nature 
        card={cards[1]}
      />
      <CharacterClass 
        characterClass={characterClass}
        handleClassChange={handleClassChange}
      />
    </div>
  );
}

export default Background;