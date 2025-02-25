let acceleration = 0
// Set the radio group for communication
radio.setGroup(1)
// Set the radio group for communication
basic.forever(function () {
    // Get the strength of acceleration
    acceleration = input.acceleration(Dimension.Strength)
    if (acceleration > 1500) {
        // Adjust the threshold to detect a significant fall
        radio.sendString("Tree Fallen")
        basic.showString("Tree Fallen")
        // Play a sound to indicate the event
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.clearScreen()
    }
})
