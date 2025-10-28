'use strict'


// **Описание**: Реализуйте программу, которая создает таймер
// с помощью setTimeout, но предоставляет возможность отменить
// его выполнение до истечения времени ожидания.
// **Входные данные**: message (строка) - сообщение для вывода,
// delay (число) - задержка в миллисекундах,
// shouldCancel (булево) - флаг отмены таймера
// **Выходные данные**: Если таймер не отменен - выводит
// сообщение через указанную задержку. Если отменен -
// выводит "Timer cancelled"
// **Ограничения**: 100 <= delay <= 5000, message не пустая строка
// **Примеры**:
// Input: message = "Hello World", delay = 1000, shouldCancel = false
// Output: "Hello World" (через 1 секунду)
//
// Input: message = "Test message", delay = 2000, shouldCancel = true
// Output: "Timer cancelled" (немедленно)

function createCancellableTimer(message, delay, shouldCancel) {
    // Ваш код здесь
    const timeout = setTimeout(_ => console.log(message), delay)
    if (shouldCancel) {
        clearTimeout(timeout)
        console.log("Timer cancelled")
    }
}

// Тестирование
//createCancellableTimer("Hello World", 1000, false);
//createCancellableTimer("Test message", 2000, true);


// **Описание**: Реализуйте программу, которая измеряет
// фактическое время выполнения setTimeout и сравнивает его
// с ожидаемым временем задержки.
// **Входные данные**: delay (число) - ожидаемая задержка
// в миллисекундах, message (строка) - сообщение для вывода
// **Выходные данные**: Выводит сообщение и разность между
// фактическим и ожидаемым временем в формате
// "Message: [message], Time difference: [difference]ms"
// **Ограничения**: 500 <= delay <= 3000, message не пустая строка
// **Примеры**:
// Input: delay = 1000, message = "Test completed"
// Output: "Message: Test completed, Time difference: 2ms"
//
// Input: delay = 2000, message = "Operation finished"
// Output: "Message: Operation finished, Time difference: 5ms"

const delay = 1000;
let message = "Test completed";

let i = 0

// Ваш код здесь
function checkSetTimeoutDelay(message, d) {
    const start = new Date().getTime()

    setTimeout(_ => {
        const finish = new Date().getTime()
        console.log("Message: Test completed, Time difference: %s ms", (finish - start) - delay)
    }, delay)

}

//checkSetTimeoutDelay("Test completed", 1000)


// **Описание**: Реализуйте программу, которая создает
// интервальный таймер для подсчета количества выполнений
// и автоматически останавливает его после достижения
// заданного лимита.
// **Входные данные**: interval (число) - интервал в
// миллисекундах, maxCount (число) - максимальное количество
// выполнений, message (строка) - сообщение для вывода
// **Выходные данные**: Выводит сообщение с номером
// выполнения каждый интервал, затем "Interval stopped
// after [maxCount] executions"
// **Ограничения**: 200 <= interval <= 2000,
// 2 <= maxCount <= 10, message не пустая строка
// **Примеры**:
// Input: interval = 500, maxCount = 3, message = "Tick"
// Output: "Tick 1", "Tick 2", "Tick 3",
// "Interval stopped after 3 executions"
//
// Input: interval = 1000, maxCount = 2, message = "Beep"
// Output: "Beep 1", "Beep 2",
// "Interval stopped after 2 executions"

const interval = 500;
const maxCount = 3;
message = "Tick";

// Ваш код здесь
function intervalTimer(interval, maxCount, message) {
    let i = 0;
    const timer = setInterval(_ => {
        console.log("%s %d", message, ++i)
        if (i >= maxCount) {
            clearInterval(timer)
        }
    })
}

//intervalTimer(500, 3, "Tick")
//intervalTimer(1000, 2, "Beep")


// **Описание**: Реализуйте программу, которая создает несколько таймеров с разными задержками и отслеживает порядок их выполнения в Event Loop.

// **Входные данные**: delays (массив чисел) - массив задержек в миллисекундах, messages (массив строк) - соответствующие  сообщения для вывода
// **Выходные данные**: Выводит сообщения в порядке выполнения таймеров с указанием их порядкового номера в формате "[номер]: [сообщение]"
// **Ограничения**: 1 <= delays.length <= 5, 100 <= каждая задержка <= 1000, messages.length === delays.length,
// каждое сообщение не пустое

// **Примеры**:
// Input: delays = [300, 100, 200], messages = ["Third", "First", "Second"]
// Output: "1: First", "2: Second", "3: Third"
//
// Input: delays = [500, 500], messages = ["Alpha", "Beta"]
// Output: "1: Alpha", "2: Beta"

function createTimersWithOrder(delays, messages) {
    let i = 0
    let res = delays.map((v,index)=>({delay:v, message: messages[index]}))

    res.forEach((v) => {
        setTimeout(_ => {
            v.date = new Date().valueOf()
            if (res.length === ++i){
                printRes(res)
            }

        }, v.delay)
    })

}
function printRes(arr){
    arr.sort((a,b)=>a.date>b.date?1:-1).forEach((r,rIndex)=>{
        console.log("%d: %s", rIndex+1, r.message)
    })

    console.log("All timers completed" )
}


createTimersWithOrder([300, 100, 200], ["Third", "First", "Second"])
createTimersWithOrder([500, 500], ["Alpha", "Beta"])