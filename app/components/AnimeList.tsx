import Link from 'next/link';
import { Anime } from '../types/anime';
import getAnime from '../utils/getAnime';

export default async function AnimeList() {
  const data = await getAnime();
  const anime: Anime[] = data.data;

  return (
    <div className="anime-list-container py-[24px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {anime.map((anime) => (
          <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl duration-300 overflow-hidden hover:translate-y-[-10px] transition-all">
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {anime.title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-4">
                  {anime.background
                    ? anime.background.slice(0, 250) + '...'
                    : 'No background available.'}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
