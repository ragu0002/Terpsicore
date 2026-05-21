import { XlargeText } from "@/app/components/typography";
import Landing from "@/app/components/workshop/Landing";
import Workshop from "@/app/components/workshop/Workshop";
import { getStoryblokApi } from "@/lib/storyblok";
import { Suspense } from "react";
import ErrorMessage from "@/app/components/global/ErrorMeassage";
export default async function WorkshopPage() {
  return (
    <main className="grid col-(--content-col) grid-cols-subgrid mt-30 gap-20">
      <Landing />
      <Suspense fallback={<div>Loading...</div>}>
        <FetchWorkshop />
      </Suspense>
    </main>
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
      <section className="grid gap-5">
        <XlargeText text="kommende Workshops" color="accent" />
        {data.stories.map((story) => (
          <Workshop key={story.id} blok={story.content} slug={story.full_slug} />
        ))}
      </section>
    );
  } catch (error) {
    console.error("Workshop fetch failed:", error);

    return <ErrorMessage text="We’re having some trouble loading this data, try again later!" />;
  }
};
