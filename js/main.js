console.log('main loaded')

const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
        correctAnswer: 'Paris'
    },
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
    } else {
        // Handle incorrect answer
        console.log('Incorrect!');
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        // Display quiz results or navigate to a new page
        console.log('Quiz completed!');
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