import { computed, reactive, readonly } from 'vue';
import { defineStore } from "pinia";
import cartApi from '../api'

import type { ICart } from "../types/Cart.interface";
import type { ICartProduct } from "../types/CartProduct.interface";

export const useCartStore = defineStore('cartStore', () => {
    const state = reactive<ICart>({
        id: null,
        products: [],
        deliveryAddressId: null
    });

    async function createCart () {
        const { id: cartId } = await cartApi.createCart();
        state.id = cartId;
    }

    function findInCart (productId: ICartProduct['id']): undefined | ICartProduct {
        return state.products.find((product: ICartProduct) => product.id === productId)
    }

    async function putIntoCart (product: ICartProduct) {
        if (!state.id) {
            await createCart();
        }
        await cartApi.putIntoCart(state.id, product.id);

        if (!findInCart(product.id)) {
            state.products = [
                ...state.products,
                product
            ]
        } else {
            state.products = state.products.map((productInCart) => {
                if (product.id === productInCart.id) {
                    return {
                        ...productInCart,
                        count: productInCart.count + 1
                    }
                }
                return productInCart
            })
        }
    }

    async function deleteFromCart (product: ICartProduct) {
        if (state.id && !findInCart(product.id)) {
            await cartApi.deleteFromCart(state.id, product.id);
            state.products = state.products.filter(({ id }: ICartProduct) => product.id === id)
        }
    }

    async function clearCart () {
        if (!state.id) { return }
        await cartApi.clearCart(state.id);
        state.id = null;
        state.deliveryAddressId = null;
        state.products = [];
    }

    return {
        state: readonly(state),
        putIntoCart,
        deleteFromCart,
        clearCart
    }
})