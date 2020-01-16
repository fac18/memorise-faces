import React from "react";
import { getTeamData } from "../../utils/getData"

const Form = props => {
  const [playerInput, setPlayerInput] = React.useState("");
  const [teamInput, setTeamInput] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    getTeamData();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="player-input">
        Enter your github handle
        <input
          id="player-input"
          className="form__input"
          placeholder="RenataJarmova"
          value={playerInput}
          onChange={event => setPlayerInput(event.target.value)}
        />
      </label>
      <label htmlFor="team-input">
        Enter your organisation's name
        <input
          id="team-input"
          className="form__input"
          placeholder="FAC18"
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
