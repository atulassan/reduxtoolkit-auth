
import { Link } from 'react-router-dom';

const Navi = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Brick Calcy</Link></li>
                <li><Link to="/usereducer">UseReducer</Link></li>
                <li><Link to="/blog">blog</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/redux">Redux</Link></li>
                <li><Link to="/products">products</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/tab">Tab</Link></li>
            </ul>    
        </div>
    )
}

export default Navi;