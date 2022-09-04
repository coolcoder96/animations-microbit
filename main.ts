input.onButtonPressed(Button.A, function () {
    Play_ani_1()
})
function Play_ani_1 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(time1)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # # .
        . . . . .
        . . . . .
        `)
    basic.pause(time1)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . # # .
        . . . . .
        . . . . .
        `)
    basic.pause(time1)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.pause(time1)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # . .
        . . . . .
        `)
    basic.pause(time1)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # #
        . . . . .
        `)
    basic.pause(time1)
    basic.showLeds(`
        . . . . .
        . # # # #
        . # # # #
        . # # # #
        . . . . .
        `)
    basic.pause(time1)
    basic.showLeds(`
        . . . # #
        . # # # #
        . # # # #
        . # # # #
        . . . . .
        `)
    basic.pause(time1)
    basic.showLeds(`
        . # # # #
        . # # # #
        . # # # #
        . # # # #
        . . . . .
        `)
    basic.pause(time1)
    basic.showLeds(`
        # # # # #
        # # # # #
        . # # # #
        . # # # #
        . . . . .
        `)
    basic.pause(time1)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
    basic.pause(time1)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # . . .
        `)
    basic.pause(time1)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        `)
    basic.pause(time1)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(time1)
    basic.clearScreen()
}
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    ani_2()
})
input.onGesture(Gesture.Shake, function () {
	
})
function ani_2 () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(time2)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # . # #
        . # # # .
        . . # . .
        `)
    basic.pause(time2)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    for (let index = 0; index < 3; index++) {
        basic.pause(time2)
        basic.showLeds(`
            # . # . #
            . . . . .
            # . . . #
            . . . . .
            # . # . #
            `)
        basic.pause(time2)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
    }
    basic.pause(time2)
    basic.showLeds(`
        # . # . #
        . . . . .
        # . . . #
        . . . . .
        # . # . #
        `)
    basic.pause(time2)
    basic.showLeds(`
        # . # . .
        . . . . .
        # . . . #
        . . . . .
        # . # . #
        `)
    basic.pause(time2)
    basic.showLeds(`
        # . # . .
        . . . . .
        # . . . .
        . . . . .
        # . # . #
        `)
    basic.pause(time2)
    basic.showLeds(`
        # . # . .
        . . . . .
        # . . . .
        . . . . .
        # . # . .
        `)
    basic.pause(time2)
    basic.showLeds(`
        # . # . .
        . . . . .
        # . . . .
        . . . . .
        # . . . .
        `)
    basic.pause(time2)
    basic.showLeds(`
        # . # . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(time2)
    basic.showLeds(`
        # . # . .
        . . . . .
        . . . . .
        . # # . .
        . . . . .
        `)
    basic.pause(time2)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . # # . .
        . . . . .
        `)
    basic.pause(time2)
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.pause(time2)
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.pause(time2)
    basic.clearScreen()
}
let time2 = 0
let time1 = 0
time1 = 1e-100
time2 = 1e-100
basic.forever(function () {
	
})
