'use strict'
const NameList = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 1, name: "Вася"},
];





    let mySet = new Set()
    let arr = []
    NameList.forEach(v=>mySet.add(v.id))
    mySet.forEach(setItem=>arr.push(NameList.find(originalItem=>originalItem.id===setItem)))
    console.log(arr)



console.log('Hello world!!!')


function throwDice(diceType) {
    const diceTypeAllowed = new Set(["D4", "D6", "D8", "D10", "D12", "D16", "D20"])
    if (!diceTypeAllowed.has(diceType.toUpperCase())) {
        console.error('Invalid dice type')
        return null
    }

    const grainNumber = parseInt(diceType.slice(1))

    return Math.floor( Math.random() * grainNumber)  + 1
}

console.log("throwDice", throwDice('D20'))