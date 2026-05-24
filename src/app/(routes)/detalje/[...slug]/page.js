import { getStoryblokApi } from "@/lib/storyblok";
import Button from "@/app/components/global/Button";
import Link from "next/link";
import ImageOverlay from "@/app/components/global/imageoverlay/ImageOverlay";
import { RegularText, SmallParagraph } from "@/app/components/typography";
import Questions from "@/app/components/workshop/singel/Questions";
import { Suspense } from "react";
import ErrorMessage from "@/app/components/global/ErrorMeassage";
import SingelForm from "@/app/components/workshop/singel/SingelForm";

export default async function DetailPage({ params }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchDetalje params={params} />
    </Suspense>
  );
}
const FetchDetalje = async ({ params }) => {
  try {
    const storyblokApi = getStoryblokApi();
    const { slug } = await params;
    const fullSlug = slug.join("/");
    const { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, {
      version: "draft",
    });

    const story = data.story;

    const date = new Date(story.content.date);
    const formattedDate = date.toLocaleDateString("nb-NO", {
      day: "2-digit",
      month: "long",
    });
    const formattedTime = date.toLocaleTimeString("nb-NO", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return (
      <main className="grid col-(--content-col) grid-cols-subgrid mt-30">
        <section className="grid md:grid-cols-2 md:grid-rows-10">
          <div className="grid gap-3 md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-full z-1">
            <div className="grid gap-3 md:block">
              <Link href="/workshop" className="flex justify-start">
                <Button text="tilbake" />
              </Link>
              <div className="md:hidden block ">
                <ImageOverlay width="1200" height="800" text={story.content.name} image={story.content.main_image.filename} variant="seven" containerH="h-160" containerW="w-full" size="xlarge" />
              </div>
              <div className="hidden md:block ">
                <ImageOverlay width="1200" height="800" text={story.content.name} image={story.content.main_image.filename} variant="eight" containerH="h-200" containerW="w-full" />
              </div>
            </div>
          </div>
          <div className="grid gap-3 md:col-start-2 md:col-span-1 md:row-start-3 md:row-span-full z-2">
            <div>
              <div className="mt-10 md:mt-0 flex justify-between">
                <RegularText text={formattedDate} color="accent" />
                <RegularText text={`kl ${formattedTime}`} color="accent" />
              </div>
              <hr className="2px accent mb-3" />
              <SmallParagraph text={story.content.introduction} />
            </div>
            <div>
              <div className="mt-7">
                <RegularText text="praktisk informasjon" color="accent" />
              </div>
              <hr className="2px accent mb-3" />
              <div className="grid gap-2">
                <SmallParagraph text="Man behøver ikke være student for å være med på våre workshops. Ta med deg behagelig tøy du ikke er redd for å svette i og som du føler deg vell i. Sko er ambefalt. " />
                <SmallParagraph text={`Adresse: ${story.content.adresse}`} />
                <SmallParagraph text={`Nivå: ${story.content.level}`} />
                <SmallParagraph text={`Pris: ${story.content.price}`} />
                <SmallParagraph text="Betaling: Via Vipps når man kommer" />
              </div>
            </div>
            <div>
              <div className="mt-7">
                <RegularText text="meld deg på her" color="accent" />
              </div>
              <hr className="2px accent mb-3" />
              <SingelForm />
            </div>
          </div>
          <Questions />
        </section>
      </main>
    );
  } catch (error) {
    console.error("Workshop fetch failed:", error);

    return <ErrorMessage text="We’re having some trouble loading this data, try again later!" style="mt-250 md:mt-210" />;
  }
};
