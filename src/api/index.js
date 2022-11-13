export const fetchPokemons = () => fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  .then((response) => response.json())
  .then((data) => data);