import ForestillingClient from "@/app/components/forestilling/ForestillingClient";
import ErrorMessage from "@/app/components/global/ErrorMeassage";
import { getStoryblokApi } from "@/lib/storyblok";
import { Suspense } from "react";

export default async function Foretilling() {
  return (
    <>
      <main className="grid col-(--full-col) grid-cols-subgrid mt-30">
        <Suspense fallback={<div>Loading...</div>}>
          <FetchForestilling />
        </Suspense>
      </main>
    </>
  );
}
const FetchForestilling = async () => {
  try {
    const storyblokApi = getStoryblokApi();

    const { data } = await storyblokApi.get("cdn/stories", {
      version: "draft",
      starts_with: "forestilling/",
    });
    if (!data) {
      return <ErrorMessage text="No forestillings data found." />;
    }
    return <ForestillingClient stories={data.stories} />;
  } catch (error) {
    console.error("Forestilling fetch failed:", error);

    return <ErrorMessage text="We’re having some trouble loading this data, try again later!" />;
  }
};
