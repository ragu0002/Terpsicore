import ImageOverlay from "@/app/components/global/imageoverlay/ImageOverlay";
import { Paragraph, SmallParagraph } from "@/app/components/typography";
import Landing from "@/app/components/workshop/Landing";
import Workshop from "@/app/components/workshop/Workshop";
import { getStoryblokApi } from "@/lib/storyblok";
import Image from "next/image";

export default async function WorkshopPage() {
  const { data } = await fetchData();

  return (
    <main className="grid col-(--content-col) grid-cols-subgrid">
      <Landing />
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
