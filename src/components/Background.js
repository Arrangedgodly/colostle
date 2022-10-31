import Calling from './Calling';
import Nature from './Nature';
import CharacterClass from './CharacterClass';
import { useState, useEffect } from 'react';

function Background({ cards }) {
  const [characterClass, setCharacterClass] = useState('');
  const [exploration, setExploration] = useState(0);
  const [combat, setCombat] = useState(0);

  const handleStats = () => {
    if (characterClass === 'Armed') {
      setExploration(3);
      setCombat(4);
    } else if (characterClass === 'Followed') {
      setExploration(5);
      setCombat(3);
    } else if (characterClass === 'Helmed') {
      setExploration(2);
      setCombat(5);
    } else if (characterClass === 'Mounted') {
      setExploration(5);
      setCombat(2);
    } else if (characterClass === '') {
      setExploration(0);
      setCombat(0);
    }
  }

  const handleClassChange = (e) => {
    setCharacterClass(e.target.value);
  }

  useEffect(() => {
    handleStats()
  }, [characterClass])

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