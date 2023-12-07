
// gets input from input.txt and returns contents split by line in array
function getInput() {
    const fs = require('fs');
    const input = fs.readFileSync('input.txt', 'utf8');
    return input.split('\n');
}

const wordNumPairs = {
    "zero": "0",
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five" : "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9"
}

// gets and sums calibration values in input array
function sumValues() {
    const input = getInput();
    let sum = 0;
    input.forEach((str) => {
        // guard clause for empty string
        if (str === "") return;

        // gets first and last digit in string using regex to match digits or word digits
        let digits = str.match(/\d|zero|one|two|three|four|five|six|seven|eight|nine/g);
        let revDigits = str.split("").reverse().join("").match(/\d|enin|thgie|neves|xis|evif|ruof|eerht|owt|eno|orez/g);
        let first = digits[0];
        let last = revDigits[0].split("").reverse().join("");
        console.log(sum + " || " + first + " " + str + " || " + last + " " + str.split("").reverse().join(""));

        // add digits to sum  and convert to number if not already
        sum += parseInt(
            ((isNaN(first))? wordNumPairs[first] : first)
            +
            ((isNaN(last))? wordNumPairs[last] : last)
        );
    });
    return sum;
}



console.log("Sum of all calibration values is " + sumValues());