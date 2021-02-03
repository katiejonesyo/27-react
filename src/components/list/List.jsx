import PropTypes from "prop-types";
import React from "react";
import ListItem from "../list/ListItem";

const List = ({ characters }) => {
  const characterList = characters.map(( characters, index) => {
    return (
      <li key={index}>
        <ListItem {...characters} />
      </li>
    );
  });
  return <ul>{characterList}</ul>;
};

List.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
      allies: PropTypes.string.isRequired
    })).isRequired
};

export default List;

