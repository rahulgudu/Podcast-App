import { Button } from "@heroui/button";
import React from "react";


const Index = () => {
  return (
    <div className="flex flex-col gap-9">
      <section className="flex flex-col gap-5 mt-9">
        <h1 className="text-white-1 text-20 font-bold">Trending Podcasts</h1>
        <Button className="text-white-1 bg-orange-1">Click Me</Button>
      </section>
      
    </div>
  );
};

export default Index;
