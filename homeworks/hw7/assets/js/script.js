function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let avg = sum/3;
    return avg;
}

function createSentence(num, noun){
    let ans = "On average, a Berkeley student has " + num + " " + noun + "s.";
    return ans;
}

function getRandomNum(max){
    return Math.floor(Math.random()*max);
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);
let avg = (x + y + z)/3;
let sentence = createSentence(avg, "dog")

console.log(sentence);