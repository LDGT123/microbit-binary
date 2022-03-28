basic.forever(function () {
    led.plot(0, 0)
    basic.pause(100)
    led.unplot(0, 0)
    basic.pause(100)
})
basic.forever(function () {
    led.plot(1, 0)
    basic.pause(200)
    led.unplot(1, 0)
    basic.pause(200)
})
basic.forever(function () {
    led.plot(2, 0)
    basic.pause(400)
    led.unplot(2, 0)
    basic.pause(400)
})
basic.forever(function () {
    led.plot(3, 0)
    basic.pause(800)
    led.unplot(3, 0)
    basic.pause(800)
})
basic.forever(function () {
    led.plot(4, 0)
    basic.pause(1600)
    led.unplot(4, 0)
    basic.pause(1600)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        # . . . .
        . # . . .
        `)
})
