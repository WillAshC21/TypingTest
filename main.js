// Typing text generated
var typingMsg = [
    "Nobody spoke for a minute; then Meg said in an altered tone, You know the reason Mother proposed not having any presents this Christmas was because it is going to be a hard winter for everyone;",
    "Mr. Bennet was so odd a mixture of quick parts, sarcastic humour, reserve, and caprice",
    "William Shakespeare was the son of John Shakespeare, an alderman and a successful glover (glove-maker) originally from Snitterfield, and Mary Arden",
    "PHP is a general-purpose scripting language especially suited to web development.",
    "HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages. ",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    "Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. ",
    "She did not hear the story as many women have heard the same, with a paralyzed inability to accept its significance. ",
    "Suddenly she came upon a little three-legged table, all made of solid glass;"
];

// Random number generated for the text generator
var typechoice = Math.floor((Math.random() * 10) + 0);

// Minutes defined
var minute = 1;

// Seconds defined
var second = 0;

// Counts entered characters
var cpm = 0;

// Counts words per minute
var wpm = 0;

// Counts the amount of User errors
var error = 0;

// Displays time
var time = document.getElementById('typing-time');

// Defines Seconds
if (second <= 9) {
time.innerHTML = minute + ':' + '0' + second;
}

// Defines Text Display
var display = document.getElementById('typing-display');
document.getElementById('typing-display').innerText = typingMsg[typechoice] + typingMsg[typechoice].length;

// Receivers user input from text value
document.getElementById('typing-value').addEventListener('keypress', home);

// Starts the timer for the Typing Game
document.getElementById('start-timer').addEventListener('click', start);

//Coutns the spaces in the User text. Prints green text if user is right. Prints red text
// if user is wrong.
function home() {
    // Splits the string into words when spaces are added
    wpm = document.getElementById('typing-value').value.split(" ").length-1;

    // Prints words to screen
    var wordtype =  document.getElementById('typing-word');

    // Prints the typed value
    var typeval = document.getElementById('typing-value').value.charAt(counter - 1);
    wordtype.innerHTML = typeval;

    //Increases Charaters per minute and places into text
    cpm++;
    document.getElementById('typing-count').innerText = cpm;

    // Counts the words per minute
    if (document.getElementById('typing-value').value.charAt(wpm)) {
        document.getElementById('typing-space').innerText = wpm;
    }
    // Checks the current character in the text
        var txtcheck = typingMsg[typechoice].charAt(gen - 1);
    counter++;
    gen++;

    // Checks if text and input value are the same
    if (txtcheck === typeval) {
        document.getElementById('typing-bnon').innerHTML = txtcheck.fontcolor("green");
    } else {
        document.getElementById('typing-bnon').innerHTML = txtcheck.fontcolor("red");
        error++;
    }
    console.log(txtcheck + " " + typeval);
    console.log(error);
}

var gen = 0;

// Counts down the timer from 60 seconds
function startTime() {

    // Prints time
    time.innerHTML = minute + ':' + second;
    
    // Decrease time
    second--;
    if (second < 0) {

        // Decrease minute
        minute--;
        second = 59;
    }
    if (second <= 9) {

        // Add zero to single digit numbers
        time.innerHTML = minute + ':' + '0' + second;
    }
}

// Starts the timer
function start() {
    setInterval(startTime, 1000);
}

// The Counter
var counter = 0;