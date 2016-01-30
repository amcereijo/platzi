
import pokemons from './pokemons.js';

export default {
	pokemons: {
		find: (cb) =>  {
			setTimeout(() => {
				cb(pokemons);
			}, 3000);
		}
	}
}