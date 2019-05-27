const URL_API = 'http://hp-api.herokuapp.com/api/characters';

const fetchHarryPotter = () => fetch(URL_API).then(response => response.json());

export default fetchHarryPotter;