import actions from '~/actions';
import { useAuthStore } from '~/stores/useAuthStore';
export default defineNuxtPlugin(async (nuxtApp) => {


        try{
            await actions.auth.fetchUser();
            navigateTo('/');
        } catch (error){
            console.error(error);
            navigateTo('/login')
        }

})
