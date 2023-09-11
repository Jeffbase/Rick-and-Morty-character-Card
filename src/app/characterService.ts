export async function fetchCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.results;
}
