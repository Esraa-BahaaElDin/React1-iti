import React from "react";
import "./skills.css";
import Progress from "./Progress"


class Skills extends React.Component {
constructor(){
  super();
  // this.html={title:'Html'}
  // this.css={title:'CSS'}
  // this.react={title:'REACT'}
  // this.js={title:'JAVASCRIPT'}
  // this.php={title:'PHP'}

  this.state = {
    items:[
      {title:'Html',
      percentage: 90},
      {title:'CSS',
      percentage: 80},
    {title:'REACT',
    percentage: 70},
    {title:'JAVASCRIPT',
    percentage: 85},
    {title:'PHP',
    percentage: 75} ,
    ],
  };

 
}

  render() {
    return (
        <div id="skills" className="">
            <div className="container  text-center ">
        <h1 className="py-4 ">Skills</h1>
        <p className="px-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
          repellendus ipsa alias ducimus eligendi, possimus laborum, aliquid
          minus perspiciatis nobis itaque aut, cumque neque quod. Odit
          repudiandae dolore tempore ipsa. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Nulla repellendus ipsa alias ducimus
          eligendi, possimus laborum, aliquid minus perspiciatis nobis itaque
          aut, cumque neque quod. Odit repudiandae dolore tempore ipsa.
        </p>
        <div className="row py-5">
          <div className="col-3">
                <h2 className="py-2">My Focus</h2>
                <hr></hr>
                <p>FrontEnd</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>JS</p>
                <p>jQuery</p>
           </div>
          

           <div className="col-9">
           { this.state.items.map((ele)=>(
                 <Progress pro={ele} />

              ))
              }   


           
           </div>

        </div>
      </div>
        </div>
      
    );
  }
}

export default Skills;


