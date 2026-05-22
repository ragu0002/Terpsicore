import ImageOverlay from "../global/imageoverlay/ImageOverlay";
import { SmallParagraph } from "../typography";
import Button from "../global/Button";
import { getStoryblokApi } from "@/lib/storyblok";
import WorkshopCard from "./WorkshopCard";
import { Suspense } from "react";
import ErrorMessage from "../global/ErrorMeassage";
import Link from "next/link";
export default async function WorkshopInfo() {
  return (
    <section className="grid col-(--full-col) grid-cols-subgrid bg-foreground -mt-30 z-1 pb-20">
      <div className="col-(--content-col) mt-50 grid gap-8 md:grid-cols-2">
        <div className="md:col-1 grid gap-4 self-start ">
          <ImageOverlay size="xlarge" width="2000" height="4000" text="workshops" image="workshop_home.jpg" variant="three" color="white" containerH="h-90" />
          <SmallParagraph text="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt" color="white" />

          <Link className="flex justify-end" href="/workshop">
            <Button text="Les mer" variant="dark" />
          </Link>
        </div>
        <div className="mt-10 grid gap-8 md:col-2">
          <Suspense fallback={<div>Loading...</div>}>
            <FetchWorkshop />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

const FetchWorkshop = async () => {
  try {
    const storyblokApi = getStoryblokApi();

    const { data } = await storyblokApi.get("cdn/stories", {
      version: "draft",
      starts_with: "workshop/",
    });
    if (!data) {
      return <ErrorMessage text="No Workshop data found." />;
    }
    return (
      <>
        {data.stories.slice(0, 2).map((story) => (
          <WorkshopCard key={story.id} blok={story.content} slug={story.full_slug} />
        ))}
      </>
    );
  } catch (error) {
    console.error("Workshop fetch failed:", error);

    return <ErrorMessage text="We’re having some trouble loading this data, try again later!" />;
  }
};
