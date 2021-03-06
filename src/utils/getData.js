const token = process.env.REACT_APP_TOKEN;

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status} `);
    return;
  }
  return response.json();
};

export const getTeamData = (player, org, team) => {
  // const org = "FAC18";
  // const team = "mentors";
  // console.log({ props });
  // const { org, team } = props;

  return fetch(
    `https://api.github.com/orgs/${org}/teams/${team}/members?access_token=${token}`
  )
    .then(checkResponse)
    .then(data => { return data })
    .catch(err => {
      throw new Error(`fetch getTeamData failed ${err}`);
    });
};
