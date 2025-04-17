import getAnimeById from '@/app/utils/getAnimeById';

export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);
  const anime = await getAnimeById(id);

  return (
    <main className="min-h-screen bg-gray-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <img
            src={anime.data.images.jpg.image_url}
            alt={anime.data.title}
            className="w-full max-w-xs rounded-xl shadow-lg object-cover"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{anime.data.title}</h1>
            <p className="text-gray-300 leading-relaxed">
              {anime.data.background
                ? anime.data.background
                : 'No background information available.'}
            </p>
            {/* Optional extra info block */}
            <div className="mt-6 text-sm text-gray-400">
              <p>
                <span className="font-medium text-white">Episodes:</span>{' '}
                {anime.data.episodes || 'N/A'}
              </p>
              <p>
                <span className="font-medium text-white">Status:</span>{' '}
                {anime.data.status || 'N/A'}
              </p>
              <p>
                <span className="font-medium text-white">Score:</span>{' '}
                {anime.data.score || 'N/A'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
