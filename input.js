/*
Allow user to input data via console for desired output.

Prompts user for their name then waits 2 seconds.
Checks to see if user's name is Jim, if it isn't tell them to look for him.
If username is Jim, then greet him with a special welcoming.
Clear console if user is Jim after a warm welcoming and 2 second pause.
*/

// Allow for user input
const readline = require('readline');
const rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
  });

// Sleep function to implement pause functionality
function s(ms) {
    return new Promise(resolve => setTimeout(resolve , ms));
}

// First question prompted to user
rl.question("What is your name? ", async n => {
    await s(2000);
    console.log(`Hello there: ${n}!`);
    rl.close();  // Exits the script
    if (n.toLowerCase() === 'jim') {
        console.log(`Hey there Jim! It's been a long time!`);
        await s(2000);
        console.log('Clearing console...')
        console.clear(); // Clears the console
    } else { // If name is not "Jim", then...
        console.log(`If you see "Jim" around anywhere, tell him to come talk to me!`);
    }
  });

/*
IMPORTANT NOTES:
n = name
s = sleep
rl = readLine
*/
