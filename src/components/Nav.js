import React from 'react'

const Nav = () => {
    return (
        <nav className="navbar">
         <div classname="container">
            <div className="navbar__container">
             <ul className="navbar__left">
             <div className="navbar__left-logo">
                <img src="" alt="logo"/>
                </div>
             </ul>
             <ul className="navbar__right">
                <li><a href="">Home</a></li>
                <li><a href="">Interests</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Portfolio</a></li>
                
                <li><a href="">Contact</a></li>
            </ul>
         </div>
         </div>
     </nav>
    )
}

export default Nav
