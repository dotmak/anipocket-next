import getAnimeById from '@/app/utils/getAnimeById';

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const anime = await getAnimeById(id);

  return (
    <article>
      <h1>{anime.title}</h1>
    </article>
  );
}
