input.onButtonPressed(Button.A, function () {
    if (ani4_play == 1) {
        radio.sendString("ani1")
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
input.onButtonPressed(Button.AB, function () {
    if (ani4_play == 1) {
        radio.sendString("ani3")
        ani_3()
    }
})
radio.onReceivedString(function (receivedString) {
    radio2 = receivedString
    if ("ani1" == radio2) {
        Play_ani_1()
    } else if ("ani2" == radio2) {
        ani_2()
    } else if ("ani3" == radio2) {
        ani_3()
    } else if ("ani4" == radio2) {
        ani_4()
    } else if ("ani4stop" == radio2) {
        ani4_play = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (ani4_play == 1) {
        radio.sendString("ani2")
        ani_2()
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("ani4")
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
        } else {
            if (input.buttonIsPressed(Button.B)) {
                radio.sendString("ani4stop")
                ani4_play = 1
                basic.clearScreen()
            }
        }
    }
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
let radio2 = ""
let time4 = 0
let ani4_play = 0
let time3 = 0
let time2 = 0
let time1 = 0
basic.pause(5000)
radio.setGroup(1)
time1 = 1e-100
time2 = 1e-100
time3 = 200
ani4_play = 2
time4 = 10
