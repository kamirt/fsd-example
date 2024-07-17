<script setup lang="ts">
import { useCartStore } from "../entities/cart";

const cart = useCartStore();
</script>

<template>
  <div>
    <div :class="$style.cart">
      <div :class="$style.product" v-for="item in cart.state.products">
        <div>{{ item.name }}</div>
        <div>Количество: {{ item.count }}</div>
        <img :src="item.photo" alt="">
      </div>
    </div>
  </div>
  <button v-if="cart.state.products.length > 0" @click="cart.clearCart()">Очистить</button>
</template>

<style module lang="scss">
  .cart {
    display: flex;
    gap: 20px;
  }
  .product {
    & img {
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
  }
</style>