// Typing text generated
var typingMsg = [
    "Nobody spoke for a minute; then Meg said in an altered tone, You know the reason Mother proposed not having any presents this Christmas was because it is going to be a hard winter for everyone; and she thinks we ought not to spend money for pleasure, when our men are suffering so in the army. We can't do much, but we can make our little sacrifices, and ought to do it gladly. But I am afraid I don't. and Meg shook her head, as she thought regretfully of all the pretty things she wanted",
    "Mr. Bennet was so odd a mixture of quick parts, sarcastic humour, reserve, and caprice, that the experience of three-and-twenty years had been insufficient to make his wife understand his character. Her mind was less difficult to develop. She was a woman of mean understanding, little information, and uncertain temper. When she was discontented, she fancied herself nervous. The business of her life was to get her daughters married; its solace was visiting and news",
    "William Shakespeare was the son of John Shakespeare, an alderman and a successful glover (glove-maker) originally from Snitterfield, and Mary Arden, the daughter of an affluent landowning farmer. He was born in Stratford-upon-Avon, where he was baptised on 26 April 1564. His date of birth is unknown, but is traditionally observed on 23 April, Saint George's Day. This date, which can be traced to a mistake made by an 18th-century scholar, has proved appealing to biographers because Shakespeare died on the same date in 1616. He was the third of eight children, and the eldest surviving son",
    "PHP is a general-purpose scripting language especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994.[7] The PHP reference implementation is now produced by The PHP Group. PHP originally stood for Personal Home Page,PHP originally stood for Personal Home Page,  but it now stands for the recursive initialism PHP: Hypertext Preprocessor.",
    "HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages. Inclusion of CSS defines the look and layout of content.  The World Wide Web Consortium (W3C), former maintainer of the HTML and current maintainer of the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Mi proin sed libero enim sed. Netus et malesuada fames ac turpis egestas maecenas. Senectus et netus et malesuada fames ac turpis egestas sed. Sed cras ornare arcu dui vivamus arcu. In fermentum posuere urna nec tincidunt praesent semper feugiat. Justo nec ultrices dui sapien. Cras sed felis eget velit aliquet sagittis id consectetur purus.",
    "She did not hear the story as many women have heard the same, with a paralyzed inability to accept its significance. She wept at once, with sudden, wild abandonment, in her sister's arms. When the storm of grief had spent itself she went away to her room alone. She would have no one follow her.",
    "Suddenly she came upon a little three-legged table, all made of solid glass; there was nothing on it except a tiny golden key, and Alice's first thought was that it might belong to one of the doors of the hall; but, alas! either the locks were too large, or the key was too small, but at any rate it would not open any of them. However, on the second time round, she came upon a low curtain she had not noticed before, and behind it was a little door about fifteen inches high: she tried the little golden key in the lock, and to her great delight it fitted!"
];

// Random number generated for the text generator
var typechoice = Math.floor((Math.random() * 10) + 0);

//Counts the amount of words typed


// Minutes defined
var minute = 1;

// Seconds defined
var second = 0;

// Counts entered characters
var cpm = 0;

// Counts words per minute
var wpm = 0;



// Displays time
var time = document.getElementById('typing-time');

// Defines Seconds
if (second <= 9) {
time.innerHTML = minute + ':' + '0' + second;
}

// Defines Text Display
var display = document.getElementById('typing-display');
document.getElementById('typing-display').innerText = typingMsg[typechoice] + typingMsg[typechoice].length;

document.getElementById('typing-value').addEventListener('keypress', home);


function home() {
    var spacenum = document.getElementById('typing-value').value.split(" ").length-1;
    // setInterval(startTime, 1000);
    document.getElementById('typing-word').innerHTML = document.getElementById('typing-value').value;
    cpm++;
    document.getElementById('typing-count').innerText = cpm;
    if (document.getElementById('typing-value').value.charAt(spacenum)) {
        document.getElementById('typing-space').innerText = spacenum;
    }
        var txtcheck = typingMsg[typechoice].charAt(counter);
    var usercheck = document.getElementById('typing-value').value.charAt(counter);
    document.getElementById('typing-anon').innerHTML = txtcheck;
    counter++;
}
function startTime() {

    time.innerHTML = minute + ':' + second;
    second--;
    if (second < 0) {
        minute--;
        second = 59;
    }
    if (second <= 9) {
        time.innerHTML = minute + ':' + '0' + second;
    }
}
var counter = 0;
// TODO add a feature which compares typed value to the input value
    // var txtcheck = typingMsg[typechoice].charAt(counter);
    // var usercheck = document.getElementById('typing-value').value.charAt(counter);
    // document.getElementById('typing-anon').innerHTML = txtcheck;
    // if (txtcheck.includes(usercheck)) {
    //     document.getElementById('typing-word').style.color = "green";
    //     counter++;
    // } else {
    //     document.getElementById('typing-word').style.color = "red";
    // }

//     // document.getElementById('typing-word').style.color = "green";