'use strict'


/**
 * Эта функция  реализует таймер пиццы, обратный отсчет.
 * @param {number}  - Кол-во секунд до приготовления.
 */
export function pizzaTimer(time) {
    const interval = setInterval(v => {

        if (time === 0) {
            clearInterval(interval)
            console.log("🍕")
            return
        }
        console.log(Intl.DateTimeFormat("ru-RU", {minute: "2-digit", second: "2-digit"}).format(time * 1000))
        time--

    }, 1000)

}

pizzaTimer(80)





