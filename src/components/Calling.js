import { 
  callings, 
  checkAceTwo, 
  checkThreeFour,
  checkFiveSix,
  checkSevenEight,
  checkNineTen,
  checkJackQueen,
  checkKing 
} from "../utils/constants";
import '../blocks/background.css';

const ace = callings.ace;
const three = callings.three;
const five = callings.five;
const seven = callings.seven;
const nine = callings.nine;
const jack = callings.jack;
const king = callings.king;

function Calling({ card }) {
  return (
    <div className="background">
      <p className="background__header">Calling:</p>
      <p className="background__text background__text-calling">
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

export default Calling;