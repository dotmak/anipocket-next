import AnimeList from './components/AnimeList';

export default function Home() {
  return (
    <main className="homepage">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Random animes</h1>
        <AnimeList />
      </div>
    </main>
  );
}
