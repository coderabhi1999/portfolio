import React from 'react'
import { FaGithub,FaCamera,FaCodepen,FaPenAlt,FaPlane,FaEdit} from "react-icons/fa";

const Interests = () => {
    const[state]= React.useState([
     
    {
        id:1,
        icon:<FaGithub />,
        heading:"Web Design",
        text:"lkdnn ldnjd jbfhbj jnfksbk jsbfjsd\
               nbfksbdf kjbndfkj djfbksjf",

     },

     {
        id:2,
        icon:<FaCamera/>,
        heading:"Photography",
        text:"lkdnn ldnjd jbfhbj jnfksbk jsbfjsd\
               nbfksbdf kjbndfkj djfbksjf",

     },

     {
        id:3,
        icon:<FaPenAlt/>,
        heading:"Content-Writer",
        text:"lkdnn ldnjd jbfhbj jnfksbk jsbfjsd\
               nbfksbdf kjbndfkj djfbksjf",

     },

     {
        id:4,
        icon:<FaPlane/>,
        heading:"Travel",
        text:"lkdnn ldnjd jbfhbj jnfksbk jsbfjsd\
               nbfksbdf kjbndfkj djfbksjf",

     },

     {
        id:5,
        icon:<FaCodepen/>,
        heading:"Coding",
        text:"lkdnn ldnjd jbfhbj jnfksbk jsbfjsd\
               nbfksbdf kjbndfkj djfbksjf",

     },

     {
        id:6,
        icon:<FaEdit/>,
        heading:"Photo Editing",
        text:"lkdnn ldnjd jbfhbj jnfksbk jsbfjsd\
               nbfksbdf kjbndfkj djfbksjf",

     },

])
    
    
    
    return (
        <div className="interests">
          <div className="container">
             <div className="interests__header">
                 <div className="common">
                 <h3 className="heading">INTERESTS</h3>
                  <h1 className="mainHeader"> My Interests</h1>
                  <p className="mainContent">
                  lorembbkbbbcsbdbcbkbscjbkdjbkjbckjbkjsdbvkjbksj
                  bvkdjbvkjsbvkjbskvjbskjbdvkjsbvkjsdbkjsbvkj.
                  </p>
                  <div className="commonBorder"></div>
                  
                </div>


                <div className="row">
                    {state.map(info=>(

                  <div className="col-4">
                    <div className="interests__box">
                    <div  className="commonIcons">
                    {info.icon}
                    </div>
                    <div className="interests__box-header">{info.heading}</div>
                    <div className="interests__box-p">
                    {info.text}
                     </div>
                     </div>
                 </div>
                    ))}
                 

                </div>
                </div>
            </div>
        </div>
    )
}

export default Interests;
