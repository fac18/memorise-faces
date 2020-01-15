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
        <input
          id="player-input"
          className="form__input"
          value={playerInput}
          onchange={event => setPlayerInput(event.target.value)}
        />
      </label>
      <label htmlFor="team-input">
        <input
          id="team-input"
          className="form__input"
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
