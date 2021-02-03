import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ _id, name, photoUrl, allies }) => {
  return (
    <Link to={`details/${_id}`}><figure>
      <p>{name}</p>
      <img src={photoUrl} />
      <p>{allies}</p>
    </figure> </Link>
  );
};

ListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  allies: PropTypes.string.isRequired,
};

export default ListItem;

