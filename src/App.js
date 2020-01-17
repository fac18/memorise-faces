import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer/footer.js";
import Form from "./components/form/form.js";
import Header from "./components/header/header";
import Card from "./components/card/card";
import Flipper from "./components/card/flipper";
//import Timer from "../timer/timer"

function App() {
  // if you do nott have information from the API display the form else display the game
  // Data will be accessed from the API call later
  const [page, setPage] = React.useState("home");
  const [userData, setUserData] = React.useState(null);
  // const [flipState, setFlipState] = React.useState(false);
  const [flippedArray, setFlippedArray] = React.useState([]);

  // React.useEffect(() => {
  //   console.log({ flippedArray });
  //   if (flippedArray.length === 2) {
  //     const flippedUsers = userData.map(user => {
  //       console.log(userData.login, flippedArray[0]);
  //       if (user.login === flippedArray[1] && user.login === flippedArray[0]) {
  //         return { ...user, visible: false };
  //       }
  //       return { ...user, flipped: false };
  //     });
  //     setFlippedArray([]);
  //     setUserData(flippedUsers);
  //   }
  // }, [flippedArray, userData]);

  if (page === "home") {
    return (
      <div className="App">
        <Header />
        <Form setPage={setPage} setUserData={setUserData} />
        <Footer />
      </div>
    );
  } else if (page === "card") {
    return (
      <div className="App">
        <Header />
        <div>
          {userData ? (
            userData.map(user => {
              return (
                <div>
                  <Flipper
                    {...user}
                    setPage={setPage}
                    userData={userData}
                    setUserData={setUserData}
                    setFlippedArray={setFlippedArray}
                  />
                  <Card
                    {...user}
                    setPage={setPage}
                    userData={userData}
                    setUserData={setUserData}
                    setFlippedArray={setFlippedArray}
                  />
                </div>
              );
            })
          ) : (
            <h1>userData has not yet loaded</h1>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
