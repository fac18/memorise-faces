import React from "react";
import { getTeamData } from "../../utils/getData";
import "./form.css"

const Form = props => {
  const [playerInput, setPlayerInput] = React.useState("");
  const [teamInput, setTeamInput] = React.useState("");
  const [orgInput, setOrgInput] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    getTeamData(playerInput, orgInput, teamInput).then(data => {
      props.setUserData(data);
      props.setPage("card");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form__style">
      <br/><br/>
      <label htmlFor="player-input">
        Enter your name:
        <br/>
        <input
          id="player-input"
          className="form__input"
          placeholder="Bob"
          value={playerInput}
          onChange={event => setPlayerInput(event.target.value)}
        />
      </label><br/>
      <label htmlFor="org-input">
        Enter your github organisation's name:
        <br/>
        <input
          id="org-input"
          className="form__input"
          placeholder="FAC18"
          value={orgInput}
          onChange={event => setOrgInput(event.target.value)}
        />
      </label><br/>
      <label htmlFor="team-input">
        Enter your team name:
        <br/>
        <input
          id="team-input"
          className="form__input"
          placeholder="students"
          value={teamInput}
          onChange={event => setTeamInput(event.target.value)}
        />
      </label><br/>
      <button type="submit" className="form__button">
        ENTER
      </button>
    </form>
  );
};

export default Form;
