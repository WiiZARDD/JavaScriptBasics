// Allow for user input
const readline = require('readline')
const rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
  })
 
 
// Sleep function to implement pause functionality
function s(ms) {
    return new Promise(resolve => setTimeout(resolve , ms))
}
 
const menu = () => {
    console.log('🎰 GRAND SLOTS V1')
    console.log('1) PLAY')
    console.log('2) BALANCE')
    console.log('3) HELP')
    console.log('4) EXIT')
 
    rl.question("Pick an option: ", async option => {
        await s(2000)
        console.log(`You chose: ${option}!`)
        if (option === '1') {
            console.log('GAME TYPES')
            console.log('1) Slots')
            console.log('2) COMING SOON')
            console.log('3) COMING SOON')
            console.log(' ')
            rl.question("What game do you want to play? ", async game => {
                console.log(`Loading option #${game}!`)
                if (game === '1') {
                    lottery()
                }
            })
        } else if (option === '2') {
            //more logic here
        } else if (option === '3') {
            //more logic here
        } else if (option === '4') {
            //more logic here
        } else {
            console.log('❌ INVALID OPTION...')
        }
      })
    }
 
const lottery = () => {
    const slotRoll = () => {
        const slots = ['0', '1', '2']
        const slotIndex = Math.floor(Math.random() * slots.length)
        return slots[slotIndex]
    }
    const f = slotRoll()
    const s = slotRoll()
    const t = slotRoll()
    console.log(`[${f}] [${s}] [${t}] /`)
    if (f == s && s == t) {
        console.log('💸 YOU JUST HIT A JACKPOT!');
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
        console.log('BUST! 😡')
        console.log(' ')
        console.log('1) SPIN AGAIN')
        console.log('2) MENU')
        console.log(' ')
        rl.question("Pick an option: ", async option1 => {
            console.log(`Option ${option1} has been chosen...`)
            if (option1 === '1') {
                lottery()
            } else if (option1 === '2') {
                menu()
            }
        })
    }
}
 
 
menu()