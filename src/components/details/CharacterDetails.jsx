import React from "react";
import PropTypes from "prop-types";

const CharacterDetails = ({ character }) => {
  return (
  <>
  <h1>name: {character.name}</h1>
    <img src={character.photoUrl} />
    <p>allies: {character.allies}</p>
    <p>enemies: {character.enemies || "n/a"}</p>
    <p>affiliations: {character.affiliations || "n/a"}</p>
    </>)
};


CharacterDetails.propTypes = {
  character: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      photoUrl: PropTypes.string,
      allies: PropTypes.string,
      enemies: PropTypes.string,
      affiliations: PropTypes.string
    })
  ),
};
export default CharacterDetails;

