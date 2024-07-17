import { computed } from "vue";
import { useCartStore } from "../stores/useCartStore";

export function useCart () {
    const cartStore = useCartStore();

    const total =  computed(() => {
        const counts = cartStore.state.products.map((product) => product.count)
        return counts.reduce((accumulator, value) => {
            return accumulator + value;
        }, 0);
    })

    function submitDiscount () {
        // реализация
    }

    return {
        total,

        submitDiscount,
    }
}