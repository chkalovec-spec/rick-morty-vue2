<template>
  <header>
    <h1>
      <router-link to="/">The Rick and Morty</router-link>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
h1 {
  padding-top: 12px;
  margin: 0 auto;

  font-family: Arkipelago;
  color: #83b9df;

  letter-spacing: 7px;
  font-size: 72px;
  text-align: center;
}
</style>
