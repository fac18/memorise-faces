import React from "react";

const Card = props => {
    // console.log(props.userData[1].login);
    if(!props.userData) {
        return <h2>Loading...</h2>;
    }
    const userArray = props.userData;
    //const { login, avatar_url} = userArray;
    const userList = userArray.map( user => (
        <li>
            <h1>{user.login}</h1>
            <img src={user.avatar_url} alt="User's avatar"></img>
        </li>
    ));
        return (
            <section>
                <ul>{userList}</ul>
            </section>
        );
};
    
export default Card;