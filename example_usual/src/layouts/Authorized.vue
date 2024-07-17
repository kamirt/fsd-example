<script setup lang="ts">
import { computed } from "vue";
import MainMenu from "./components/MainMenu.vue";
import { AuthorizeBtn } from "../features/profile";
import { useUserStore } from "../entities/profile";

const userStore = useUserStore();
</script>

<template>
  <div :class="$style.layout">
    <header :class="$style.header">
      <div>Example Shop</div>
      <AuthorizeBtn />
    </header>
    <MainMenu/>
    <main :class="$style.main">
      Личный кабинет
      <div :class="$style.info">
        {{ userStore.user?.firstName }} {{ userStore.user?.lastName }}<br/>
        {{ userStore.user?.email }}<br/>
        {{ userStore.user?.birthDate }}<br/>
      </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  height: calc(100vh - #{$header-height + $footer-height}px);
  overflow-y: scroll;
}

.info {
  font-size: 1rem;
  font-weight: normal;
}
</style>