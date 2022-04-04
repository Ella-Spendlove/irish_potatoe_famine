input.onButtonPressed(Button.A, function () {
    led.stopAnimation()
    basic.showString("No more potatoes :(")
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
