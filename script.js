const quizData = [
    {
        question: 'How old is Arda?',
        a: '10',
        b: '17',
        c: '25',
        d: '21',
        correct: 'd'
    }, {
        question: 'What is the most used prog. langugage in 2022?',
        a: 'Python',
        b: 'Javascript',
        c: 'Java',
        d: 'C#',
        correct: 'a'
    }, {
        question: 'Who is the president of Turkey?',
        a: 'KK',
        b: 'Tayyip',
        c: 'Maklube',
        d: 'Cüneyt Özdemir',
        correct: 'b'
    }, {
        question: 'Which one is the capital of Turkey?',
        a: 'Istanbul',
        b: 'Mersin',
        c: 'Ankara',
        d: 'New York',
        correct: 'c'
    }, {
        question: 'Which one is the hottest city in Turkey',
        a: 'Rize',
        b: 'Istanbul',
        c: 'Sinop',
        d: 'Adana',
        correct: 'd'
    }
]

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
// Soruyu geçebilmek için ilk soru indexini 0 a ayarlıyorum

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    // O anki sorunun ismini geçiriyo listeye
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    // Sağdaki a b c d quizdatanın içindeki şıklar
    
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }

    });

    return answer;

}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();
    
    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
    currentQuiz++;
    
     if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} correctly! </h2>
        <button onClick="location.reload()">Reload</button>`;
        // location.reload() metodu testi baştan başlatıyor
        // The reload() method reloads the current document.
        alert("All questions have been answered!");
    }
}
   

});