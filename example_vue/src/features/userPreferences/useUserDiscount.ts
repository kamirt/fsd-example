import { useCartStore } from "../../entities/cart";
import { useUserStore } from "../../entities/profile";
import { computed } from "vue";

export function useUserDiscount () {
    const cartStore = useCartStore();
    const profileService = useUserStore();

    const isDiscountAvailable = computed(() => {
        return profileService.isAuthorized && cartStore.state.products.length >= 2
    })

    return {
        isDiscountAvailable
    }
}