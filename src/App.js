import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer/footer.js";
import Form from "./components/form/form.js";
import Header from "./components/header/header";
import Card from "./components/card/card";
import Flipper from "./components/card/flipper"
//import Timer from "../timer/timer"

function App() {
  // if you do nott have information from the API display the form else display the game
  // Data will be accessed from the API call later
  const [page, setPage] = React.useState("home");
  const [userData, setUserData] = React.useState(null);
  const [flipState, setFlipState] = React.useState(false);
  //<Card setPage={setPage} userData={userData} setUserData={setUserData}/>
  // <Flipper flipState={flipState} setFlipState={setFlipState}></Flipper>

  if (page === "home") {
    return (
      <div className="App">
        <Header />
        <Form setPage={setPage} setUserData={setUserData}/>
        <Footer />
      </div>
    );
  } else if (page === "card") {
    return (
      <div className="App">
        <Header/>
        <Card setPage={setPage} userData={userData} setUserData={setUserData}/>
        <Footer />
      </div>
    );
  } 
}

export default App;
