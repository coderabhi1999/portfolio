import React from 'react'
import {FaFacebookF,FaTwitter,FaLinkedinIn,FaPlay,FaInstagram  } from "react-icons/fa"
const Banner = () => {
    const[state]= React.useState({title:"Hi I'm Abhishek Maurya",text:'who loves to explore and design websites through his own ideas.'});
    return (
        <header className="header">
           <div className="container">
             <div className="row">
                <div className="col-6">
                <div className="header__content">
                  <div className="header__section">
                    <ul className="header__ul">
                      <a href="https://www.facebook.com/abhishek.maurya.7543653/"><FaFacebookF /></a>
                      <a href=""><FaTwitter/> </a>
                      <a href="https://www.linkedin.com/in/abhishek-maurya-333276190/"> <FaLinkedinIn/></a>
                      <a href="https://www.instagram.com/_loosers__00/"> <FaInstagram/></a>
                   </ul>
                   <h1>{state.title}</h1>
                   <p>{state.text}</p>
                    <div className="header__buttons">
                      
                      <a href=""className=" btn btn-outline">
                        My Portfolio
                        </a>&nbsp;&nbsp;&nbsp;
                      
                        <a href=""className=" btn btn-smart">
                           <FaPlay className="play"/>
                        </a>
                     </div>
                     </div>
                    </div>
                   </div>
                   
                </div>
           </div>
              
             
        </header>);
    
};

export default Banner;
