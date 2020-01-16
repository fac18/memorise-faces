import React from "react";

const Flipper = props => {
    // Default state will be null
    // New state will be className (user.login)
    const [flipState, setFlipState] = React.useState(false);
    return (
        <button className="flipper" onClick={ () => setFlipState(!flipState) } flipState={flipState}></button>
    )
};

export default Flipper;