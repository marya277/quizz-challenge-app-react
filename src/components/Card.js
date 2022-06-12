import React from "react";
import "../styles.css";

const Card = ({ questions, currentQuestions, setCurrentQuestions, answerUser, setAnswerUser }) => {
    return (
        <div className='container-md shadow p-3 my-5 bg-body rounded'>
            {questions.map(item => (
                currentQuestions === item.id ? (
                    <div key={item.id}>
                        <div className='card'>
                            <h3 className='card-title text-center bg-info'>{item.category}</h3>
                        </div>
                        <div className='card-body text-center'>
                            {item.question}
                            <div className='d-flex justify-content-md-evenly mt-5'>
                                <button className="myButton" onClick={(event) => {
                                    event.preventDefault(); setCurrentQuestions(currentQuestions + 1); setAnswerUser([...answerUser, {
                                        question: item.question,
                                        answer: "true",
                                        correct_answer: item.correct_answer,
                                        score:1
                                    }])
                                }}>TRUE</button>
                                <button className="myButton" onClick={(event) => {
                                    event.preventDefault(); setCurrentQuestions(currentQuestions + 1); setAnswerUser([...answerUser, {
                                        question: item.question,
                                        answer: "false",
                                        correct_answer: item.correct_answer,
                                        score:0
                                    }])
                                }}>FALSE</button>
                            </div>
                        </div>
                        <div className="text-center">
                            Question {currentQuestions + 1} of  {questions.length}
                        </div>
                    </div>
                ) : ("")

            ))}
        </div>

    )
}
export default Card;