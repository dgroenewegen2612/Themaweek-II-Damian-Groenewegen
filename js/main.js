console.log('main loaded')
let quizScore=0;
let endScore= document.querySelector('.end-score');

const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
        correctAnswer: 'Paris'
    },
    {
        question: 'What is the capital of Spain?',
        options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
        correctAnswer: 'Madrid'
    },
    {
        question: 'What is the capital of Italy?',
        options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
        correctAnswer: 'Rome'
    },
    {
        question: 'What is the capital of Germany?',
        options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
        correctAnswer: 'Berlin'
    }

    // Add more questions and answers as needed
];

let currentQuestion = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQuizData = quizData[currentQuestion];

    questionElement.textContent = currentQuizData.question;

    optionsElement.innerHTML = '';
    currentQuizData.options.forEach((option) => {
        const li = document.createElement('li');
        li.textContent = option;
        optionsElement.appendChild(li);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('li.selected');
    if (!selectedOption) return;

    const userAnswer = selectedOption.textContent;
    const currentQuizData = quizData[currentQuestion];

    if (userAnswer === currentQuizData.correctAnswer) {
        // Handle correct answer
        console.log('Correct!');
        quizScore +=1;
    } else {
        // Handle incorrect answer
        console.log('Incorrect!');
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        // Display quiz results or navigate to a new page
        endScore.innerHTML+=quizScore +"/"+ "4";
    }
}

document.getElementById('options').addEventListener('click', (event) => {
    const selectedOptions = document.querySelectorAll('li');
    selectedOptions.forEach((option) => {
        option.classList.remove('selected');
    });

    const selectedOption = event.target;
    selectedOption.classList.add('selected');
});

displayQuestion();