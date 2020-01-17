import React from "react";
import card from "./card.css";

const Card = ({ setPage, userData, setUserData, setFlippedArray }) => {
  // randomise the way that we display the cards (names and photos)
  const shuffle = arr => {
    //spread operator here makes sure that the original array is not mutated and we are given a new array only
    return [...arr].sort(() => 0.5 - Math.random());
  };

  let newArr = React.useMemo(() => {
    // we've kept the arrays inside of useMemo because they are always changing
    // (therefore they would be shuffled at every re-render)
    // create array of images components

    const imgArr = userData.map(user => {
      // if (!user.visible)
      //   return (
      //     <div>
      //       <p>I am invisible</p>
      //     </div>
      //   );
      // return user.flipped ? (
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
    const nameArr = userData.map(user => {
      // if (!user.visible)
      //   return (
      //     <div>
      //       <p>I am invisible</p>
      //     </div>
      //   );
      // return user.flipped ? (
      return (
        <div className="visible">
          <li className="hidden">
            <h1 className={user.login}>{user.login}</h1>
          </li>
        </div>
      );
      // : (
      //   <div>
      //     <p>I AM NOT FLIPPED</p>
      //     <button onClick={handleClick}>Flip me</button>
      //   </div>
      // );
    });
    //join arrays and shuffle them
    return shuffle(nameArr.concat(imgArr));
  }, [userData]); // array will only reshuffle when userArray (a prop) is changed - props should not change
  if (!userData) {
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
