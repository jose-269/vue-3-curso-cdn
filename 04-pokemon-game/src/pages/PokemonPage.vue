<template>
  <div>
      <h1>Quien es este Pokemon?</h1>
      <PokemonPicture :pokemonId="4" :showPokemon="true" />
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
        }
    },
    methods: {
        async mixPokemonsArray() {
            this.pokemonsArr = await getPokemonsOptions();
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