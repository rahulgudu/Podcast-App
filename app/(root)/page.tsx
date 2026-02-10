import PodCastCard from "@/components/PodCastCard";
import { podcastData } from "@/constants";
import { Button } from "@heroui/button";
import React from "react";

const Index = () => {
  return (
    <div className="flex flex-col gap-9">
      <section className="flex flex-col gap-5 mt-9">
        <h1 className="text-white-1 text-20 font-bold">Trending Podcasts</h1>
        <div className="podcast_grid">
          {podcastData.map((podcast) => (
            <PodCastCard
              key={podcast.id}
              imgURL={podcast.imgURL}
              title={podcast.title}
              description={podcast.description}
              podcastId={podcast.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
