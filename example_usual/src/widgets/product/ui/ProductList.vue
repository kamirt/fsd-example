<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ProductList, productApi, type IProductShort } from "../../../entities/product";
import ProductListItem from "./ProductListItem.vue";

const products = ref<IProductShort[]>([]);

async function getProducts (): Promise<void> {
  const data = await productApi.getProductList();
  products.value = data.items;
}

onMounted(async () => {
  await getProducts();
})
</script>

<template>
  <ProductList :class="$style.products" :products="products">
    <template #product="{ item }">
      <ProductListItem :item="item"/>
    </template>
  </ProductList>
</template>

<style module lang="scss">
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 24px 32px;
    gap: 16px;

    li {
      list-style: none;
    }
  }
</style>