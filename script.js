const quizData = [
    {
        question: "1) Whose death sparked World War I?",
        a: "A) Kaiser Wilhelm",
        b: "B) Archbishop Ussher",
        c: "C) Queen Victoria",
        d: "D) Archduke Franz Ferdinand",
        correct: "d",
        info: "On June 28, 1914, Archduke Franz (Francis) Ferdinand of Austria-Hungary was assassinated. His murder led to World War I.",
    },
    {
        question: "2) Which of these nations was neutral in World War I?",
        a: "A) Germany",
        b: "B) Norway",
        c: "C) Italy",
        d: "D) England",
        correct: "b",
        info: "Norway was neutral, meaning that it did not take sides, during World War I (1914–18). The country did not want to enter World War II (1939–45) either, but Nazi Germany invaded it in 1940.",
    },
    {
        question: "3) World War I ended in:",
        a: "A) 1925",
        b: "B) 1918",
        c: "C) 1920",
        d: "D) 1915",
        correct: "b",
        info: "World War I officially ended at 11 AM on November 11 (11/11), 1918."
    },
    {
        question: "4) Which of these ships was sunk by a German submarine?",
        a: "A) Arizona",
        b: "B) Lusitania",
        c: "C) Titanic",
        d: "D) Andrea Doria96",
        correct: "b",
        info: "The British passenger ship Lusitania was sunk by a German submarine off the coast of Ireland in 1915, causing great loss of life.",
    },
    {
        question: "5) How many republics made up the former Soviet Union?",
        a: "A) 15",
        b: "B) 12",
        c: "C) 20",
        d: "D) 10",
        correct: "a",
        info: "The Soviet Union, at its end, was made up of 15 republics. The largest and most powerful was the Russian Soviet Federated Socialist Republic, now Russia.",
    },
];
const quiz = document.getElementById("quiz");
const quiz_question = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const answerEls = document.querySelectorAll(".answer");
const info = document.getElementById('list');
let score = 0;
let quizDataNum = 0;
dataLoad();
function dataLoad(){
    deselectAnswer();
    const DataQuestion = quizData[quizDataNum];
    
    // console.log(DataQuestion)
    quiz_question.innerText = DataQuestion.question;
    a_text.innerText = DataQuestion.a;
    b_text.innerText = DataQuestion.b;
    c_text.innerText = DataQuestion.c;
    d_text.innerText = DataQuestion.d;
  
}

function getSelected(){
    
    const answerEls = document.querySelectorAll('.answer');
    let j = undefined;
    let answer =undefined;
    answerEls.forEach((answerEl) => {  
        console.log(answerEl.id + 'before')
        if (answerEl.checked){
            answer = answerEl.id
           console.log(answerEl.id + 'after')
        }
    }
    );
    return answer;
}
function deselectAnswer(){
    //deselect previous selected radio button
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    })
}

const inf = ()=>(
  
    quizData.map(ino=>{ return (`
  
        <li id= "new">
       ${ino.info} 
    </li>
   
       `) })
  
)

submit.addEventListener('click', function (){
    
    const answer = getSelected();
  
    console.log(answer)
    if(answer){
        if (answer == quizData[quizDataNum].correct){
            score++;
        }
        quizDataNum++;
        if ( quizDataNum< quizData.length){
            dataLoad();
           
        }else{
            // alert('you have completed the quiz congrats')
            quiz.innerHTML = `<h1> You have correctly answered ${score} out of 5 questions</h1>`
        
           info.innerHTML =  inf().join('');
          
        };
            
        }

    
})
