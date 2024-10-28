<script setup lang="ts">
definePageMeta({
    layout:'guest',
    middleware:['guest']
    })


    //Formulário com as informações de login: objeto
    const form = ref({
        email:"test@example.com",
        password:"password"
    });

    const handleLogin = async () => {
        //caminho conforme documentação do sanctum Laravel
        await useFetch("http://localhost:8000/sanctum/csrf-cookie", {
            credentials: "include",
        });

        const cookie = useCookie("XSRF-TOKEN");

        //console.log(cookie.value as string);

        await useFetch("http://localhost:8000/login", {
            method: "POST",
            body: form.value,
            credentials: "include",
            watch: false,
            headers: {
                "X-XSRF-TOKEN": cookie.value as string,
            },
        });

        const user = await useFetch("http://localhost:8000/api/user", {
            credentials:"include",
        });

        console.log(user);
    };

    
    //Chamar a api para poder fazer o login

</script>



<template>
    <div>
        Login page
    </div>
    <form @submit.prevent="handleLogin" class="text-black flex flex-col w-1/4 space-y-4">
        <input v-model="form.email" type="email">
        <input v-model="form.password" type="password">
        <button type="submit" class="bg-gray-50 text-black">Login</button>
    </form>
</template>

<style scoped>

</style>