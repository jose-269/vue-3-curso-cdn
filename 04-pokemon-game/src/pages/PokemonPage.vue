<template>
<h1 v-if="!pokemon">Espere porfavor...</h1>
		<div v-else>
      		<h1>Quien es este Pokemon?</h1>
				<PokemonPicture 
					:pokemon-id="pokemon.id" 
					:show-pokemon="showPokemon" />

				<PokemonOptions :pokemon="pokemonsArr" @selection="checkAnswer" />

				<template v-if="showAnswer">
					<h2 class="fade-in">{{message}}</h2>
					<button @click="newGame">Nuevo juego</button>
				</template>
		</div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions'
import getPokemonOptions from '@/helpers/getPokemonOptions';

// console.log(getPokemonOptions());
// getPokemonOptions()
export default {
    name: 'PokemonPage',
    data() {
        return {
            pokemonsArr: [],
			pokemon: null,
			showPokemon: false,
			showAnswer : false,
			message: ''
        }
    },
    methods: {
			async mixPokemonsArray() {
					this.pokemonsArr = await getPokemonOptions();
					const rndInt = Math.floor(Math.random() * 4);
					this.pokemon = this.pokemonsArr[rndInt];
			},
			checkAnswer(pokemonId) {

				this.showAnswer = true;
				this.showPokemon = true;
				if(pokemonId === this.pokemon.id) {
					this.message = `Exito acertaste el Pokemon es ${this.pokemon.name}`;
				}
				else {
					this.message = `Fracasaste como Maestro Pokemon era ${this.pokemon.name}`
				}
				
			},
			newGame() {
				this.pokemonsArr = [];
				this.showAnswer = false;
				this.showPokemon =false;
				this.pokemon = null;
				this.mixPokemonsArray();

			}
    },
    components: {
        PokemonPicture,
        PokemonOptions
    },
    mounted () {
       this.mixPokemonsArray();
    },
}
</script>
<style scoped>
PokemonPicture {
	margin: 0 auto;
}
</style>