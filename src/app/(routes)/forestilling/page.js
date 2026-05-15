import ForestillingClient from "@/app/components/forestilling/ForestillingClient";

import { getStoryblokApi } from "@/lib/storyblok";
export default async function Foretilling() {
  const { data } = await fetchData();
  return (
    <>
      <main className="grid col-(--full-col) grid-cols-subgrid mt-30">
        <ForestillingClient stories={data.stories} />
      </main>
    </>
  );
}
export async function fetchData() {
  const storyblokApi = getStoryblokApi();

  return await storyblokApi.get("cdn/stories", {
    version: "draft",
    starts_with: "forestilling/",
  });
}
