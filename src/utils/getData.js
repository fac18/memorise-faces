const token = process.env.REACT_APP_TOKEN;

const checkResponse = response => {
    if (response.status !== 200) {
        console.log(`Error with the request! ${response.status} `);
        return;
    }
    return response.json();
};

export const getTeamData = props => {
    const org = "FAC18";
    const team = "students";

    return fetch(`https://api.github.com/orgs/${org}/teams/${team}?access_token=${token}`)
        .then(checkResponse)
        .then(data => console.log(data))
        .catch(err => {
            throw new Error(`fetch getTeamData failed ${err}`);
        });
};
