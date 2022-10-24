import { 
  natures, 
  checkAceTwo, 
  checkThreeFour,
  checkFiveSix,
  checkSevenEight,
  checkNineTen,
  checkJackQueen,
  checkKing 
} from "../utils/constants";
import '../blocks/background.css';

const ace = natures.ace;
const three = natures.three;
const five = natures.five;
const seven = natures.seven;
const nine = natures.nine;
const jack = natures.jack;
const king = natures.king;

function Nature({ card }) {
  return (
    <div className="background">
      <p className="background__header">Nature:</p>
      <p className="background__text">
        {
          checkAceTwo(card) ? `${ace}`
          : checkThreeFour(card) ? `${three}`
          : checkFiveSix(card) ? `${five}`
          : checkSevenEight(card) ? `${seven}`
          : checkNineTen(card) ? `${nine}`
          : checkJackQueen(card) ? `${jack}`
          : checkKing(card) ? `${king}`
          : `error`
        }
      </p>
    </div>
  );
}

export default Nature;