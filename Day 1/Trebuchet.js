// gets input from input.txt and returns contents split by line in array
function getInput() {
    const fs = require('fs');
    const input = fs.readFileSync('input.txt', 'utf8');
    return input.split('\n');
}


// gets and sums calibration values in input array
function sumValues() {
    const input = getInput();
    let sum = 0;
    input.forEach((str) => {
        let first = 0, last = 0;
        // gets first and last digit in string
        for (let i = 0; i < str.length; i++) {
            if (!isNaN(str[i])) {
                first = str[i];
                break;
            }
        }
        for (let i = str.length - 1; i >= 0; i--) {
            if (!isNaN(str[i])) {
                last = str[i];
                break;
            }
        }
        sum += parseInt(first+last);
        console.log("Calibration value of line " + str + " is " + (first+last) + ", sum is " + sum + ".");
    });
    return sum;
}

console.log("Sum of all calibration values is " + sumValues());
