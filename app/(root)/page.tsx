"use client";
import PodCastCard from "@/components/PodCastCard";
import { podcastData } from "@/constants";

const Index = () => {
  // const tasks = useQuery(api.tasks.get);
  return (
    <div className="flex flex-col gap-9">
      <section className="flex flex-col gap-5 mt-9">
        {/* <main
          className="flex min-h-screen flex-col items-center justify-between p-24
         text-white-1
         ">
          {tasks?.map(({ _id, text }) => (
            <div key={_id}>{text}</div>
          ))}
        </main> */}

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
