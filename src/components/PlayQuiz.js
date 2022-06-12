import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import "../styles.css"
import Card from './Card';
import Score from './Score';
const PlayQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [answerUser, setAnswerUser] = useState([])


  const API_URL = "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean#";




  useEffect(() => {
    axios.get(API_URL)
      .then(result => {
        const data = result.data
        const fechtData = data.results
        let newArray = [];
        fechtData.forEach(element => {
          //asigne id a la Data  en un nuevo array
          newArray.push({ ...element, id: fechtData.indexOf(element) })
        });
        console.log(newArray)
        setQuestions(newArray)
      })
      .catch(error => { console.log(error) })

  }, [])
  if (currentQuestions < 10) {
    return (
      <div className='container'>
        <Card questions={questions} currentQuestions={currentQuestions} setCurrentQuestions={setCurrentQuestions} answerUser={answerUser} setAnswerUser={setAnswerUser} />
      </div>

    );
  } else {
    return (
      <Score answerUser={answerUser} />
    )

  }
}

export default PlayQuiz;