'use strict';
/*

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: { // Destructuring Objects 
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];   
  },

  orderDelivery: function({
  starterIndex = 1, 
  mainIndex = 0,
  time = '20:00', 
  address,
  }){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  }

};

restaurant.orderDelivery ({  // Destructuring Objects 
  time:'22:30',
  address: 'Puran Dhaka',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery ({
  //time:'22:30',
  address: 'Puran Dhaka',
  //mainIndex: 2,
  starterIndex: 1,
});

const {name,openingHours,categories} = restaurant;
console.log(name,openingHours,categories);

const{
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName,hours,tags);

   // default values

const {menu = [], starterMenu: starters = [] }= restaurant;
console.log(menu,starters);

// Mutating variables

let a1 = 111;
let b1 = 999;
let c1 = 888;
const obj = {a1: 23, b1: 7, c1: 14};

({a1,b1,c1} = obj ) ;

console.log(a1,b1,c1);

// Nested objects

const { fri:{open,close} } = openingHours;  // Destructuring Objects 
//console.log(fri);
console.log(open,close);

///// Destructuring Arrays
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr ;
console.log(x,y,z);
console.log(arr);

//const [first, , second] = restaurant.categories; // putting a coma means indicatin the 3rd element
//console.log(first,second);

let [main, ,secondary] = restaurant.categories;
console.log('Before switching:',main,secondary);


// switching variables

//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main,secondary);

[main,secondary] = [secondary,main]; // switching variables 2
console.log('After switching:',main,secondary);

console.log(restaurant.order(2,0));

const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse);

// Nested destructuring

const nested = [2, 4, [5,6]]; // nested array

//const [i, , j] = nested;
//console.log(i,j);

const [i, , [j,k]] = nested;
console.log(i,j,k); // separated values of array 

// Default values

const [p,q,r] = [8,9];
console.log(p,q,r);

const[p1=1,q1=1,r1=1] = [8,9]; // if we remove 9 the q will be 1
console.log(p1,q1,r1);

*/


/*
///// The Spread Operators

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: { 
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];   
  },

  orderDelivery: function({
    starterIndex = 1, 
    mainIndex = 0,
    time = '20:00', 
    address,
  }){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  }

};

/////////// The Spread Operators

const arr = [7,8,9];
const badNewArr = [1,2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1,2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1,2,7,8,9,);

const newMenu = [...restaurant.mainMenu,'Gnocci']; // Gnocci added to main menu
console.log(newMenu);

// Copy Array

const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays

const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays , strings , maps, sets, NOT objects

const str = 'Marzan';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// Real-life Example

//const ingredients = [prompt('Let\'s make pasta! Ingredients 1?')];
const ingredients = [  ///prompt window
  prompt("Let's make pasta! Ingredients 1?"),
  prompt("Ingredients 2?"),
  prompt("Ingredients 3?")
];
console.log(ingredients);

//restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = {foundedIn: 2020, ...restaurant, founder: 'Marzan'};
console.log(newRestaurant);

const restaurantCopy =  {...restaurant};
restaurantCopy.name = 'Cafe de Rio';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/


/*
/////// Rest Pattern and Parameters 

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: { 
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];   
  },

  orderDelivery: function({
    starterIndex = 1, 
    mainIndex = 0,
    time = '20:00', 
    address,
  }){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza : function(mainIngredient, 
    ...otherIngredients){
      console.log(mainIngredient);
      console.log(otherIngredients);
    }

};

 ///1) Destructuring

 const arr = [1,2, ...[3,4]];

const [a, b, ...others] = [1,2,3,4,5]; // REST 
console.log(a,b, others);

const [pizza ,  , Risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza,Risotto,otherfood);

// Objects

const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

//// 2) Functions


const add = function (...numbers){
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum = sum + numbers[i];
  console.log(sum);
};
add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

const x = [23,5,7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives' , 'spinach');
restaurant.orderPizza('mushrooms');
*/


/*
////// Short circuiting (&& and ||)

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: { 
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];   
  },

  orderDelivery: function({
    starterIndex = 1, 
    mainIndex = 0,
    time = '20:00', 
    address,
  }){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza : function(mainIngredient, 
    ...otherIngredients){
      console.log(mainIngredient);
      console.log(otherIngredients);
    }

};


// Use ANY data type, return ANY data type, short-circuiting

console.log(3 || 'Marzan');
console.log('' || 'Marzan');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello is the first truthy value


//restaurant.numGuests = 23 ;
restaurant.numGuests = 0 ;
const guests1 = restaurant.numGuests ? restaurant.numGuests :10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');

console.log(0 && 'Marzan'); // opposite of || (OR) operator
console.log(7 && 'Marzan'); // only true if all elements are true

console.log('Hello' && 23 && null && 'Marzan');

// Practical example
if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms','spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');


///// The Nullish Coalescing Operator (??)

//restaurant.numGuest = 0; // Nullis: null and undefined
const guest = restaurant.numGuest || 10 ;
console.log(guest);

const guessCorrect = restaurant.numGuest ?? 10;
console.log(guessCorrect);
*/


///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',

  players:[
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandoski',
  ],

  [
    'Burki' ,
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
  ],
],
  score: '4:0',
  scored: ['Lewandoski','Gnarby','Lewandoski','Hummels'],
  date: 'feb 12th 2021',
  odds :{
    team1 : 1.33,
    x: 3.43,
    team2 : 6.9,
  },

};

//1
const [ players1,players2] = game.players;
console.log(players1,players2);

//2

const[gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4

const players1Final = [...players1 , 'Thiago','Coutinho','Periscic'];
console.log(players1Final);

//5

const{
  odds:{team1 , x:draw , team2}
} = game;
console.log(team1, draw, team2);

//6

const printGoals = function (...players){
  console.log(players);
  console.log(`${players.length} goals were scored` );
}
printGoals('Davies','Muller','Lewandoski','Kimmich');
printGoals('Muller','Lewandoski','Kimmich');
printGoals(game.scored); // 1 value 1 goal 
printGoals(...game.scored);
printGoals('Lewandoski','Gnarby','Lewandoski','Hummels');

//7

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/