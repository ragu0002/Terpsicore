import { getStoryblokApi } from "@/lib/storyblok";
import HomeHero from "./components/home/HomeHero";
import OmOss from "./components/home/OmOss";
import Oppdrag from "./components/home/Oppdrag";
import WorkshopInfo from "./components/home/WorkshopInfo";
import ForestillingGalleri from "./components/home/ForestillingGalleri";
export default async function Home() {
  const { data } = await fetchData();
  const omOssStory = data.stories[0];
  return (
    <>
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <HomeHero />
        <OmOss stories={omOssStory} />
        <Oppdrag />
        <WorkshopInfo />
        <ForestillingGalleri />
      </main>
    </>
  );
}
export async function fetchData() {
  const storyblokApi = getStoryblokApi();

  return await storyblokApi.get("cdn/stories", {
    version: "draft",
    starts_with: "om-oss/",
  });
}
