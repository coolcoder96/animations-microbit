input.onButtonPressed(Button.A, function () {
    if (ani4_play == 0) {
    	
    } else {
        Play_ani_1()
    }
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
function ani_4 () {
    ani4_play = 0
    basic.showString("A=Shoot")
    basic.showString("B=End")
    while (ani4_play == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # # # .
            # # # # #
            `)
        if (input.buttonIsPressed(Button.A)) {
            basic.pause(time4)
            basic.showLeds(`
                . # # # .
                # . # . #
                . # # # .
                # # # # #
                . . . . .
                `)
            basic.pause(time4)
            basic.showLeds(`
                # . # . #
                . # # # .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(time4)
            basic.showLeds(`
                . # # # .
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(time4)
            basic.showLeds(`
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(time4)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(time4)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                `)
            basic.pause(time4)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                . # # # .
                `)
            basic.pause(time4)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . # # # .
                # . # . #
                `)
            basic.pause(time4)
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                # . # . #
                . # # # .
                `)
            basic.pause(time4)
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . # # # .
                # # # # #
                `)
            basic.pause(time3)
            basic.clearScreen()
            basic.pause(time3)
        }
        if (input.buttonIsPressed(Button.B)) {
            ani4_play = 1
            basic.clearScreen()
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    ani_3()
})
input.onButtonPressed(Button.B, function () {
    ani_2()
})
input.onGesture(Gesture.Shake, function () {
    ani_4()
})
function ani_3 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(time3)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(time3)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.pause(time3)
    basic.showLeds(`
        . # # # .
        # # . # #
        # . # . #
        # # . # #
        . # # # .
        `)
    basic.pause(time3)
    basic.showLeds(`
        . # # # .
        # # . # #
        . # # # .
        # # . # #
        . # # # .
        `)
    basic.pause(time3)
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.pause(time3)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.pause(time3)
    basic.showLeds(`
        . # # # .
        . # . # .
        # # # # #
        . # # # .
        . # # # .
        `)
    basic.pause(time3)
    basic.showLeds(`
        . # # # .
        . # . # .
        # # # # #
        . # # # .
        # # # # #
        `)
    basic.pause(time3)
    basic.showLeds(`
        . # # # .
        . # . # .
        # # # # .
        . # # # .
        # # # # .
        `)
    basic.pause(time3)
    basic.showLeds(`
        . . . . .
        . . # . #
        . . # # #
        . . # # #
        . . # # #
        `)
    basic.pause(time3)
    basic.showLeds(`
        . . . . .
        # . # . .
        # # # # #
        # # # . #
        # # # # #
        `)
    basic.pause(time3)
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # # .
        # # . # .
        # # # # .
        `)
    basic.pause(time3)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # # . .
        # . # . .
        # # # . .
        `)
    basic.pause(time3)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . # . . .
        # # . . .
        `)
    basic.pause(time3)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . # . .
        # # # . .
        `)
    basic.pause(time3)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        . # # # .
        `)
    basic.pause(time3)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        # # # # #
        `)
    basic.pause(time3)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        # . . . #
        # # # # #
        `)
    basic.pause(time3)
    basic.clearScreen()
}
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
    for (let index = 0; index < 2; index++) {
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
let time4 = 0
let ani4_play = 0
let time3 = 0
let time2 = 0
let time1 = 0
time1 = 1e-100
time2 = 1e-100
time3 = 200
ani4_play = 2
time4 = 300
basic.forever(function () {
	
})
