radio.onReceivedString(function (receivedString) {
    item = receivedString
    if (item.compare("A") == 0) {
        flag2 = 1
    } else if (item.compare("B") == 0) {
        flag2 = 2
    } else if (item.compare("C") == 0) {
    	
    } else if (item.compare("D") == 0) {
    	
    } else if (item.compare("0") == 0) {
        flag2 = 0
    } else if (item.compare("E") == 0) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        SuperBit.RGB_Program().show()
    } else if (item.compare("F") == 0) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
        SuperBit.RGB_Program().show()
    } else if (item.compare("G") == 0) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
        SuperBit.RGB_Program().show()
    } else if (item.compare("H") == 0) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
        SuperBit.RGB_Program().show()
    } else if (item.compare("H") == 0) {
        flag2 = 3
    }
})
let flag2 = 0
let item = ""
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Happy)
let flag1 = 0
basic.forever(function () {
    if (flag2 == 1) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
        basic.showArrow(ArrowNames.South)
    } else if (flag2 == 2) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        basic.showArrow(ArrowNames.North)
    } else if (flag2 == 3) {
        flag1 += 1
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        if (flag1 == 1) {
            flag1 = 0
            SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
        }
        SuperBit.RGB_Program().clear()
        SuperBit.RGB_Program().show()
        if (flag1 == 0) {
            basic.showNumber(1)
        } else {
            basic.showNumber(2)
        }
    } else if (flag2 == 0) {
        if (flag1 == 0) {
            SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
            basic.showNumber(1)
        }
    }
})
