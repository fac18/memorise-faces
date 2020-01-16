import React from "react";
import Card from "./card";

const Flipper = props => {
    // Default state will be null
    // New state will be className (user.login)
    const [flipState, setFlipState] = React.useState(false);
    console.log(flipState)
    
    return (
        <button className="flipper" onClick={ () => setFlipState(!flipState) }></button>
    )
};

export default Flipper;