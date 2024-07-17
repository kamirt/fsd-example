<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ProductListTemplate from "./ProductListTemplate.vue";
import { productApi, type IProductShort } from "../../../entities/product";
import ProductListItem from "../../widgets/product/ProductListItem.vue";

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
  <ProductListTemplate :class="$style.products" :products="products">
    <template #product="{ item }">
      <ProductListItem :item="item"/>
    </template>
  </ProductListTemplate>
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