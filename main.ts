/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Rebecca de Boer
 * Created on: Oct 2024
 * This program turns on and off an led
*/

//setup//
basic.clearScreen()
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P16, 0)

//turn on led
input.onButtonPressed(Button.A, function() { 
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
})

//turn off led
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0)
})