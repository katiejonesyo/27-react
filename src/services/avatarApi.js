export const getAvatarFacts = () => {
    return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
      .then(res => res.json())
      .then(json => json.data);
  };