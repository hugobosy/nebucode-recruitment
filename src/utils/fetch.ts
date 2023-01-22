export async function fetchApi(
  clientId: string,
  inputValue: string,
  page: number
) {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?client_id=${clientId}&query=${inputValue}&page=${page}`
  );
  return res.json();
}
