import "./App.css";
import React from "react";
// import UserList from "./UserList";
// import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Footer from "./Footer";




class App extends React.Component {
  render() {
    return (
      <div className="header">
        {/* <Navbar /> */}
        <Header />
        {/* <UserList /> */}
        <About />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
