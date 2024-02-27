
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript file linked properly."); // Add this line
    
    // Get a reference to the GIF image
    var gifImage = document.getElementById('gifImage');
    var card2 = document.querySelector('.card2');

    
    // Flag to track if the GIF is currently playing
    gifImage.src = 'assets/moon_gif.gif';
    var isPlaying = true;
    
    // Add click event listener to the GIF image
    gifImage.addEventListener('click', function() {
        gifImage.src = 'assets/moon_gif_real.gif';
        isPlaying = false;

        if(!isPlaying) {


            setTimeout(function() {
                gifImage.src = 'assets/moon_gif_end.png';

                gifImage.removeEventListener('click', handleClick);

            }, 4830);

            setTimeout(function() {
                card2.style.backgroundImage = 'url("assets/moon_bottom_gif.gif")';
                card2.style.backgroundSize = 'cover';
                card2.style.backgroundPosition = 'bottom';
            }, 4780);

            setTimeout(function() {
                card2.style.backgroundImage = 'url("assets/bottom_end.png")';
                card2.style.backgroundSize = 'cover';
                card2.style.backgroundPosition = 'bottom';

            }, 6990);
        }


        
        
        // Toggle the playing flag
        isPlaying = !isPlaying;
    });
});




