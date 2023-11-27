"use server";

export const fetchAnime = async (page: number, limit: number = 12) => {
  const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=popularity`);
  const data = await response.json();

  return data;
};
