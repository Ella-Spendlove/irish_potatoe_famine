input.onButtonPressed(Button.A, function () {
    led.stopAnimation()
    basic.showString("No more potatoes :(")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    basic.showString("Potato again")
    music.playMelody("G B A G C5 B A B ", 120)
})
basic.showLeds(`
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    `)
basic.showString("Potatoe :)")
basic.forever(function () {
	
})
