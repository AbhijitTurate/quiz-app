import logo from './logo.svg';
import './App.css';
import Start from './components/Start';
import Quiz from './components/Quiz';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';


function App() {
  const [quiz, setQuiz] = React.useState([])
  const [start, SetStart] = useState(false)

  const [result, setresult] = React.useState("")
  const [finish, setFinish] = useState(false)
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://opentdb.com/api.php?amount=5")
      const data = await res.json()
      const quiz = data.results.map(item => ({

        question: item.question,
        answers: [item.correct_answer, ...item.incorrect_answers],
        correctAnswer: item.correct_answer,
        selectedAnswer: ""
      }))
      console.log(quiz);
      setQuiz(quiz)
    }
    getData()
  }, [])





  function showScore() {
    setFinish(true)
    let score = 0;
    for (const i of quiz) {
      if (i.selectedAnswer === i.correctAnswer) {
        score = score + 1
      }
    }
    console.log(`${score}`)
    setresult(`You scored ${score}  / ${quiz.length} correct answers!`)
  }

  function optionSelection(question, selectedAnswer) {
    console.log(`${selectedAnswer}`);
    setQuiz(
      quiz => {
        return quiz.map(quiz =>
          quiz.question === question ?
            { ...quiz, selectedAnswer: selectedAnswer }
            : quiz
        )
      }
    )
  }
  return (
    <div className="App">

      <Navbar />

      {
        start ? <Quiz
          quiz={quiz}
          optionSelection={optionSelection}
          showScore={showScore}
          finish={finish}
          result={result}
        />
          : <Start props={SetStart} />}
    </div>
  );
}

export default App;
