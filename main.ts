input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Square)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    music.playMelody("C5 A B G A F G E ", 120)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.SmallSquare)
})
input.onGesture(Gesture.FreeFall, function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showIcon(IconNames.Diamond)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.SmallDiamond)
})
