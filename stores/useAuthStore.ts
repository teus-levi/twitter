import {defineStore} from 'pinia';
import type { User } from '~/actions/auth/fetchUser';

//definindo loja do pinea - autenticação
export const useAuthStore = defineStore('auth', () => {

    const user = ref<User|null>(null);
    const isLoggedIn = computed(() => !!user.value)
    const setUser = (newUser: User|null) => user.value = newUser;

    

    return {user, isLoggedIn, setUser};
})

