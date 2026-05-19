import { getStoryblokApi } from "@/lib/storyblok";
import Button from "@/app/components/global/Button";
import Link from "next/link";
import ImageOverlay from "@/app/components/global/imageoverlay/ImageOverlay";
import { RegularText, SmallParagraph, Paragraph } from "@/app/components/typography";
import Questions from "@/app/components/workshop/singel/Questions";
export default async function DetailPage({ params }) {
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
        <div className="grid gap-3 md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-full">
          <div className="grid gap-3 md:block">
            <Link href="/workshop" className="flex justify-start">
              <Button text="tilbake" />
            </Link>
            <div className="md:hidden block ">
              <ImageOverlay width="2000" height="4000" text={story.content.name} image="bilde_2.jpg" variant="seven" containerH="h-160" containerW="w-full" />
            </div>
            <div className="hidden md:block ">
              <ImageOverlay width="2000" height="4000" text={story.content.name} image="bilde_2.jpg" variant="eight" containerH="h-200" containerW="w-full" />
            </div>
          </div>
        </div>
        <div className="grid gap-3 md:col-start-2 md:col-span-1 md:row-start-3 md:row-span-full">
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
            <form className="grid gap-3">
              <div>
                <SmallParagraph />
                <input type="text" id="fornavn" className="w-full border rounded-xl px-5 py-2 cursor-pointer focus:outline-accent placeholder:text-foreground" placeholder="Navn"></input>
              </div>
              <div>
                <SmallParagraph />
                <input type="text" id="fornavn" className="w-full border rounded-xl px-5 py-2 cursor-pointer focus:outline-accent placeholder:text-foreground" placeholder="Email"></input>
              </div>
              <Button text="send inn" variant="dark" />
            </form>
          </div>
        </div>
        <Questions />
      </section>
    </main>
  );
}
