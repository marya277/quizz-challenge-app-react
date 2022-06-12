import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.css"
const Home = () => {
    return (
        <div className='container-fluid'>
            <div className="container-header">
                <header className='masthead'>
                    <h1><span>Welcome to the Trivia Challenge!</span></h1>
                </header>
                <p className="text-header fw-bold mt-5">You will be presented with 10 True or False questions.</p>
                <p className=' text-header fw-bold'>Can you score 100%?</p>
                <div className='container link-button'>
                <div className="vh-80 row text-center d-flex align-items-center justify-content-md-center ">
                    <div className="col">
                        <Link to='/play' className='linkQuiz'>
                            <button className="btn btn-primary btn-lg rounded-pill">BEGIN</button>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </div>


    )
}
export default Home;