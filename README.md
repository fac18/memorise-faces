## Memorise FACes

👯‍ [Renata](https://github.com/renatadev) & [Alex](https://github.com/alexandraom) 👯‍


## Installation guide:

1. Clone the repo ```git clone https://github.com/fac18/memorise-faces.git```
2. Intall the dependencies by running ```npm i```
3. Set up an ```.env``` file (see below)
4. To check tests run ```npm t```
5. Start the server with ```npm start``` and go to ```localhost:3000```

#### .env

You will need a .env file in your root folder, with an API token for [Github](https://github.com/settings/tokens)

in the following format:	

```REACT_APP_TOKEN=YOURTOKENHERE```

### Initial idea

Memory card game with faces and names of Github teams

![](https://i.imgur.com/78xC4NP.jpg)

### Main goal

- To have fun learning React and the use of the most important hooks like useState as well as passing the state as Props to child components.

### Fetching the data

We use the GitHub API to retrieve both the image url and the username login of an array of a github organisation's team.

```javascript=
export const getTeamData = (player, org, team) => {
  return fetch(
    `https://api.github.com/orgs/${org}/teams/${team}/members?access_token=${token}`
  )
    .then(checkResponse)
    .then(data => { return data })
    .catch(err => {
      throw new Error(`fetch getTeamData failed ${err}`);
    });
};
```

### Learning outcomes 🤓

We've learnt SO many new and great things by building this project but two of the things that we are very excited to implement in our code are:

#### Spread Operator

We already knew the existance of the "spread operator" but never had the opportunity to actually undestand how poweful and convinient can be to use it. In our case, we used it ```[...arr]``` to be able to iterate over our array without mutating our original array so we can then perform a randomnisation into itself.

```javascript=
const shuffle = arr => {
    //spread operator here makes sure that the original array is not mutated and we are given a new array only
    return [...arr].sort(() => 0.5 - Math.random());
  };
```

### useMemo

useMemo is a totally new concept for us in React, this hook will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render. We really recommend you to have a look at the [docs](https://reactjs.org/docs/hooks-reference.html#usememo) and read more about this amazing hook.

```javascript=
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
```

## And always remember... No matter what: Keep it always accessible!

![accessibility](https://i.imgur.com/ohb7PgW.png)

#### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and deployed to [Netlify](https://github.com/fac18/memorise-faces).
