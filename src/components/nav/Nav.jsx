import react, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import './nav.css'

function Nav() {

    const navigate = useNavigate();

    function setPage(page) {
        navigate(page);
    }

    return(
    <>
        <div className="pad">
            <div className="navbox">
                <div className="name">
                    <h2 onClick={() => setPage('/')}>StudyMe</h2>
                </div>

                <div className="nav">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/learn'>Learn</Link></li>
                    </ul>
                </div>

                <div className="butt">
                    <button onClick={() => setPage('Stats')}>Stats</button>
                </div>
            </div>
        </div>
    </>
    )
};

export default Nav;