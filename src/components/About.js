import React from 'react'

const About = () => {

   const[state]= React.useState([
   
    {id:1,title:'Name',text:'Abhishek Maurya'},
    {id:2,title:'Email',text:'abhishekmaurya88971@gmail.com'},
    {id:3,title:'Phone',text:'6388917589'},
    {id:4,title:'LinkedIn',text:'https://www.linkedin.com/in/abhishek-maurya-333276190/'},


   ]) 
    

    return (
        <div className="about">
          <div className="container">
              <div className="common">
                 <h1 className="mainHeader">About Me</h1>
                  <p className="mainContent">
                  I have a sidebar components whose list items are \
                  generated inside of a map function (movie genres fetched from an api). \
                  I would like to have a different icon next to each of the movie genres \
                  but have been unable to figure out a way to \
                  create a different for each run of the map function./
                  </p>
                  <div className="commonBorder"></div>
            </div>
                

                <div className="row h-650 alignCenter">
                      <div className ="col-6">
                         <div className="about__img">
                            <img src="\images\IMG_6389-removebg.png" alt="man" />
                         </div>
                       </div>

                       <div className ="col-6">
                       <div className="about__info">
                       <h1> Hi There</h1>
                          <div className="about__info-p1">
                          I have a sidebar components whose list items are \
                          generated inside of a map function (movie genres fetched from an api). \
                          I would like to have a different icon next to each of the movie genres \
                          but have been unable to figure out a way to \
                          create a different for each run of the map function./
                          </div>

                          <div className="about__info-p2">
                             bbdjsbhfjhbsjhfbjshbfjb jfbjsbfjbsf
                             fbsbfjsbhfjbhskfbsfdnfjnfjnjfnjen
                             ffnjjebjfbjefe.
                          </div>
                        <div className="info__contacts">
                          <div className="row">
                          {state.map(info =>(
                            <div className="col-6">
                              <strong>{info.title}</strong>
                              <p>{info.text}</p>

                            </div>
                          ))}
                       </div>
                       </div>
                       </div>
                       </div>


                </div>
            </div>
        </div>
    )}

export default About
