import { Suspense } from "react";
import { getStoryblokApi } from "@/lib/storyblok";

import HomeHero from "./components/home/HomeHero";
import OmOss from "./components/home/OmOss";
import Oppdrag from "./components/home/Oppdrag";
import WorkshopInfo from "./components/home/WorkshopInfo";
import ForestillingGalleri from "./components/home/ForestillingGalleri";
import ErrorMessage from "./components/global/ErrorMeassage";

export default function Home() {
  return (
    <main className="grid col-(--full-col) grid-cols-subgrid">
      <HomeHero />

      <Suspense fallback={<div>Loading...</div>}>
        <FetchOmOss />
      </Suspense>

      <Oppdrag />
      <WorkshopInfo />
      <ForestillingGalleri />
    </main>
  );
}
const FetchOmOss = async () => {
  try {
    const storyblokApi = getStoryblokApi();

    const { data } = await storyblokApi.get("cdn/stories", {
      version: "draft",
      starts_with: "om-oss/",
    });

    const omOssStory = data?.stories?.[0];

    if (!omOssStory) {
      return <ErrorMessage text="No Om Oss data found." style="mt-250 md:mt-210" />;
    }

    return <OmOss stories={omOssStory} />;
  } catch (error) {
    console.error("Om oss fetch failed:", error);

    return <ErrorMessage text="We’re having some trouble loading this data, try again later!" style="mt-250 md:mt-210" />;
  }
};
