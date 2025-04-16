export default async function getAnimeById(id: number) {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const data = await response.json();
  return data;
}
