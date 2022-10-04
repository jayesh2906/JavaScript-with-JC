/* 💡"JavaScript-with-JC"
👉 Composition Vs Inheritance
Composition is a pattern to write a reusable and more flexible code.
Using the Composition pattern, you design your models for what they can do, 
while using inheritance pattern, you create your models for what they are.

💡 Why to use Composition over Inheritance ?
👉 Composition allows code-reusability.
👉 Composition follows Dry ( Do Not Repeat ).
👉 Composition is more flexible.
👉 Composition helps to write loosely coupled code.
*/

// Let's first take an example of Inheritance

// common Parent class for all the players
class Player {
  constructor(name, role, country) {
    // instance members
    this.name = name;
    this.role = role;
    this.country = country;
  }

  // prototype members - common tasks which can be perform by any player in a team
  fielding() {
    console.log(`${this.name} can do fielding.`);
  }
  running() {
    console.log(`${this.name} can do running.`);
  }
}

// 1) Batsman class extends from Player Base class
class Batsman extends Player {
  // prototype member
  batting() {
    // batting method created count 1
    console.log(`${this.name} can do batting.`);
  }
}

const virat = new Batsman("Virat Kohli", "Batsman", "India");
console.log(virat); // Batsman { name: 'Virat Kohli', role: 'Batsman', country: 'India' }
virat.fielding(); // Virat Kohli can do fielding.
virat.running(); // Virat Kohli can do running.
virat.batting(); // Virat Kohli can do batting.

// 2) Bowler class extends from Player Base class
class Bowler extends Player {
  // prototype member
  bowling() {
    // bowling method created count 1
    console.log(`${this.name} can do bowling.`);
  }
}

const bumrah = new Bowler("Jasprit Bumrah", "Bowler", "India");
console.log(bumrah); // Bowler { name: 'Jasprit Bumrah', role: 'Bowler', country: 'India' }
bumrah.fielding(); // Jasprit Bumrah can do fielding.
bumrah.running(); // Jasprit Bumrah can do running.
bumrah.bowling(); // Jasprit Bumrah can do bowling.

// 3) AllRounder class extends from Player Base class
class AllRounder extends Player {
  // Here we are repeating methods, Not following DRY ( do not repeat )
  // batting and bowling method repeated here ( already created in Batsman and Bowler )
  batting() {
    // batting method created count 2
    console.log(`${this.name} can do batting.`);
  }
  bowling() {
    // bowling method created count 2
    console.log(`${this.name} can do bowling.`);
  }
}

const hardik = new AllRounder("Hardik Pandya", "All-Rounder", "India");
console.log(hardik); //AllRounder { name: 'Hardik Pandya', role: 'All-Rounder', country: 'India' }
hardik.fielding(); // Hardik Pandya can do fielding.
hardik.running(); // Hardik Pandya can do running.
hardik.batting(); // Hardik Pandya can do batting.
hardik.bowling(); // Hardik Pandya can do bowling.

// 4) Wicketkeeper class extends from Player Base class
class Wicketkeeper extends Player {
  // Here we are repeating methods, Not following DRY ( do not repeat )
  // batting method repeated here ( already created in Batsman and AllRounder)
  batting() {
    // batting method created count 3
    console.log(`${this.name} can do batting.`);
  }
  wicketKeeping() {
    console.log(`${this.name} can do wicket keeping.`);
  }
}

const dinesh = new Wicketkeeper("Dinesh Karthik", "Wicket-Keeper", "India");
console.log(dinesh); // Wicketkeeper { name: 'Dinesh Karthik', role: 'Wicket-Keeper', country: 'India' }
dinesh.fielding(); // Dinesh Karthik can do fielding.
dinesh.running(); // Dinesh Karthik can do running.
dinesh.batting(); // Dinesh Karthik can do batting.
dinesh.wicketKeeping(); // Dinesh Karthik can do wicket keeping.

// So in above example, we have created batting method 3 times and bowling method 2 times ( same code repeated )
// So to avoid repeating code, Composition comes to rescue that follows D.R.Y

// Now Let's check How composition works ?

// We will create all the method at once, and use them for all the objects ( avoiding repeated methods )
const fielding = () => {
  return {
    fielding() {
      console.log(`${this.name} can do fielding.`);
    },
  };
};

const running = () => {
  return {
    running() {
      console.log(`${this.name} can do running.`);
    },
  };
};

const batting = () => {
  return {
    batting() {
      console.log(`${this.name} can do batting.`);
    },
  };
};

const bowling = () => {
  return {
    bowling() {
      console.log(`${this.name} can do bowling.`);
    },
  };
};

const wicketKeeping = () => {
  return {
    wicketKeeping() {
      console.log(`${this.name} can do wicket keeping.`);
    },
  };
};

// createPlayer is common base function for all players
const createPlayer = (name, role, country) => {
  return {
    name,
    role,
    country,
    ...fielding(),
    ...running(),
  };
};

// 1) createBatsman returning object extending common player with batting method
const createBatsman = (...playerInfo) => {
  return {
    ...createPlayer(...playerInfo),
    ...batting(),
  };
};

const rohit = createBatsman("Rohit Sharma", "Batsman", "India");
console.log(rohit);
/* output 
{
  name: 'Rohit Sharma',
  role: 'Batsman',
  country: 'India',
  fielding: [Function: fielding],
  running: [Function: running],
  batting: [Function: batting]
}
*/

// 2) createBowler returning object extending common player with bowling method
const createBowler = (...playerInfo) => {
  return {
    ...createPlayer(...playerInfo),
    ...bowling(),
  };
};

const bhuvi = createBowler("Bhuvi Kumar", "Bolwer", "India");
console.log(bhuvi);
/* output
{
  name: 'Bhuvi Kumar',
  role: 'Bolwer',
  country: 'India',
  fielding: [Function: fielding],
  running: [Function: running],
  bowling: [Function: bowling]
}
*/

// 3) createAllRounder returning object extending common player with batting and bowling methods
const createAllRounder = (...playerInfo) => {
  return {
    ...createPlayer(...playerInfo),
    ...batting(),
    ...bowling(),
  };
};

const jadeja = createAllRounder("Ravindra Jadeja", "All-Rounder", "India");
console.log(jadeja);
/*
{
  name: 'Ravindra Jadeja',
  role: 'All-Rounder',
  country: 'India',
  fielding: [Function: fielding],
  running: [Function: running],
  batting: [Function: batting],
  bowling: [Function: bowling]
}
*/

// 4) createWicketKeeper returning object extending common player with batting and wicketKeeping methods
const createWicketKeeper = (...playerInfo) => {
  return {
    ...createPlayer(...playerInfo),
    ...batting(),
    ...wicketKeeping(),
  };
};

const rishab = createWicketKeeper("Rishab Pant", "Wicket-Keeper", "India");
console.log(rishab);
/* output
{
  name: 'Rishab Pant',
  role: 'Wicket-Keeper',
  country: 'India',
  fielding: [Function: fielding],
  running: [Function: running],
  batting: [Function: batting],
  wicketKeeping: [Function: wicketKeeping]
}
*/
