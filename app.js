'use strict'
function ageValidation(date){
    const birthDate = new Date(date)
    const now = new Date()
    now.setHours(0, 0, 0, 0)
    birthDate.setHours(0, 0, 0, 0)
    const checkDate = new Date(now.getFullYear()-14, now.getMonth(), now.getDate());
    return  checkDate.getTime() >= birthDate.getTime();

}

console.log(ageValidation("2011-10-16"))
console.log(ageValidation("2011-10-17"))
console.log(ageValidation("2011-10-18"))