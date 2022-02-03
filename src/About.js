import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="para row p-5">
          <h1 className="col-3">About Me</h1>
          <p className="col-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            repellendus ipsa alias ducimus eligendi, possimus laborum, aliquid
            minus perspiciatis nobis itaque aut, cumque neque quod. Odit
            repudiandae dolore tempore ipsa. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Nulla repellendus ipsa alias ducimus
            eligendi, possimus laborum, aliquid minus perspiciatis nobis itaque
            aut, cumque neque quod. Odit repudiandae dolore tempore ipsa.
            <button type="button" className="btn btn-dark d-block p-3 m-2">
              Dawnload Resume
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
