import React from "react";
import { getTeamData } from "../../utils/getData";

const Form = props => {
  const [playerInput, setPlayerInput] = React.useState("");
  const [teamInput, setTeamInput] = React.useState("");
  const [orgInput, setOrgInput] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    getTeamData(playerInput, orgInput, teamInput)
    .then( data => {
      console.log(data);
      props.setPage("card");
    }
    )
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="player-input">
        Enter your name:
        <input
          id="player-input"
          className="form__input"
          placeholder="Bob"
          value={playerInput}
          onChange={event => setPlayerInput(event.target.value)}
        />
      </label>
      <label htmlFor="org-input">
        Enter your github organisation's name:
        <input
          id="org-input"
          className="form__input"
          placeholder="FAC18"
          value={orgInput}
          onChange={event => setOrgInput(event.target.value)}
        />
      </label>
      <label htmlFor="team-input">
        Enter your team name:
        <input
          id="team-input"
          className="form__input"
          placeholder="students"
          value={teamInput}
          onChange={event => setTeamInput(event.target.value)}
        />
      </label>
      <button type="submit" className="form__button">
        ENTER
      </button>
    </form>
  );
};

export default Form;
