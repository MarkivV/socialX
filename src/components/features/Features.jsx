import React, { useEffect } from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../assets/phone-features.png";
import Feature from "./Feature";
import {FeatureList} from "./data";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
    useEffect(()=>{
        AOS.init({
            duration: 1000
        })
    },[])
    return (
        <section id="features">
            <div className="container features" >
                <div className="title" data-aos="zoom-in-down">
                    <BsFillBookmarkStarFill color="orangered" size={30}/>
                    <h2>Core Features</h2>
                    <p className="u-text-small u-text-dark">
                        SocialX app has Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Sequi labore, harum officiis error quia cupiditate?
                    </p>
                </div>
                <div className="features-content">
                    <div className="features-left" data-aos="fade-right"
                         data-aos-offset="300"
                         data-aos-easing="ease-in-sine">
                        <img src={phoneFeatures} alt="phoneFeatures"/>
                    </div>
                    <div className="features-right" data-aos="fade-left"
                         data-aos-offset="300"
                         data-aos-easing="ease-in-sine">
                        {FeatureList.map((feature)=>{
                            return(
                                <Feature key={feature.id} icon={feature.icon} heading={feature.heading} text={feature.text}/>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;