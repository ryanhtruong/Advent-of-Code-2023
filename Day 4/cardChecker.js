// gets input from input.txt and returns contents split by line in array
function getInput() {
    const fs = require('fs');
    const input = fs.readFileSync('input.txt', 'utf8');
    return input.split('\n');
}

function getCardNumbers() {
    const cards = getInput();
    let winningNums = [];
    let cardNums = [];

    for (let i = 0; i < cards.length - 1; i++) { 
        winningNums[i] = {};
        cardNums[i] = {};
        
        const card = cards[i].split(':')[1];
        const nums = card.split('|');

        nums[0].split(' ').forEach(
            num => winningNums[i][num] = num
        );

        nums[1].split(' ').forEach(
            num => cardNums[i][num] = num
        );
    }

    return [winningNums, cardNums];
}

function checkCards() {
    const [winningNums, cardNums] = getCardNumbers();
    let score = 0;
    for (let i = 0; i < winningNums.length; i++) {
        let cardScore = 0;
        for (num in cardNums[i]) {
            if (winningNums[i][num]) {
                cardScore = (cardScore != 0)? cardScore * 2 : 1;
            }
        }
        score += cardScore;
        console.log(`Card ${i + 1} has score: ${cardScore}. Total score: ${score}.`);
    }
    return score;
}

console.log("Total score of card pile: " + checkCards() + " points");