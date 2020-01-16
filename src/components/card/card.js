import React from "react";
import card from "./card.css";

const Card = props => {
  const userArray = props.userData;
  console.log({ props });
  // a card that is blank
  // toggle display with boolean
  // randomise the way that we display the cards (names and photos)
  const shuffle = arr => {
    //spread operator here makes sure that the original array is not mutated and we are given a new array only
    return [...arr].sort(() => 0.5 - Math.random());
  };
  // const handleClick = () => {
  //   const updatedUserArr = props.userData.map(user => {
  //     if (user.login === )
  //   })
  // }
  let newArr = React.useMemo(() => {
    // we've kept the arrays inside of useMemo because they are always changing
    // (therefore they would be shuffled at every re-render)
    // create array of images components
    const imgArr = userArray.map(user => {
      return (
        <div className="visible">
          <li className="hidden">
            <img
              src={user.avatar_url}
              className={user.login}
              alt="User's avatar"
            ></img>
          </li>
        </div>
      );
    });
    // create array of name components
    const nameArr = userArray.map(user => {
      return (
        <div className="visible">
          <li className="hidden">
            <h1 className={user.login}>{user.login}</h1>
          </li>
        </div>
      );
    });
    //join arrays and shuffle them
    return shuffle(nameArr.concat(imgArr));
  }, [userArray]); // array will only reshuffle when userArray (a prop) is changed - props should not change
  if (!props.userData) {
    return <h2>Loading...</h2>;
  }
  console.log({ newArr });
  return (
    <section>
      <ul>{newArr}</ul>
    </section>
  );
};
export default Card;
