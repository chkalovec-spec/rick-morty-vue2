<template>
  <div class="content-block">
    <slot></slot>
    <Navigation />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'ContentWrapper',
  components: {
    Navigation,
  },
}
</script>

<style lang="scss" scoped>
.content-block {
  display: flex;
  flex: 1 1 auto;

  background: url('../../assets/mainImage.png');
  background-repeat: no-repeat;
}
</style>
