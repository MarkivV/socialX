import React, {useEffect} from 'react';
import "./Footer.css";
import logo from "../../assets/logo.png";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaFax,
    FaEnvelope,
    FaGlobe,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
    useEffect(()=>{
        AOS.init({
            duration: 1000
        })
    },[])
    return (
        <footer id="footer" >
            <div className="container footer" data-aos="fade-up"
                 data-aos-anchor-placement="top-bottom">
                <div className="footer-box">
                    <h4>Useful links</h4>
                    <div className="footer-links">
                        <a href="#">&bull; Support</a>
                        <a href="#">&bull; About</a>
                        <a href="#">&bull; Learn</a>
                        <a href="#">&bull; Hosting</a>
                        <a href="#">&bull; Messanger</a>
                    </div>
                </div>
                <div className="footer-box">
                    <h4>Support</h4>
                    <div className="footer-links">
                        <a href="#">&bull; Support</a>
                        <a href="#">&bull; About</a>
                        <a href="#">&bull; Learn</a>
                        <a href="#">&bull; Hosting</a>
                        <a href="#">&bull; Messanger</a>
                    </div>
                </div>
                <div className="footer-box">
                    <h4>Contact Us</h4>
                    <div className="footer-contact u-text-small">
                        <p>
                            <FaMapMarkerAlt /> &nbsp; Address: United States.
                        </p>
                        <p>
                            <FaPhoneAlt /> &nbsp; Phone: +1230 123 1231.
                        </p>
                        <p>
                            <FaFax /> &nbsp; Fax: +12342762178
                        </p>
                        <p>
                            <FaEnvelope /> &nbsp; Email: info@socialx.com
                        </p>
                        <p>
                            <FaGlobe /> &nbsp; Website: www.socialx.com
                        </p>
                    </div>
                </div>
                <div className="footer-box">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;