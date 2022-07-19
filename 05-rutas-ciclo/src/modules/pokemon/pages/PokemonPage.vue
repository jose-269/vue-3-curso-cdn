<template>
  <h1>Pokemon Page <span>#{{ id }}</span></h1>
  <div v-if="pokemon">
  <img :src="pokemon.sprites.front_default" :alt="pokemon.name"></div>
</template>

<script>

export default {
  data() {
    return {
      pokemon: null,
      // id: this.$route.params.id,
    }
  },
  props: {
    id: {
      type: Number,
      required: true, 
    },
    // nombre: {
    //   type: String,
    // },
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(response => response.json());
        console.log(pokemon);
        this.pokemon = pokemon;
        
      } catch (error) {
        this.$router.push('/');
        console.log("nada que hacer aqui");
      }
    }
  },
  created () {
    this.getPokemon();
  //   const { id } = this.$route.params;
  // console.log(id);
  // this.id = id;
    // console.log(this.$attrs);
  },
  watch: {
    id() {
      this.getPokemon()
    }
  },
}
</script>

<style>

</style>