import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer/footer.js";
//import Header from './components/header/header';
//import Timer from "../timer/timer"

function App() {
  // if you do nott have information from the API display the form else display the game
  // Data will be accessed from the API call later
  //const [page, setPage] = React.useState("home");
  return (
    <div className="App">
      {/* <Header> {data? <Timer/> : null} </Header> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
