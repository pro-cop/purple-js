'use strict'


/**Описание**: Реализуйте функцию, которая принимает массив
 // строк с датами в формате "YYYY-MM-DD" и возвращает массив
 // объектов Date.
 // **Входные данные**: dateStrings: массив строк в формате
 // "YYYY-MM-DD"
 // **Выходные данные**: массив объектов Date
 // **Ограничения**: 1 <= dateStrings.length <= 100, все строки
 // имеют корректный формат даты
 // **Примеры**:
 // Input: ["2023-12-25", "2024-01-01"]
 // Output: [Date объект для 25 декабря 2023, Date объект для
 // 1 января 2024]
 //
 // Input: ["2020-02-29", "2021-06-15"]
 // Output: [Date объект для 29 февраля 2020, Date объект для
 // 15 июня 2021]
 */

const input = ["2023-12-25", "2024-01-01"]

/**
 * Эта функция складывает два числа.
 * @param {array}  - Массив строк с датами.
 * @returns {array} Массив объектов Date.
 */
export function parseStringDates(dateStrings) {
    return dateStrings.map(v => new Date(v))
}

console.log(parseStringDates(input))

// Input: [new Date(2020, 0, 1), new Date(2020, 11, 31)]
// Output: [1577836800000, 1609372800000]
/**
 * Эта принимает
 * // массив объектов Date и возвращает массив их timestamp
 * // значений.
 * @param {array}  - Массив объектов Date.
 * @returns {array} - Массив timestamp.
 */
function convertDatesToTimestamps(dates) {
    return dates.map(v => v.valueOf())
}

console.log(convertDatesToTimestamps([new Date(2020, 0, 1), new Date(2020, 11, 31)]))

// Input: new Date(2024, 0, 1, 9, 15, 30)
// Output: { year: 2024, month: 1, day: 1, hour: 9,
// minute: 15, second: 30 }
/**
 * Эта функция принимает объект  Date и возвращает объект с компонентами даты: год, месяц (от 1 до 12), день, час, минута и секунда.
 * @param {array}  - Массив объектов Date.
 * @returns {object} - Массив объект с компонентами даты.
 */
function extractDateComponents(date) {
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
}

console.log(extractDateComponents(new Date(),))


/**
 * Эта функция принимает две даты  Date и возвращает количество полных дней между ними.
 * @param {date}  - Oбъект Date.
 * @param {date}  - Oбъект Date.
 * @returns {number} - Число.
 */
function getDaysBetweenDates(date1, date2) {
    return Math.abs(Math.floor((date1.getTime() - date2.getTime()) / (24 * 60 * 60 * 1000)))
}

console.log(getDaysBetweenDates(new Date(2024, 10, 11), new Date()))


// **Описание**: Реализуйте функцию, которая принимает объект Date
// и локаль, а затем возвращает отформатированную строку с полным
// названием месяца и годом.
// **Входные данные**: date: объект Date, locale: строка с кодом
// локали (например, 'en-US', 'ru-RU')
// **Выходные данные**: строка в формате "[Месяц] [Год]" на
// указанном языке
// **Ограничения**: date является валидным объектом Date, locale
// является валидной локалью
// **Примеры**:
// Input: new Date('2023-07-15'), 'en-US'
// Output: "July 2023"
//
// Input: new Date('2024-12-01'), 'ru-RU'
// Output: "декабрь 2024"
/**
 * Эта функция принимает принимает объект Date
 * // и локаль, а затем возвращает отформатированную строку с полным
 * // названием месяца и годом.
 * @param {date}  - Oбъект Date.
 * @param {string}  - Локаль
 * @returns {string} - отформатированную строку с полным  названием месяца и годом.
 */
function formatMonthYear(date, locale) {
    return Intl.DateTimeFormat(locale, {
        month: "long", year: "numeric"
    }).format(date)
}

console.log(formatMonthYear(new Date('2024-12-01'), 'ru-RU'))


function sortDates(dates) {
    return dates.toSorted((a, b) => a.getTime() > b.getTime() ? 1 : -1)
}

let arr = [
    new Date(2020, 10, 12),
    new Date(2020, 10, 22),
    new Date(2020, 10, 21),
    new Date(2020, 10, 24),
    new Date(2020, 10, 2),
    new Date(2020, 10, -2),
    new Date(2020, 10, -12),
]
console.log(sortDates(arr))


function getMonthsBetween(date) {
    const now = new Date(2023, 6, 20)

    let delta = (now.getFullYear() - date.getFullYear()) * 12 + (now.getMonth() - date.getMonth())

    if (now.getDate() < date.getDate()) {
        delta -= 1
    }
    return Math.abs(delta)
}

console.log('2023-01-15 month count 6: ', getMonthsBetween(new Date('2023-01-15')))
console.log('2024-12-01 month count 17: ', getMonthsBetween(new Date('2024-12-01')))
console.log('2026-10-13 month count: ', getMonthsBetween(new Date('2026-10-17')))
console.log('2026-10-17 month count: ', getMonthsBetween(new Date('2026-10-17')))
console.log('2025-10-17 month count: ', getMonthsBetween(new Date('2025-10-17')))


// **Описание**: Реализуйте функцию, которая принимает
// объект Date и возвращает новый объект Date с установленным
// временем на начало дня (00:00:00.000).
// **Входные данные**: date: объект Date
// **Выходные данные**: новый объект Date с временем
// 00:00:00.000
// **Ограничения**: date является валидным объектом Date
// **Примеры**:
// Input: new Date('2023-07-15T14:30:45.123')
// Output: new Date('2023-07-15T00:00:00.000')
//
// Input: new Date(2024, 5, 20, 9, 15, 30, 500)
// Output: new Date(2024, 5, 20, 0, 0, 0, 0)

export function resetToStartOfDay(d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}


console.log('2023-07-15T14:30:45.123 :', resetToStartOfDay(new Date('2023-07-15T14:30:45.123')).toDateString())
console.log('2024, 5, 20, 0, 0, 0, 0 :', resetToStartOfDay(new Date(2024, 5, 20, 9, 15, 30, 500)).toDateString())

function getYearInfo(date) {
    const numYear = date.getFullYear()
    let isLeapYear = (numYear % 4 === 0 && numYear%100 !==0 ) || numYear%400 ===0


    return {
        isLeapYear: isLeapYear,
        daysInYear: isLeapYear ? 366 : 365
    }
}

console.log(getYearInfo(new Date('2024-06-15')))
console.log(getYearInfo(new Date('2023-12-01')))







