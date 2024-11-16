<script setup lang="ts">
import actions from '~/actions';
import type { LoginForm } from '~/actions/auth/login';
import AuthRepository from '~/repositores/AuthRepository';
import { useAuthStore } from '~/stores/useAuthStore';

definePageMeta({
    layout:'guest',
    middleware:['guest']
    });

    //instanciando a loja
    const authStore = useAuthStore();

    //console.log(authStore);


    //Formulário com as informações de login: objeto
    const form = ref<LoginForm>({
        email:"test@example.com",
        password:"password"
    });

    //Chamar a api para poder fazer o login
    const handleLogin = async () => {

        const repo  = AuthRepository;

        await repo.login(form.value);

        await actions.auth.login(form.value);

        navigateTo("/");

    };

    const getUser = async () => {
        console.log(authStore.user);
    
    };

</script>



<template>
    <div>
        Login page
    </div>
    <form @submit.prevent="handleLogin" class="text-black flex flex-col w-1/4 space-y-4">
        <input v-model="form.email" type="email">
        <input v-model="form.password" type="password">
        <button type="submit" class="bg-gray-50 text-black">Login</button>
        <button type="button" @click="getUser" class="bg-gray-50 text-black">Get User</button>
    </form>
</template>

<style scoped>

</style>