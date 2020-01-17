import React from "react";
import Card from "./card";

const Flipper = ({
  setPage,
  userData,
  setUserData,
  flippedArray,
  setFlippedArray
}) => {
  React.useEffect(() => {
    console.log({ flippedArray });
    if (flippedArray.length === 2) {
      const flippedUsers = userData.map(user => {
        console.log(userData.login, flippedArray[0]);
        if (user.login === flippedArray[1] && user.login === flippedArray[0]) {
          return { ...user, visible: false };
        }
        return { ...user, flipped: false };
      });
      setFlippedArray([]);
      setUserData(flippedUsers);
    }
  }, [flippedArray, userData]);

  const handleClick = () => {
    const updatedUserArr = userData.map(user => {
      if (user.login === userData.login) {
        return { ...user, flipped: true };
      }
      return user;
    });
    setFlippedArray(prevVal => [...prevVal, userData.login]);
    setUserData(updatedUserArr);
  };

  if (!userData.visible)
    return (
      <div>
        <p>I am invisible</p>
      </div>
    );
  return userData.flipped ? (
    <Card />
  ) : (
    <div>
      <p>I AM NOT FLIPPED</p>
      <button onClick={handleClick}>Flip me</button>
    </div>
  );
};

export default Flipper;
