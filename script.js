document.addEventListener("DOMContentLoaded", () => {
    const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

    // Play sound when a button is clicked
    sounds.forEach(sound => {
        document.getElementById(sound).addEventListener("click", () => {
            stopSounds();
            const audio = document.getElementById(`${sound}-audio`);
            if (audio) {
                audio.play();
            }
        });
    });

    // Stop all sounds when the stop button is clicked
    document.getElementById("stop").addEventListener("click", stopSounds);

    function stopSounds() {
        sounds.forEach(sound => {
            const audio = document.getElementById(`${sound}-audio`);
            if (audio) {
                audio.pause();
                audio.currentTime = 0; // Reset audio to the start
            }
        });
    }
});
