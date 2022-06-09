import { Link } from 'react-router-dom';
const Score = () => {
    return (
        <div className="container-score">
            <h2>aqui va Score</h2>
            <Link to='/' className='linkback'>
                <button className="btn btn-primary btn-lg rounded-pill">Home</button>
            </Link>
        </div>
    )
}
export default Score;