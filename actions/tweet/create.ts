import { useTweetStore } from "~/stores/useTweetStore";
import type { Tweet } from ".";

export interface CreateForm{
    content: string;
}

export async function create(tweet: CreateForm){
    //const response = await usePost('/tweet', {body: tweet});
    const response = {
        data: {
            value: {
                id: '1',
                content: 'Hello world',
                created_at: '2021-01-01',
                updated_at: '2021-01-01',
                userId: '1'
            }
        }
    }

    useTweetStore().addTweet(response.data.value as Tweet);
}