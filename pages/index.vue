<script setup lang="ts">
definePageMeta({
    middleware: ['auth']
})

const logout = async () => {
    const store = useAuthStore();
    await store.logout();
    navigateTo('/login');
}
</script>

<template>
    <div>
        Precisa estar autenticado
        Eae rapaziada
        De dentro do pages

        <button @click="logout" class="border-2 p-2">
            Logout
        </button>
    </div>
</template>

<style scoped>

</style>