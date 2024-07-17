<script setup lang="ts">
  import type { IProductShort } from "../../../entities/product/types/ProductShort.interface";

  type Props = {
    products: IProductShort[]
  }

  const props = defineProps<Props>();

</script>

<template>
  <ul>
    <li v-for="product in props.products" :key="product.id">
      <slot name="product" :item="product"></slot>
    </li>
  </ul>
</template>