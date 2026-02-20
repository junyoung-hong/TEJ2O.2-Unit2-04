/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Junyoung
 * Created on: Feb 2026
 * This program shows a temperature when I press A button
*/



basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() 
 {input.temperature()
  basic.showString('The temperature is :21')})