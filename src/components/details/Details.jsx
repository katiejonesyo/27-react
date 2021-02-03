import PropTypes from "prop-types";
import React, { Component } from "react";
import CharacterDetails from '../details/CharacterDetails';
import getCharacterById from '../../services/getCharacterById';

export default class Details extends Component {
  state = {
    character: {},
  };

  componentDidMount() {
    getCharacterById(this.props.match.params._id).then((character) => {
      console.log(character);
    this.setState({ character })
    });

  }

  render() {
    const { character } = this.state;
    console.log(character);
    return character ? <CharacterDetails character={character} /> : <>Loading...</>;
  }
}
Details.propTypes = {
      match: PropTypes.shape({
      params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

