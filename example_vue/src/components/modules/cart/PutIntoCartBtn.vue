<script setup lang="ts">
import { computed } from "vue";

import { useCartStore, type ICartProduct } from "../../../entities/cart";

type Props = {
  product: ICartProduct
}

const props = defineProps<Props>();

const cartStore = useCartStore();

const count = computed(() => {
  const productInCart = cartStore.state?.products?.find((prod) => prod.id === props.product.id)
  if (productInCart) {
    return `(${cartStore.state.products.find((prod) => prod.id === props.product.id)?.count || ''})`
  }
  return ''
})
</script>

<template>
  <button
      :class="$style['add-to-cart']"
      @click.stop.prevent="cartStore.putIntoCart(props.product)"
  >
    В корзину {{ count }}
  </button>
</template>

<style lang="scss" module>
  .add-to-cart {
    border: none;
    border-radius: 4px;
    padding: 10px 14px;
    background-color: #569c59;
    color: #fff;
    font-weight: bold;

    &:hover {
      background-color: #72bb75;
    }

    &:active {
      background-color: #569c59;
    }
  }
</style>