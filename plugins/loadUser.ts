import { useAuthStore } from '~/stores/useAuthStore';
export default defineNuxtPlugin(async (nuxtApp) => {
    const auth = useAuthStore()

    console.log('jeremias')

    if(!auth.isLoggedIn){
        try{
            await auth.fetchUser()
        } catch (e){
            navigateTo('/login')
        }
    }
})
