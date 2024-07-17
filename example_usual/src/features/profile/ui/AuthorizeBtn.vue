<script setup lang="ts">
import { useUserStore } from "../../../entities/profile";
import { ref } from "vue";

const dialogOne = ref<boolean>(false);
const dialogTwo = ref<boolean>(false);

const userStore = useUserStore();

function startAuthProcess () {
  dialogOne.value = true;
}

function okDialogOne () {
  dialogOne.value = false;
  dialogTwo.value = true;
}

function notOkDialogOne () {
  dialogOne.value = false;
  dialogTwo.value = true;
}

async function okDialogTwo () {
  dialogTwo.value = false;
  await userStore.authorizeUser();
}

async function notOkDialogTwo () {
  dialogTwo.value = false;
  await userStore.authorizeUser();
}
</script>

<template>
  <a href="#" v-if="!userStore.isAuthorized" @click="startAuthProcess">Войти</a>
  <div v-else>
    {{ userStore.user?.email }}
  </div>
  <div v-if="dialogOne" :class="$style['auth-dialog']">
    Диалоговое окно 1
    <div>
      <input type="text">
      <input type="text">
    </div>
    <div :class="$style.controls">
      <button @click="okDialogOne">OK</button>
      <button class="cancel" @click="notOkDialogOne">НЕ OK</button>
    </div>
  </div>

  <div v-if="dialogTwo" :class="[$style['auth-dialog'], $style['auth-dialog--two']]">
    Диалоговое окно 2
    <div>
      <input type="text">
      <input type="text">
    </div>
    <div :class="$style.controls">
      <button @click="okDialogTwo">OK</button>
      <button class="cancel" @click="notOkDialogTwo">НЕ OK</button>
    </div>
  </div>
  <div v-if="dialogTwo || dialogOne" :class="$style.overlay"></div>
</template>

<style module lang="scss">
.auth-dialog {
  color: #3d3d3d;
  background-color: #fff;
  z-index: 2;
  border-radius: 8px;
  width: 300px;
  height: 300px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: calc(50vh - 150px);
  left: calc(50vw - 150px);
  padding: 20px;
  border: 1px solid gray;

  &--two {
    background-color: #cac5e5;
  }
}

.controls {
  display: flex;
  justify-content: space-between;
}

.overlay {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>