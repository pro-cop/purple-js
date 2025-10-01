'use strict'
console.log('Hello world!!!')


function throwDice(diceType) {
    let grainNumber = 0
    const diceTypeAllowed = new Set([ "D4", "D6", "D8", "D10", "D12", "D16", "D20"])
    if(!diceTypeAllowed.has(diceType)) {
        console.error('Invalid dice type')
        return null
    }

    grainNumber = parseInt(diceType.slice(1))

    return Math.ceil(Math.random() * grainNumber)
}

console.log("throwDice", throwDice('D20'))