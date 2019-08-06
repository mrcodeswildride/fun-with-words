var wordsInput = document.getElementById("words");

var reverseButton = document.getElementById("reverse");

var characterInput = document.getElementById("character");
var textInput = document.getElementById("text");
var replaceButton = document.getElementById("replace");

var pigLatinButton = document.getElementById("pigLatin");

reverseButton.addEventListener("click", reverse);
replaceButton.addEventListener("click", replace);
pigLatinButton.addEventListener("click", pigLatin);

wordsInput.focus();

function reverse() {
    var input = wordsInput.value.trim();
    var output = "";

    for (var i = input.length - 1; i >= 0; i--) {
        output += input[i];
    }

    wordsInput.value = output;
    wordsInput.focus();
}

function replace() {
    var input = wordsInput.value;
    var output = "";

    for (var i = 0; i < input.length; i++) {
        if (input[i] == characterInput.value) {
            output += textInput.value;
        }
        else {
            output += input[i];
        }
    }

    wordsInput.value = output;
    wordsInput.focus();
}

function pigLatin() {
    var words = wordsInput.value.trim().split(" ");
    var output = "";

    for (var i = 0; i < words.length; i++) {
        var word = words[i];

        if (word.length > 0) {
            var firstCharacter = word[0].toLowerCase();

            if (firstCharacter == "a" || firstCharacter == "e" || firstCharacter == "i" || firstCharacter == "o" || firstCharacter == "u") {
                output += word + "ay";
            }
            else {
                for (var j = 1; j < word.length; j++) {
                    output += word[j];
                }

                output += word[0] + "ay";
            }

            if (i != words.length - 1) {
                output += " ";
            }
        }
    }

    wordsInput.value = output;
    wordsInput.focus();
}
