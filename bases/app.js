

const app = Vue.createApp({
  // template: `
  // 
  // `
  data() {
    return {
      h1: 'hola mundo',
      message: 'batman',
      
    }
  },
  methods: {
    changeQuote() {
      this.message = 'WE';
      this.capitalize();
    },
    capitalize() {
      this.h1 = this.h1.toUpperCase()
    }
  }
})

app.mount('#myApp')