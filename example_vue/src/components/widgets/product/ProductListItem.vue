<script setup lang="ts">
import { computed } from "vue";

import { PutIntoCartBtn } from "../../modules/cart";
import { ProductListItem} from "../../modules/product";

import type { IProductShort } from "../../../entities/product";
import type { ICartProduct } from "../../../entities/cart";

type Props = {
  item: IProductShort
}

const props = defineProps<Props>();

const itemToCart = computed<ICartProduct>(() => ({
  id: props.item.id,
  photo: props.item.photo,
  name: props.item.name,
  count: 1
}))
</script>

<template>
  <ProductListItem :item="props.item">
    <template #action>
      <PutIntoCartBtn :product="itemToCart"/>
    </template>
  </ProductListItem>
</template>

<style module lang="scss">
.product-card {
  border: 1px solid #dcdcdc;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 4px;

  &:hover {
    border: 1px solid #7e7e7e;
  }

  & img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  & a {
    text-decoration: none;
    color: #494949;
  }
}

.product-name {
  font-size: 1.3rem;
  font-weight: bold;
}

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>