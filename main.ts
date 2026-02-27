/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Junyoung
 * Created on: Feb 2026
 * This program shows a temperature when I press A button
*/

// our variable for a random number
let temperatureValueCelsius: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    //get temperature value 
    temperatureValueCelsius = input.temperature()
    //output answer 
    basic.clearScreen()
    basic.showString('The temperature is :' + temperatureValueCelsius.toString() + 'C' )})