const suits = ["♠", "♦", "♣", "♥"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = [];

function getDeck()
{
	for(let i = 0; i < suits.length; i++)
	{
		for(let x = 0; x < values.length; x++)
		{
			let card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
	}
}

getDeck();

function shuffle(deck)
{
	for (let i = 0; i < 1000; i++)
	{
		let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

shuffle(deck);

function checkBlackSuit(card) {
  if ((card.Suit === '♠') || (card.Suit === '♣')) {
    return true;
  } else {
    return false;
  }
}

function checkAceTwo(card) {
  if (card.Value === 'A' || card.Value === '2') {
    return true;
  }
  else {
    return false;
  }
}

function checkThreeFour(card) {
  if (card.Value === '3' || card.Value === '4') {
    return true;
  }
  else {
    return false;
  }
}

function checkFiveSix(card) {
  if (card.Value === '5' || card.Value === '6') {
    return true;
  }
  else {
    return false;
  }
}

function checkSevenEight(card) {
  if (card.Value === '7' || card.Value === '8') {
    return true;
  }
  else {
    return false;
  }
}

function checkNineTen(card) {
  if (card.Value === '9' || card.Value === '10') {
    return true;
  }
  else {
    return false;
  }
}

function checkJackQueen(card) {
  if (card.Value === 'J' || card.Value === 'Q') {
    return true;
  }
  else {
    return false;
  }
}

function checkKing(card) {
  if (card.Value === 'K') {
    return true;
  }
  else {
    return false;
  }
}

const callings = {
  ace: "There is an army sweeping through the lands around your village. You have heard tales of their unstoppable nature; burning villages in their wake, their men clad in monstrous, spiked black armour. One night they arrive at your village; it is chaos, people screaming, running for their lives, the roofs of your people’s huts and tents ablaze, lighting up the night sky. But most terrifying of all... Rooks, following their general’s commands, their eyes burning with a purple flame. No-one has ever commanded a living Rook before - how is this possible? You survive. Maybe you’re left for dead, maybe you hide. Maybe they took someone you love, maybe you just want revenge... either way, you will need to get to the bottom of the mystery of the Black Army and the Rooks of Purple Flame.",
  three: "You have a vision as you sleep one night; far across the lands, in a room that looks nothing like the room your village resides in, is a tower. The tower looks like it might have been a Rook once; thin and impossibly tall with its slender arms by its sides. In your vision you see a weapon in a room at the very top of the tower, waiting, calling for you. Your village has been besieged by Rooks lately, your hunters are stretched thin. Maybe, if you could reach this mythical place, you might be able to save your village?",
  five: "It flew overhead, casting a shadow black as night in the middle of the day - the Dragon Rook, the only Rook known to fly. You hear whispers and rumours of a party heading out to hunt it... they say if you can defeat it, you will gain the ability to fly... you can’t let them get to it first.",
  seven: "Most villages and peoples living in the Colostle have a passive opinion about the Rooks; they are simple wildlife and rarely seen, nothing to be too worried about. But not your village. Your village has hated all Rooks ever since one ploughed right through the centre of your homes, killing loved ones and disappearing into the night. Which is why your secret friendship with a very unusual Rook would not go down well with the villagers if they ever were to discover it. You meet your friend in a nearby forest as often as you can. It doesn’t talk, but it doesn’t attack; it’s not like other Rooks but you don’t know why. One day when you pay it a visit, it is gone from its usual place, and there are signs of a scuffle and a trail leading off into the distance. You have to go find it.",
  nine: "As a child, your mother used to tell you stories of warriors with diamond skin, morphing weapons of magma and obsidian blades that never dulled. Their powers came from the Fabled Rookstones; ancient one-of-a-kind stones, hundreds of them, made of a different rock, crystal or gem and each holding a unique magical power. It wasn’t true of course; there are only 3 kinds of Rookstones, Ice, Shock and Rumble, and all Rooks have one of these. Everybody knows that. But now, as an adult, you know a little more, you’re a little wiser to the world. And you know that stories like that don’t exist without a grain of truth. What if the legendary Rookstones actually exist?",
  jack: "A map and a key passed down in your family. The map covers a huge area; you can see multiple rooms - and you’ve never even seen the edges of your Room! 5 locations are marked on it with different coloured glyphs. The locations look like ancient Rook bodies, long since fallen, rotting like ancient temples. The key is ornate and strange, with a Rook symbol carved into its head. It looks like it would fit into a Rook. Maybe those 5 ancient Rook bodies are locked, and only you have the key. But what could possibly be hidden within?",
  king: "You are a member of an order of Knights. Knights have one job: They are highly trained and conditioned to take on Rooks and are some of the greatest Rook fighters in all of the Colostle. Your superior in your Order has called you into his office, and he has a mission for you..."
};

const natures = {
  ace: "Happy-go-lucky, extremely optimistic, fun",
  three: "Impatient, quick-to-anger, grumpy",
  five: "Brave, by-the-book, serious, no sense of humour",
  seven: "Introspective, quiet, mysterious, person of few words",
  nine: "Larger than life, tells exaggerated stories, roars with laughter",
  jack: "Sly, strategic and always planning",
  king: "Salt-of-the-earth, common folk, finds it easy to talk with anyone"
};

const exploration = {
  
}

export { 
  deck, 
  shuffle, 
  checkBlackSuit, 
  checkAceTwo, 
  checkThreeFour, 
  checkFiveSix, 
  checkSevenEight, 
  checkNineTen, 
  checkJackQueen, 
  checkKing, 
  callings,
  natures 
};