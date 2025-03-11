
let points = 0;

function askQuestion(question, answer) {
    let userAnswer = prompt(`${question}. You have ${points} points`);
    if (answer.toString() === userAnswer) {
        console.log("correct");
        points += 10;
    } else {
        console.log("incorrect");
        points -= 5;
    }
}

// 8 is not "8"

askQuestion("Tomatoes are fruits, not vegetables", false);
askQuestion("Spanish flag color Blue", false);
askQuestion("Fishes have only three seconds of memory", false);
askQuestion("The Great Wall of China is the only man made structure visible from space The Great Wall of China", true);
askQuestion("Feeling sleepy need to sleep", true)

alert(`You got ${points} points`);


