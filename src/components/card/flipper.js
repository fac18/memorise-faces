import React from "react";
import Card from "./card";

const Flipper = props => {
    // Default state will be null
    // New state will be className (user.login)
    // const [flipState, setFlipState] = React.useState(false);
    console.log(props.flipState)
    if (!props.flipState) {
        return (
            <Card/>
        )
    }
    return (
        <button className="flipper" onClick={ () => props.setFlipState(!props.flipState) } flipState={props.flipState}></button>
    )
};

export default Flipper;