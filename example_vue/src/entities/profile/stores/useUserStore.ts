import { computed, ref } from "vue";
import { defineStore } from "pinia";
import userService from "../api";
import type { IUser } from "../types/User";

export const useUserStore = defineStore('userStore', () => {
    const user = ref<IUser | null>(null);

    async function authorizeUser () {
        const userData = await userService.getUser();
        user.value = userData;
    }

    return {
        isAuthorized: computed(() => !!user.value),
        user: computed(() => user.value),

        authorizeUser
    }
})
