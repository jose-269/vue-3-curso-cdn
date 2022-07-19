<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.counter.count }}</h2>
  <h2>Computed Access {{CountComputed}}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy(5)">+5</button>
  <button @click="randomInt" :disabled="isLoading">Random</button>

  <h1>mapState {{count}}</h1>

  <h2>lastMutation {{lastMutatuion}}</h2>
  <h2>Direct Getters {{$store.getters['counter/squareCount']}}</h2>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState( 'counter', ['count', 'lastMutatuion', 'isLoading']),
        // ...mapState({
        //     count: state => state.count,
        //     lastMutatuion: state => state.lastMutatuion
        // })
        CountComputed() {
            return this.$store.state.counter.count
        }
    },
    methods: {
        increment() {
            this.$store.commit('counter/increment')
        },
        incrementBy(val){
            this.$store.commit('counter/incrementBy', val);
            // this.randomInt()

        },
        // incrementRandomInt() {
        //     this.$store.dispatch('incrementRandomInt')
        // }
        // ...mapActions('counter',['incrementRandomInt'])
        ...mapActions('counter', {
            randomInt: 'incrementRandomInt', 
        })
    },
}
</script>