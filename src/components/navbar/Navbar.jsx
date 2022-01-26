import React, {useEffect, useState} from 'react';
import "./Navbar.css"
import {SiAnaconda} from "react-icons/si";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import Button from "../UI/button/Button";
import AOS from "aos";
import "aos/dist/aos.css";
const Navbar = () => {
    useEffect(()=>{
        AOS.init({
            duration: 1000
        })
    },[])
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className="navbar container">
            <div className="logo">
                <SiAnaconda color="#fff" size={33}/>
                <p className="logo-text">
                    Social<span>X</span>
                </p>
            </div>
            <menu>
                <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"} >
                    <li><a href="#">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#download">Download</a></li>
                    <li><a href="#subscribe">Subscribe</a></li>
                    <li className="nav-btn">
                        {/*<a href="#" className="btn btn-dark">Get Started</a>*/}
                        <Button href="#faq" btnClass="btn-dark" text="Learn More" />
                    </li>
                </ul>
            </menu>
            <div className="menu-icons" onClick={()=>setShowMenu(!showMenu)}>
                {
                    showMenu ? <RiCloseLine color="#fff" size={30}/> : <AiOutlineBars color="#fff" size={27}/>
                }
            </div>
        </nav>
    );
};

export default Navbar;