'use client';

import { useEffect, useState, useRef } from 'react';
import { Anime } from '../types/anime';
import searchAnime from '../utils/searchAnime';

export default function Search() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Anime[]>([]);
  const [error, setError] = useState<string | null>(null);
  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true; // 2️⃣ First render? Mark as mounted and skip logic
      return;
    }

    const deBouncer = setTimeout(() => {
      setLoading(true);
      setError('');
      searchAnime(search)
        .then((data) => {
          setResults(data.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, 1000);
    return () => clearTimeout(deBouncer);
  }, [search]);

  return (
    <div className="search relative">
      <input
        value={search}
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search for an anime..."
        className="w-[400px] px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <div className="results absolute left-0 bottom-0 bg-gray-300 w-full">
        {loading && <p className="text-gray-500 mt-4">Loading...</p>}
      </div>

      {results.length > 0 && (
        <div className="absolute top-[100%] left-0 w-full bg-white ">
          {results.map((anime) => (
            <div
              key={anime.mal_id}
              className="rounded-xl shadow-md overflow-hidden flex flex-row"
            >
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="w-[60px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{anime.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {anime.background
                    ? anime.background.slice(0, 150) + '...'
                    : 'No description available.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
