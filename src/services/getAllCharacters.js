const getAllCharacters = () => {
    return fetch(
      "https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=${Num}?page=${Num}"
    )
      .then((res) => res.json());
      
  };
  
  export default getAllCharacters;

