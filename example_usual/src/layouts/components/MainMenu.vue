<script setup lang="ts">
const routes = [
  { name: 'home', title: 'Домой' },
  { name: 'productList', title: 'Каталог' },
  { name: 'cart', title: 'Корзина' },
]
</script>

<template>
  <nav :class="$style.nav">
    <ul>
      <li v-for="route in routes" :key="route.name">
        <router-link :to="{ name: route.name }">{{ route.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style module lang="scss">
  .nav {
    width: 200px;
    background-color: #f1f1f1;

    ul {
      padding: 0;
    }

    li {
      list-style: none;
      transition: background-color .3s;

      a {
        display: block;
        padding: 10px 20px;
        width: 100%;
        height: 100%;
        text-decoration: none;
        transition: color .5s;
      }

      &:hover {
        background-color: #9991c2;

        & a {
          color: #fff;
        }
      }
    }
  }
</style>