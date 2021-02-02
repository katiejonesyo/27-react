import React, { Component } from 'react';
import { getAvatarFacts } from '../services/avatarApi';
import AvatarFactList from './AvatarList';

export default class AllCharacters extends Component {
    state = {
      AvatarFacts: []
    }

    componentDidMount() {
      getAvatarFacts()
        .then(avatarFacts => this.setState({ avatarFacts }));
    }

    render() {
      const { avatarFacts } = this.state;
      
      return (
        <AvatarFactList avatarFacts={avatarFacts} />
      );
    }
}