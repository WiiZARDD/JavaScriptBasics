let credits = 250; //Starting credit balance
let max;
const w = 'WiiZARDD';

// Allow for user input
const readline = require('readline')
const rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
  })

// Sleep function to implement pause functionality
function sL(ms) {
    return new Promise(resolve => setTimeout(resolve , ms))
}

const bet = async () => {
    rl.question("Do you want to bet MAX? (Y/N): ", async maxB => {
        console.log(`Option ${maxB} has been chosen...`)
        if (maxB === 'y'.toLowerCase()) {
            max = true;
            lottery()
        } else if (maxB === 'n'.toLowerCase()) {
            max = false;
            lottery()
        }
    })
}

const helpmenu = async () => {
    console.log(' ')
    console.log('Lottery JavaScript CLI')
    console.log(' ')
    console.log(`Welcome to ${w}'s JS CLI!`)
    console.log(' ')
    await sL(2000)
    console.log('- You will start with 250 credits')
    console.log(' -> Roll or bet MAX (50 credits) for a x2 reward!')
    console.log(' ')
    console.log(' --> Roll = 25 Credits, MAX Roll = 50 Credits')
    console.log(`[!] You must have 50 credits to play, otherwise you risk losing everything.`)
    console.log(' ')
    console.log('1) MENU')
    console.log(' ')
    rl.question("Pick a choice: ", async choice => {
        if (choice === '1') {
            menu()
        }
    })
}

const menu = () => {
    console.log(`🎰 GRAND SLOTS V1 | CREDITS: ${credits}  `)
    console.log('1) PLAY')
    console.log('2) BALANCE')
    console.log('3) HELP')
    console.log('4) EXIT')

    rl.question("Pick an option: ", async option => {
        console.log(`You chose: ${option}!`)
        if (option === '1') {
            console.log('GAME TYPES')
            console.log('1) Slots')
            console.log('2) COMING SOON')
            console.log('3) COMING SOON')
            console.log(' ')
            rl.question("What game do you want to play? ", async game => {
                if (game === '1') {
                    console.log(`Loading option #${game}!`)
                    if (credits >= 50) {
                        console.log(`YOU HAVE ${credits}, LOADING GAME...`)
                        await sL(2000)
                        bet()
                    } else if (credits <= 50) {
                        console.log('YOU NEED 50 CREDITS TO PLAY')
                        console.log(`YOU HAVE ${credits} CREDITS!`)
                        await sL(2000)
                        menu()
                    }
                } else {
                    console.log('❌ INVALID OPTION...')
                    await sL(2000)
                    console.log(' ')
                    console.log('Going back to menu...')
                    await sL(1000)
                    menu()
                }
            })
        } else if (option === '2') {
            usr()
        } else if (option === '3') {
            helpmenu()
        } else if (option === '4') {
            console.log('SHUTTING DOWN...')
            await sL(2000)
            console.clear()
            rl.close()
        } else {
            console.log('❌ INVALID OPTION...')
            await sL(2000)
            console.log(' ')
            console.log('Going back to menu...')
            await sL(1000)
            menu()
        }
    })
}

const lottery = async () => {
    const slotRoll = () => {
        const slots = ['0', '1', '2']
        const slotIndex = Math.floor(Math.random() * slots.length)
        return slots[slotIndex]
    }
    const f = slotRoll()
    const s = slotRoll()
    const t = slotRoll()
    let reward;
    await sL(2000)
    console.log('Spinning Slots...')
    await sL(2000)
    console.log(`[${f}] [${s}] [${t}] /`)
    await sL(2000)
    if (f == s && s == t) {
        reward = true;
        if (reward === true) {
            if (max === true) {
                credits += 100;
                console.log(`You've earned 100 Credits!`)
                console.log(`You now have ${credits} credits!`)
            } else if (max === false) {
                credits += 25;
                console.log(`You've earned 25 Credits!`)
                console.log(`You now have ${credits} credits!`)
            }
        }
        console.log('💸 YOU JUST HIT A JACKPOT! ');
        console.log(' ');
        console.log('1) SPIN AGAIN');
        console.log('2) MENU');
        console.log(' ');
        rl.question("Pick an option: ", async option1 => {
            console.log(`Option ${option1} has been chosen...`)
            if (option1 === '1') {
                console.log(lottery())
            } else if (option1 === '2') {
                menu()
            }
        })
    } else {
        console.log(' ')
        if (max === true) {
            credits -= 50
            console.log('BUST! 😡 -50 CREDITS!  ')
        } else if (max === false) {
            credits -= 25
            console.log('BUST! 😡 -25 CREDITS!  ')  
        }
        console.log(credits + ' Credits remaining...  ')
        console.log('1) SPIN AGAIN')
        console.log('2) MENU')
        console.log(' ')
        rl.question("Pick an option: ", async option1 => {
            console.log(`Option ${option1} has been chosen...`)
            if (option1 === '1') {
                if (credits >= 50) {
                    console.log('YOU HAVE ENOUGH CREDITS!')
                    lottery()
                } else if (credits <= 50) {
                    console.log('NOT ENOUGH CREDITS')
                    menu()
                }
            } else if (option1 === '2') {
                menu()
            }
        })
    }
}

const usr = () => {
    console.log(`You currently have ${credits} credits!`)
    console.log(' ');
    console.log('1) MENU');
    console.log(' ');
    rl.question("Pick an option: ", async option1 => {
        console.log(`Option ${option1} has been chosen...`)
        if (option1 === '1') {
            menu()
        }
    })
}

menu()
