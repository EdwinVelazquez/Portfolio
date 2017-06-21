$(document).ready(function() {
    var playing = false;

    $('a#button').click(function() {
        $(this).toggleClass("down");

        if (playing == false) {
            document.getElementById('player').play();
            playing = true;
            $(this).text("stop sound");

        } else {
            document.getElementById('player').pause();
            playing = false;
            $(this).text("restart sound");
        }


    });
});
