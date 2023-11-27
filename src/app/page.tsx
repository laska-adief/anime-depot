import Hero from "@/components/Hero";
import AnimeList from "@/components/AnimeList";

export default async function Home() {
  return (
    <div>
      <Hero />
      <main className="container-max">
        <AnimeList />
      </main>
    </div>
  );
}
