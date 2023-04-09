const BUTTON_COLORS = ['red', 'blue', 'green', 'yellow'];

var level = 0;

var start = false;

var gamePattern = [];

var checkIndex = 0;

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    $("#" + userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    if (userChosenColour === gamePattern[checkIndex]) {
        checkIndex++;
        var sound = new Audio("sounds/" + userChosenColour + ".mp3");
        sound.play();

    } else {
        reset();
    }

    if (start && (checkIndex === gamePattern.length)) {
        checkIndex = 0;
        setTimeout(nextSequence, 500);
    }
})

function nextSequence() {
    level += 1;
    $("h1").text("Level " + level);
    const randomNumber = Math.floor(Math.random() * 4);
    var chosenColor = BUTTON_COLORS[randomNumber];
    gamePattern.push(chosenColor);
    $("#" + chosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var sound = new Audio("sounds/" + chosenColor + ".mp3");
    sound.play();
}


$("body").keypress(function () {
    if (start === false) {
        $("body").removeClass("game-over");
        start = true;
        nextSequence();
    }
});


function reset() {
    $("body").addClass("game-over");
    gamePattern = [];
    checkIndex = 0;
    level = 0;
    start = false;
    $("h1").text("Press A Key to Start");
    var wrongSound = new Audio("sounds/wrong.mp3");
    wrongSound.play();
}


