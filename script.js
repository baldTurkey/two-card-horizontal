// Get the video element
const gifVideo = document.getElementById('gifVideo');

// Add event listener for click
gifVideo.addEventListener('click', function() {
    // Check if video is paused
    if (gifVideo.paused) {
        // Play the video
        gifVideo.play();
    } else {
        // Pause the video
        gifVideo.pause();
    }
});

// Add event listener for ended
gifVideo.addEventListener('ended', function() {
    // Pause the video
    gifVideo.pause();
});
