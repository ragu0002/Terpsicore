import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Workshop from "@/app/components/Workshop";
export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    workshop: Workshop,
  },
  apiOptions: {
    region: "eu",
  },
});
