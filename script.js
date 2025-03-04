//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
    const soundElements = {};

    // Load sounds
    sounds.forEach(sound => {
        soundElements[sound] = new Audio(`sounds/${sound}.mp3`);
    });

    // Play sound when a button is clicked
    sounds.forEach(sound => {
        document.getElementById(sound).addEventListener("click", () => {
            stopSounds(); // Stop any playing sound
            soundElements[sound].play();
        });
    });

    // Stop all sounds when the stop button is clicked
    document.getElementById("stop").addEventListener("click", stopSounds);

    function stopSounds() {
        Object.values(soundElements).forEach(audio => {
            audio.pause();
            audio.currentTime = 0; // Reset audio to the start
        });
    }
});
