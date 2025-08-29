// Part 1: Variables & Conditionals

const numberInput = document.getElementById('numberInput');
const checkButton = document.getElementById('checkButton');
const numberResult = document.getElementById('numberResult');

checkButton.addEventListener('click', () => {
    const num = Number(numberInput.value);

    if (num >= 1 && num <= 10) {
        numberResult.textContent = `Great! ${num} is between 1 and 10.`;
    } else {
        numberResult.textContent = `Oops! ${num} is not between 1 and 10.`;
    }
});

// Part 2: Functions

// Function 1: sum two numbers
function sum(a, b) {
    return a + b;
}

const sumButton = document.getElementById('sumButton');
const functionResult = document.getElementById('functionResult');

sumButton.addEventListener('click', () => {
    const result = sum(3, 7);
    functionResult.textContent = `3 + 7 = ${result}`;
});

// Function 2: greet user
function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

const greetButton = document.getElementById('greetButton');

greetButton.addEventListener('click', () => {
    const name = prompt("What's your name?");
    alert(greet(name));
});

// Part 3: Loops

const numberList = document.getElementById('numberList');
const evenList = document.getElementById('evenList');

// Loop 1: for loop
for (let i = 1; i <= 5; i++) {
    const li = document.createElement('li');
    li.textContent = i;
    numberList.appendChild(li);
}

// Loop 2: while loop
let j = 2;
while (j <= 10) {
    const li = document.createElement('li');
    li.textContent = j;
    evenList.appendChild(li);
    j += 2;
}

// Part 4: DOM Manipulation

const toggleButton = document.getElementById('toggleButton');
const highlightText = document.getElementById('highlightText');

toggleButton.addEventListener('click', () => {
    highlightText.classList.toggle('highlight');
});

const addElementButton = document.getElementById('addElementButton');
const dynamicContent = document.getElementById('dynamicContent');

addElementButton.addEventListener('click', () => {
    const p = document.createElement('p');
    p.textContent = "This paragraph was added dynamically!";
    dynamicContent.appendChild(p);
});
