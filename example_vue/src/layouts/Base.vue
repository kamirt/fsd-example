<script setup lang="ts">
  import { RouterView } from "vue-router";
  import MainMenu from "./components/MainMenu.vue";
  import { AuthorizeBtn } from "../components/modules/profile";

</script>

<template>
  <div :class="$style.layout">
    <header :class="$style.header">
      <div>Example Shop</div>
      <AuthorizeBtn />
    </header>
    <MainMenu/>
    <main :class="$style.main">
      <RouterView></RouterView>
    </main>
    <footer :class="$style.footer">Copyright (2024)</footer>
  </div>
</template>


<style module lang="scss">
$header-height: 70;
$footer-height: 50;

.layout {
  display: grid;
  grid-template-columns: repeat(1, 200px 1fr);
}

.header {
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  height: 70px;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  background-color: #ff9f00;
  padding: 0 32px;
  color: #fff;
  justify-content: space-between;
}

.footer {
  grid-column-start: 1;
  grid-column-end: 3;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6357a1;
  padding: 0 32px;
  color: #fff;
}

.main {
  height: calc(100vh - #{$header-height + $footer-height}px);
  overflow-y: scroll;
}
</style>