import React from 'react';
import { Link } from 'react-router-dom';

const Score = ({ answerUser }) => {
    const scoreTotal = answerUser.reduce(
        (previousValue, currentValue) => `${parseInt(previousValue) + currentValue.score}`,
        0
    );
    return (
        <div className='container-md shadow p-3 my-5 bg-body rounded'>
            <h2 className='text-center text-danger'> You scored {scoreTotal}/ 10</h2>
            {answerUser.map(item => (
                <div className='row d-grid'>
                    <div className='border border-info my-2'>
                        <div>
                        <span className='text-success fs-2'>{item.answer === "true" ? "+" : "-"}</span>
                            {item.question}
                        </div>
                    </div>

                </div>

            ))


            }
            <div className='d-flex justify-content-center align-items-center'>
            <Link to='/' className='linkback'>
                <button className="btn btn-primary btn-lg rounded-pill">PLAY AGAIN</button>
            </Link>
            </div>
           
        </div>
    )
}
export default Score;