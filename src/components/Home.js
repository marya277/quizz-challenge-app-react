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
                <p className="text-header">You will be presented with 10 True or False questions.</p>
                <p className=' text-header'>Can you score 100%?</p>
        </div>
        <div className='container'>
        <div class="row w-100">
            <div class="col">
                <Link to='/play' className='linkQuiz'>
                    <button className="btn btn-primary btn-lg rounded-pill">BEGIN</button>
                </Link>
            </div>
        </div>
    </div>
    </div>
    )
}
export default Home;