import React, { Component } from "react";
import List from "../list/List";
import getAllCharacters from "../../services/getAllCharacters";

export default class Home extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    return getAllCharacters().then((characters) => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;
    return <List characters={characters} />;
  }
}

