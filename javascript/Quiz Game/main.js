let currentQuestionIndex = 0;
let score = 0;
let timeleft;
let timer;

const questions = [
    {
        number: 1,
        question: "What is 2+2?",
        options: ['1', '2', '3', '4'],
        correct: '4'
    },
    {
        number: 2,
        question: "What is 2-2?",
        options: ['0', '2', '3', '4'],
        correct: '0'
    },
    {
        number: 3,
        question: "What is 2/2?",
        options: ['1', '2', '3', '4'],
        correct: '1'
    }
]



const showQuestions = ()=>{
    clearInterval(timer);
    timeleft = 5

    const q = questions[currentQuestionIndex];
    const mainQn = document.getElementById("main-qn")
    mainQn.textContent = q.question;


    const options = document.querySelector(".answers");
    options.innerHTML = ""
    
    const scoreHolder = document.querySelector(".score-number")
    scoreHolder.innerHTML = score;

    const qnNumber = document.querySelector(".qnNumber")
    qnNumber.innerHTML = `Question ${q.number}/${questions.length}`

    q.options.forEach(option =>{
        const btn = document.createElement("button")
        btn.textContent = option
        btn.onclick = ()=> {
            checkAns(option)
        }
        options.appendChild(btn)
    })

    startTimer();
}

const checkAns = (answer)=>{
    clearInterval(timer)
    const q = questions[currentQuestionIndex];
    const correctAns = q.correct;

    if(answer === correctAns){
        score++;
        updateScore(score);
    }else{
        endQuiz();
    }
    nextQuestion();

}


const updateScore = (score)=>{
    const scoreHolder = document.querySelector(".score-number")
    scoreHolder.innerHTML = score;
}

const nextQuestion = ()=>{
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestions()
    }else{
        endQuiz()
    }
}



const endQuiz = ()=>{
    const block = document.querySelector(".block")
    block.innerHTML = `
    <h1>Quiz Finished</h1>
    <p>Your score: ${score}/${questions.length} </p>
    `
}

const nextButton = document.querySelector('.stats button')
nextButton.addEventListener("click", ()=>{
    nextQuestion();
})

const startTimer =()=>{
    const time = document.getElementById("time")
    time.textContent = timeleft

    timer = setInterval(()=>{
        timeleft--;
        time.textContent = timeleft

        if(timeleft<=0){
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000)
}


showQuestions()