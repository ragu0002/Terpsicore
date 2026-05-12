import Workshop from "@/app/components/Workshop";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function WorkshopPage() {
  const { data } = await fetchData();

  return (
    <main className="grid col-(--content-col) grid-cols-subgrid gap-12">
      {data.stories.map((story) => (
        <Workshop key={story.id} blok={story.content} />
      ))}
    </main>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();

  return await storyblokApi.get("cdn/stories", {
    version: "draft",
    starts_with: "workshop/",
  });
}
