"use client";
import { fetchAnime } from "@/app/action";
import { Anime } from "@/types/anime";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import LoadMore from "./LoadMore";
import Card from "./Card";

let page = 1;

const AnimeList = () => {
  const { ref, inView } = useInView();

  const [data, setData] = useState<Anime[]>([]);

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => {
        setData([...data, ...res]);
      });
      page++;
    }
  }, [inView, data]);

  return (
    <div>
      <h2 className="text-3xl text-white font-bold my-8 text-center">Explore Anime</h2>
      <section className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-10 justify-items-center">
        {data.map((item: Anime) => (
          <Card key={item?.id} item={item} />
        ))}
      </section>
      <div ref={ref}>
        <LoadMore />
      </div>
    </div>
  );
};
export default AnimeList;
