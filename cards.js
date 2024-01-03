class Character {
  constructor(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }

  // Method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log('------------');
  }

  // Method which determines whether or not a character's "hitpoints" are less then zero
  // Returns true or false depending upon the outcome
  isAlive() {
    if (this.hitPoints <= 0) {
      console.log(`${this.name} has been defeated!`);
      return false;
    }
    return true;
  }

  // Method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    console.log(`${this.name} hit ${opponent.name} for ${this.strength}`);

// Here is when we add the other cards. Figure out how to add the cards to the to this function.

    opponent.hitPoints -= this.strength;
  }
}

// Creates two unique characters using the "character" constructor
const grappler = new Character('grappler', 30, 75);
const pugilist = new Character('pugilist', 20, 105);


// This keeps track of whose turn it is
let grapplerTurn = true;

grappler.printStats();
pugilist.printStats();

const turnInterval = setInterval(() => {
  // If either character is not alive, end the game
  if (!grappler.isAlive() || !pugilist.isAlive())
    
  // Here is another spot we can add the cards. Figure out how to add the cards to the to this function.

  
  {
    clearInterval(turnInterval);
    console.log('Game over!');
    
    // Here is another spot we can add the cards. Figure out how to add the cards to the to this function.

  } else if (grapplerTurn) {
    grappler.attack(pugilist);
    pugilist.printStats();

// Here is another spot we can add the cards. Figure out how to add the cards to the to this function.
  
  } else {
    pugilist.attack(grappler);
    grappler.printStats();
  }
    // Here is another spot we can add the cards. Figure out how to add the cards to the to this function.

  // Switch turns     // Here is another spot we can add the cards. Figure out how to add the cards to the to this function.

  grapplerTurn = !grapplerTurn;
}, 2000);

// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }