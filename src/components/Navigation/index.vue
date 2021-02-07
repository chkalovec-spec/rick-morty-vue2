<template
  ><nav>
    <ul>
      <li v-for="(item, index) in navItems" :key="index">
        <router-link :to="item.toLowerCase()">{{ item }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      navItems: ['Characters', 'Locations', 'Episodes'],
    }
  },
}
</script>

<style lang="scss" scoped>
nav {
  flex: 1 1 auto;
  height: 100%;
}

ul {
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}
li {
  font-family: Pangolin;
  font-size: 40px;
  line-height: 2.5;

  color: #8a481f;
}
</style>
