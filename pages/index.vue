<script setup lang="ts">
import actions from '~/actions';
import type { CreateForm } from '~/actions/tweet/create';
import { useTweetStore } from '~/stores/useTweetStore';

definePageMeta({
    middleware: ['auth']
})

const logout = async () => {

    await actions.auth.logout();
    navigateTo('/login');
}

const form = ref<CreateForm>({
    content: ''
})

const store = useTweetStore();
const tweets = computed(() => store.tweets);

const tweetando = async () => {
    await actions.tweet.create(form.value);
}
</script>

<template>
    <div>
        <ul>
            <li v-for="tweet in tweets" :key="tweet.id">
                {{ tweet.content }}
            </li>
        </ul>

        Precisa estar autenticado
        Eae rapaziada
        De dentro do pages

        <form @submit.prevent="tweetando" class="text-black flex flex-col w-1/4 space-y-4">
        <input v-model="form.content" type="text">
        <button type="submit" class="bg-gray-50 text-black">tweet</button>
        </form>

        <button @click="logout" class="border-2 p-2">
            Logout
        </button>
    </div>
</template>

<style scoped>

</style>