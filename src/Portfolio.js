import React from "react";
import Card from "./Card";

class Portfolio extends React.Component {
  constructor() {
    super();
    // this.webDesign = {
    //     title: 'Web Design',

    //   };
    //   this.mobileDesign = {
    //     title: 'Mobile Design',

    //   };
    //   this.logoDesign = {
    //     title: 'Logo Design',

    //   };
    //   this.webApp = {
    //     title: 'Web Application Development',

    //   };
    //   this.mobileApp = {
    //     title: 'mobile Application development',

    //   };
    //   this.pwa = {
    //     title: 'PWA development',

    //   };

    this.state = {
      items: [
        { title: "Web Design" },
        {title: "Mobile Design"},
        { title: "Logo Design" },
        { title: "Web Application Development" },
        { title: "mobile Application development" },
        { title: "PWA development" },
      ],
    };
  }
  render() {
    return (
      <div className="container">
        <h1 className="py-4">Portfolio</h1>
        <div className="row">
          { this.state.items.map((tool)=>(
                 <Card card={tool} />

              ))
             }

          {/* <Card card={this.webDesign} />
          <Card card={this.mobileDesign} />
          <Card card={this.logoDesign} />
          <Card card={this.webApp} />
          <Card card={this.mobileApp} />
          <Card card={this.pwa} /> */}
        </div>
      </div>
    );
  }
}
export default Portfolio;
