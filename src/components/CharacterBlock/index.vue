<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  name: 'CharactersBlock',
  data() {
    return {
      title: 'CharactersBlock',
    }
  },
  created() {
    this.$store.dispatch('fetchCharacter')
  },
}
</script>
