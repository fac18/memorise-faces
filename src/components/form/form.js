import React from "react";

const Form = props => {
  const [playerInput, setPlayerInput] = React.useState("");
  const [teamInput, setTeamInput] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    // API call
    // set page state to game
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
          onchange={event => setPlayerInput(event.target.value)}
        />
      </label>
      <label htmlFor="team-input">
        Enter your organisation's name
        <input
          id="team-input"
          className="form__input"
          placeholder="FAC18"
          value={teamInput}
          onchange={event => setTeamInput(event.target.value)}
        />
      </label>
      <button type="submit" className="form__button">
        ENTER
      </button>
    </form>
  );
};

export default Form;
