"use client";

import { useRef, useState } from "react";
import "./forestilling.css";
import Galleri from "@/app/components/forestilling/Galleri";
import Plakat from "@/app/components/forestilling/Plakat";
import ImageOverlay from "@/app/components/global/imageoverlay/ImageOverlay";
import { SmallParagraph } from "@/app/components/typography";

const ForestillingClient = ({ stories }) => {
  const [selectedStory, setSelectedStory] = useState(stories[0]);

  const galleryRef = useRef(null);

  const handleSelectStory = (story) => {
    setSelectedStory(story);

    galleryRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="col-(--full-col) grid grid-cols-subgrid ">
      <div className="col-(--content-col) grid grid-cols-subgrid">
        <ImageOverlay width="1000" height="1000" text="forestilling" image="bilde_2.jpg" variant="two" containerH="h-120" containerW="w-full" />

        <div className="md:text-center md:grid grid-cols-5 *:col-start-2 *:col-span-3 py-5">
          <SmallParagraph text="Årets høydepunkt er vår egenproduserte forestilling på USF Verftet som finner sted rundt mars/ april hvert år. Forestillingsprosessen starter tidlig i høstsemesteret, med innstudering konsentrert på vårsemesteret, og resulterer i en oppsetning som viser kompaniets egenkoreograferte tolkning av årets tematikk." />
        </div>
      </div>
      <div className="col-(--full-col) grid-cols-subgrid scroll-container flex gap-3 py-3 md:col-(--content-col)  md:w-full">
        <div className="flex md:justify-between gap-6  md:w-full">
          {stories.map((story) => (
            <button key={story.slug} className="grid text-center w-full h-auto hover:scale-97 cursor-pointer mt-15 transition" onClick={() => handleSelectStory(story)}>
              <Plakat text={story.content.titel} year={story.content.year} image={story.content.poster.filename} />
            </button>
          ))}
        </div>
      </div>

      <div ref={galleryRef} className="col-(--content-col) grid grid-cols-subgrid">
        <Galleri story={selectedStory} />
      </div>
    </div>
  );
};

export default ForestillingClient;
