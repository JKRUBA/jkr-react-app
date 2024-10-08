import React, { useState } from 'react'
import './App.css'

const App = () => {
const questions=[
  {
    questionText: 'In what year did the Great October Socialist Revolution take place?',
    answerOptions: [{answerText:'1917',isCorrect:true},
      {answerText:'1923',isCorrect:false},
      {answerText:'1914',isCorrect:false},
      {answerText:'1920',isCorrect:false}
  ]
  },
  {questionText: 'What is the largest lake in the world?',
    answerOptions: [{answerText:'Caspian Sea',isCorrect:false},
      {answerText:'Baikal',isCorrect:true},
      {answerText:'Lake Superior',isCorrect:false},
      {answerText:'Ontario',isCorrect:false}]
    },
  {questionText: 'Which planet in the solar system is known as the “Red Planet”?',
    answerOptions: [{answerText:'Venus',isCorrect:false},
      {answerText:'Earth',isCorrect:false},
      {answerText:'Mars',isCorrect:true},
      {answerText:'Jupiter',isCorrect:false}]},
  {questionText: 'Who wrote the novel “War and Peace”?',
    answerOptions: [{answerText:'Anton Chekhov',isCorrect:false},
      {answerText:'Fyodor Dostoevsky',isCorrect:false},
      {answerText:'Leo Tolstoy',isCorrect:true},
      {answerText:'Ivan Turgenev',isCorrect:false}]
  },
  {questionText: 'What is the capital of Japan?',
    answerOptions: [{answerText:'Beijing',isCorrect:false},
      {answerText:'Tokyo',isCorrect:true},
      {answerText:'Seoul',isCorrect:false},
      {answerText:'Bangkok',isCorrect:false}]
  },
  {questionText: 'Which river is the longest in the world?',
    answerOptions: [{answerText:'Amazon',isCorrect:false},
      {answerText:'Mississippi',isCorrect:false},
      {answerText:'Nile',isCorrect:true},
      {answerText:'Yangtze',isCorrect:false}]
  },
  {questionText: 'What gas is used to extinguish fires?',
    answerOptions: [{answerText:'Oxygen',isCorrect:false},
      {answerText:'Nitrogen',isCorrect:true},
      {answerText:'Carbon dioxide',isCorrect:false},
      {answerText:'Hydrogen',isCorrect:false}]
  },
  {questionText: 'What animal is the national symbol of Australia?',
    answerOptions: [{answerText:'Kangaroo',isCorrect:true},
      {answerText:'Koala',isCorrect:false},
      {answerText:'Emu',isCorrect:false},
      {answerText:'Crocodile',isCorrect:false}]
  },
  {questionText: 'Which is the largest island?',
    answerOptions: [{answerText:'New Guinea',isCorrect:false},
      {answerText:'Andaman Nicobar',isCorrect:false},
      {answerText:'Greenland',isCorrect:true},
      {answerText:'Hawaii',isCorrect:false}]
  },
  {questionText: 'What is the most popular bread in France?',
    answerOptions: [{answerText:'Brioche',isCorrect:false},
      {answerText:'Baguette',isCorrect:true},
      {answerText:'White bread',isCorrect:false},
      {answerText:'Ciabatta',isCorrect:false}]
  }
]
const[currentQuestion,setCurrentquestion]=useState(0);
const[showscore,setShowscore]=useState(false);
const[score,setScore]=useState(0);

const handlesubmit=(isCorrect)=>
{
if(isCorrect === true)
{
setScore(score+1)
}
else
{
  setScore(score-0.5)
}
const nextQuestion=currentQuestion+1;
if(nextQuestion < questions.length)
{
  setCurrentquestion(nextQuestion)
}
else{
  setShowscore(true)
}
}
  return (
    <div>

<h1 className='heading'>Quiz Program</h1>
      <div className="app">
        {
          showscore ? (
            <div className='score-section'>
              You scored {score} out of {questions.length}
              </div>
 ) :
 
 ( <>
    <div className='Question-section'>
      <div className='Question-count'>
      <h1>Questions {currentQuestion+1}/{questions.length}</h1>
      </div>
      <div className='Question-text'>
        {questions[currentQuestion].questionText}
        </div>
    </div>
    <div className='Answer-section'>
      {
        questions[currentQuestion].answerOptions.map((answerOptions)=>
        (
          <button onClick={()=>handlesubmit(answerOptions.isCorrect)}>
            {
              answerOptions.answerText
            }
          </button>
        ))
      }
    </div>
    
</>

 )
        }
      </div>

    </div>
  )
}

export default App