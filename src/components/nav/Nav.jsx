import react, {useState} from "react";
import { Link } from "react-router-dom";
import './nav.css'

function Nav() {
    return(
    <>
        <div className="navbox">
            <div className="name">
                <h2>StudyMe</h2>
            </div>

            <div className="nav">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/learn'>Learn</Link></li>
                </ul>
            </div>

            <div className="butt">
                <button>Click</button>
            </div>
        </div>
    </>
    )
};

export default Nav;