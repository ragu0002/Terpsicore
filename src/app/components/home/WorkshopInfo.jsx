import ImageOverlay from "../global/imageoverlay/ImageOverlay";
import { SmallParagraph } from "../typography";
import Button from "../global/Button";
import { getStoryblokApi } from "@/lib/storyblok";
import WorkshopCard from "./WorkshopCard";

export default async function WorkshopInfo() {
  const { data } = await fetchData();

  return (
    <section className="grid col-(--full-col) grid-cols-subgrid bg-foreground -mt-30 z-1 pb-20">
      <div className="col-(--content-col) mt-50 grid gap-5 md:grid-cols-5">
        <div className="md:col-span-3 grid gap-2 self-start ">
          <ImageOverlay width="2000" height="4000" text="workshops" image="bilde_2.jpg" variant="three" color="white" />
          <SmallParagraph text="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt" color="white" />

          <div className="flex justify-end">
            <Button text="Les mer" variant="dark" />
          </div>
        </div>
        <div className="mt-10 grid gap-3 md:col-span-2">
          {data.stories.slice(0, 2).map((story) => (
            <WorkshopCard key={story.id} blok={story.content} />
          ))}
        </div>
      </div>
    </section>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();

  return await storyblokApi.get("cdn/stories", {
    version: "draft",
    starts_with: "workshop/",
  });
}
