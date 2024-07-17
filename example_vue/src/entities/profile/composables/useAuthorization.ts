import { computed, ref } from "vue";

import { useUserStore } from "../stores/useUserStore";

export function useAuthorization () {
    const userStore = useUserStore();

    const isAuthProcessStarted = ref<boolean>(false);
    const isAuthProcessCompleting = ref<boolean>(false);

    function positiveAnswerOne () {
        isAuthProcessStarted.value = false;
        isAuthProcessCompleting.value = true;
    }

    function negativeAnswerOne () {
        isAuthProcessStarted.value = false;
        isAuthProcessCompleting.value = true;
    }

    async function positiveAnswerTwo () {
        isAuthProcessCompleting.value = false;
        await userStore.authorizeUser();
    }

    async function negativeAnswerTwo () {
        isAuthProcessCompleting.value = false;
        await userStore.authorizeUser();
    }

    function startAuthProcess () {
        isAuthProcessStarted.value = true;
    }

    return {
        isAuthProcessStarted: computed(() => isAuthProcessStarted.value),
        isAuthProcessCompleting: computed(() => isAuthProcessCompleting.value),

        positiveAnswerOne,
        negativeAnswerOne,
        positiveAnswerTwo,
        negativeAnswerTwo,
        startAuthProcess
    }
}