import React from "react";

const Card = props => {
    if(!props) {
        return <h2>Loading...</h2>;
    }
    const { login, avatar_url} = props;
        return (
            <section>
                <h1>{login}</h1>
                <img src={avatar_url}></img>
            </section>
        );
};
    
export default Card;