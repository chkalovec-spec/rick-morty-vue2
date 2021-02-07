<template>
  <div id="app">
    <div class="container">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Arkipelago';
  src: url('fonts/Arkipelago.woff') format('woff'), url('fonts/Arkipelago.ttf') format('ttf'),
    url('fonts/Arkipelago.eot') format('eot');
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
  color: inherit;
}

body {
  background-color: aliceblue;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  max-width: 80%;
  height: 100vh;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
