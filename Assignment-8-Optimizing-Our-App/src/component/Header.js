import { useState } from "react";
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline";

const Title = () => {
    return ( <img className='logo'
        src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaLInYt6cOMzDxd65_jaIl7vY-657uyA4qQ&s" alt="logo" />
    );
};



const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();

    return(
        <div className="header">
        <Title />
        <div className="nav-items" >
        <ul>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/about"> About </Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/instamart">Instamart</Link></li>
            <li>Cart</li>
        </ul>
        </div>
        <h1>{isOnline ? "Online" : "Offline"}</h1>
        {isLoggedIn ? (
            <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>Logout</button>) : 
        <button className="logout-btn" onClick={() => setIsLoggedIn(true)}>Login</button>}
        </div>
    )
};

export default Header;