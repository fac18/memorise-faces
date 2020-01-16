import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer/footer.js";
import Form from "./components/form/form.js";
import Header from "./components/header/header";
import Card from "./components/card/card";
//import Timer from "../timer/timer"

function App() {
  // if you do nott have information from the API display the form else display the game
  // Data will be accessed from the API call later
  const [page, setPage] = React.useState("home");
  
  if (page === "home") {
    return (
      <div className="App">
        <Header />
        <Form setPage={setPage}/>
        <Footer />
      </div>
    );
  } else if (page === "card") {
    return (
      <div className="App">
        <Header />
        <Card setPage={setPage}/>
        <Footer />
      </div>
    );
  } 
}

export default App;
