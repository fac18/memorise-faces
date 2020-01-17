import React from "react";
import Card from "./card";

const Flipper = props => {
    // Default state will be null
    // New state will be className (user.login)
    const [flipState, setFlipState] = React.useState(false);
    console.log(flipState)
    
    // return flipState ?
    //     (<button className="flipper flipper__hidden" onClick={() => setFlipState(!flipState)}></button>)
    //     :
    //     (<button className="flipper flipper__notHidden" onClick={() => setFlipState(!flipState)}></button>)

    return (
        <button className="flipper" onClick={ () => setFlipState(!flipState) }></button>
    )
};

export default Flipper;