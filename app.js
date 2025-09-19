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


