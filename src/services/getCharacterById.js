export const getCharacterById = (_id) => {
    return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${_id}`)
      .then(res => res.json());
  };

export default getCharacterById

