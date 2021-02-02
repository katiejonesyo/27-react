import React from 'react';
import PropTypes from 'prop-types';

const AvatarFacts = ({ id, allies, enemies, photoUrl, name, affilitation }) => (
  <>
    <h1>{id}</h1>
    <p>{allies}</p>
    <p>{enemies}</p>
    <p>{photoUrl}</p>
    <p>{name}</p>
    <p>{affilitation}</p>
  </>
);
AvatarFacts.propTypes = {
  id: PropTypes.string.isRequired,
  allies: PropTypes.string.isRequired,
  enemies: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  affilitation: PropTypes.string.isRequired
};
export default AvatarFacts;