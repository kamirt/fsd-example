import { createWebHistory, createRouter, type RouteLocationNormalized } from 'vue-router'

import { useUserStore } from "../../entities/profile";

import HomeView from '../../pages/Home.vue'
import ProductView from '../../pages/Product.vue'
import ProductListView from '../../pages/ProductList.vue'
import CartView from '../../pages/Cart.vue'


const routes = [
    {
        path: '/',
        component: HomeView,
        layout: 'authorized',
        name: 'home',
        meta: {
            layout: 'authorized'
        }
    },
    {
        path: '/cart',
        component: CartView,
        name: 'cart',
        meta: {
            layout: 'base'
        }
    },
    {
        path: '/product-list',
        component: ProductListView,
        name: 'productList',
        meta: {
            layout: 'base'
        },
    },
    {
        path: '/product-list/:id',
        component: ProductView,
        name: 'product',
        meta: {
            layout: 'base'
        }
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to: RouteLocationNormalized) => {
    if (to.meta.layout === 'authorized') {
        const userStore = useUserStore();
        if (!userStore.isAuthorized) {
            return {
                name: 'productList'
            }
        }
    }
})