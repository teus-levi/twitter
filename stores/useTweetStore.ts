import type { Tweet } from "~/actions/tweet"

export const useTweetStore = defineStore('tweet', () => {
    const tweets = ref<Tweet[]>([])
    const addTweet = (tweet: Tweet) => tweets.value.push(tweet)

    return {tweets, addTweet}
})