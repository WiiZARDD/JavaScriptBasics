/*
Random Identity Generator (Node.js CLI version)

- Run with: node identityGenerator.js
- Asks Y/N, then generates a random name and age.
- Uses readline for console input; can be adapted for browser later.
*/

const readline = require('readline');
const rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
  });

/*
─── Helper functions: pick random user data ───

─── Random identity generators ───
randomName()   → returns a random name
randomAge()    → returns a random age (0–99)
randomState()  → returns a random U.S. “state” or token value
randomXTown()  → returns a random town within that state
*/

//Random Name Generator
function randomName() {
    const names = [
        'Frank', 
        'John', 
        'Todd'
    ];
    const nameIndex = Math.floor(Math.random() * names.length);
    return names[nameIndex];
}

//Random Age Generator
function randomAge() {
    const age = Math.floor(Math.random() * 100);
    return age;
}

//Random State Generator
function randomState() {
    const state = [
        'California', 
        'Illinois', 
        'New York', 
        'Maine', 
        'Boston'
    ];
    const stateIndex = Math.floor(Math.random() * state.length);
    return state[stateIndex];
}

//Random Town Generators
function randomCATown() {
    const caTown = [
        'Mendocino', 
        'Ojai', 
        'Truckee', 
        'Solvang', 
        'Julian', 
        'Cambria', 
        'Ferndale', 
        'Mammoth Lakes', 
        'Avalon', 
        'Yucca Valley'
    ];
    const caTownIndex = Math.floor(Math.random() * caTown.length);
    return caTown[caTownIndex];
}

function randomILTown() {
    const ilTown = [
        'Galena', 
        'Normal', 
        'Dixon', 
        'Anna', 
        'Princeton', 
        'Utica', 
        'Carmi', 
        'Woodstock', 
        'Kankakee', 
        'Galena'
    ];
    const ilTownIndex = Math.floor(Math.random() * ilTown.length);
    return ilTown[ilTownIndex];
}

function randomNYTown() {
    const nyTown = [
        'Saranac Lake', 
        'Rhinebeck', 
        'Cooperstown', 
        'Seneca Falls', 
        'Hudson', 
        'Chautauqua', 
        'Skaneateles', 
        'Cold Spring', 
        'Lake Placid', 
        'Cazenovia'
    ];
    const nyTownIndex = Math.floor(Math.random() * nyTown.length);
    return nyTown[nyTownIndex];
}

function randomMETown() {
    const meTown = [
        'Portland',
        'Bar Harbor',
        'Bangor',
        'Rockland',
        'Camden',
        'Kittery',
        'Ogunquit',
        'Belfast',
        'Bethel',
        'Boothbay Harbor'
    ];
    const meTownIndex = Math.floor(Math.random() * meTown.length);
    return meTown[meTownIndex];
}

function randomBOSTown() {
    const bosTown = [
        'Boston',
        'Cambridge',
        'Somerville',
        'Brookline',
        'Quincy',
        'Newton',
        'Chelsea',
        'Waltham',
        'Medford',
        'Malden'
    ];
    const bosTownIndex = Math.floor(Math.random() * bosTown.length);
    return bosTown[bosTownIndex];
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

console.log(' ')
console.log(' ')
console.log('Random Identity Generator by WiiZARDD')
console.log('Very Basic JavaScript Randomization Example')
console.log('https://github.com/WiiZARDD')
console.log(' ')

rl.question("Do you want to generate randomly? (Y/N)", async answer => {
    console.log(`You said: ${answer}!`);
    rl.close();  // exits the script
    if (answer.toLowerCase() === 'y') {
        console.log('=> Generating a name...');
        await sleep(3000);
        const genName = randomName();
        console.log(`--- Generated Name: ${genName}`);
        console.log('=> Generating your Age...');
        await sleep(3000)
        const genAge = randomAge();
        console.log(`--- Generated Age: ${genAge}`);

// WORK IN PROGRESS
// TODO: Finish core script functionalities

/*
        await sleep(3000);
        console.log(' ');
        console.log('Clearing the console...');
        await sleep(3000);
        console.clear();
        console.log('Console Cleared!');
*/

    } else {
        //handle the no procedure
        //coming soon...
        //TODO: no procedure
    }
  });
