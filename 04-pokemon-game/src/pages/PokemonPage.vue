<template>
<h1 v-if="!pokemon">Espere porfavor...</h1>
		<div v-else>
      <h1>Quien es este Pokemon?</h1>
				<PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
				<PokemonOptions :pokemon="pokemonsArr" />
		</div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions'
import getPokemonsOptions from '@/helpers/getPokemonOptions';

// console.log(getPokemonsOptions());
// getPokemonsOptions()
export default {
    name: 'PokemonPage',
    data() {
        return {
            pokemonsArr: [],
						pokemon: null,
						showPokemon: false
        }
    },
    methods: {
        async mixPokemonsArray() {
            this.pokemonsArr = await getPokemonsOptions();
						const rndInt = Math.floor(Math.random() * 4);
						this.pokemon = this.pokemonsArr[rndInt];
        }
    },
    components: {
        PokemonPicture,
        PokemonOptions
    },
    created () {
       this.mixPokemonsArray();
    },
}
</script>