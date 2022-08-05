const startButton=document.getElementById('start-btn')
const nextButton=document.getElementById('next-btn')
const questionContainerElement=document.getElementById('question-container')
const questionElement=document.getElementById('question')
const answerButtonsElement=document.getElementById('answer-buttons')
let shuffledQuestions,currentQuestionIndex
startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',()=>{
currentQuestionIndex++
setNextQuestion()}
)
function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions=questions.sort(()=>Math.random()-.5)
    currentQuestionIndex=0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question){
    questionElement.innerText=question.question
    question.answers.forEach(answer =>{
        const button=document.createElement('button')
        button.innerText=answer.text
        button.classList.add('btn')
        if(answer.correct){
        button.dataset.correct=answer.correct
    }
    button.addEventListener('click',selectAnswer)
    answerButtonsElement.appendChild(button)
    })
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
function selectAnswer(e){
    const selectedButton=e.target
    const correct=selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffledQuestions.length>currentQuestionIndex+1){
        nextButton.classList.remove('hide')

}else{
    startButton.innerText='restart'
    startButton.classList.remove('hide')
    /*const finish=document.createElement('button')
    finish.innerText='finish'
    finish.classList.add('btn')*/

}

}
function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){element.classList.add('correct')}
    else{element.classList.add('wrong')}
}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions=[
    {
    question:'Which of the following epidermal layer is not found in thin skin?',
    answers:[
        {text:'Stratum Corneum ', correct:false},
        {text:' Stratum lucidum', correct:true},
        {text:'Stratum spinosum', correct:false},
        {text:'Stratum granulosum', correct:false}
    ]
},
{
question:'Which of the following is not the function of skin?',
answers:[
    {text:'calcium production', correct:true},
    {text:'PROTECTION', correct:false},
    {text:'temp regulation', correct:false},
    {text:'excretion of wastes', correct:false}
]
},
{
question:'Which of the following layer is also known as stratum germinativum?',
answers:[
    {text:'stratum corneum', correct:false},
    {text:' stratum Basale', correct:true},
    {text:'stratum lucidum', correct:false},
    {text:' stratum spinosum', correct:false}
]
},
{
question:' Which of the following cells are responsible for our skin color?',
answers:[
    {text:'melanocytes ', correct:true},
    {text:' keratinocytes', correct:false},
    {text:' Markel cells ', correct:false},
    {text:' Langerhans cells', correct:false}
]
},
{
question:'Which of the following statement is not true?',
answers:[
    {text:'Keratinocytes protects skin and muscles from heat and chemicals', correct:false},
    {text:'papillary region is responsible for the figure prints', correct:true},
    {text:'Markel cells are used for touch sensations', correct:false},
    {text:'Apoptosis takes place in stratum granulosum', correct:false}
]
},
{
question:'Which of the following is the feature of reticular region?',
answers:[
    {text:'hair follicles ', correct:false},
    {text:'epidermal ridges', correct:false},
    {text:'Sebaceous glands ', correct:false},
    {text:'all of the above', correct:true}
]
},
{
question:'What is the function of Meissner corpuscles present in the papillary region?',
answers:[
    {text:'touch sensations  ', correct:true},
    {text:' Sensation of warmth', correct:false},
    {text:'pain sensations ', correct:false},
    {text:'sensation of coolness', correct:false}
]
},
{
question:'What is the main function of Pacinian corpuscles present in the hypodermis?',
answers:[
    {text:' tickling sensations  ', correct:false},
    {text:'  Itching sensation', correct:false},
    {text:'blood supply to the hypodermis ', correct:false},
    {text:' none of the above', correct:true}
]
},
{
question:'What skin condition is caused by poxvirus?',
answers:[
    {text:' Verruca ', correct:false},
    {text:'Cellulitis', correct:false},
    {text:'Impetigo ', correct:false},
    {text:' Molluscum contagiosum', correct:true}
]
}
]
