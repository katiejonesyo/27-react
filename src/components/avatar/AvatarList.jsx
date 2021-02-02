import React from 'react';
import PropTypes from 'prop-types';
import AvatarFacts from './AvatarFacts';

const AvatarFactList = ({ avatarFacts }) => {
  const avatarElements = avatarFacts.map(avatarFacts => (
    <li key={avatarFact.id}>
      <AvatarFacts {...avatarFacts} />
    </li>
  ));

  return (
    <ul>
      {avatarElements}
    </ul>
  );
};

AvatarFactList.propTypes = {
  avatarFacts: PropTypes.arrayOf(PropTypes.object).isRequired
};
