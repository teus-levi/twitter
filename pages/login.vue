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

    //Chamar a api para poder fazer o login
    const handleLogin = async () => {

        //useApi 
        await useApi("sanctum/csrf-cookie");
        //componente para login
        await useApi('login', {method: 'POST', body: form.value});
        //buscar user
        const user = await useApi('api/user');

        console.log(user);

    };

    const getUser = async () => {
        /*
        await useFetch("http://localhost:8000/sanctum/csrf-cookie", {
            credentials: "include",
        });
        
        const user = await useFetch("http://localhost:8000/api/user", {
            credentials:"include",
        });
        
    
    */
    //useApi 
        await useApi("sanctum/csrf-cookie");
        //buscar user
        const user = await useApi('api/user');
        console.log(user.data.value);
    
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