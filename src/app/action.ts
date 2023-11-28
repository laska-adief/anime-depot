"use server";

import fetch, { RequestInit } from "node-fetch";

export const fetchAnime = async (page: number, limit: number = 12) => {
  const headers: RequestInit["headers"] = {
    "Content-Type": "application/json",
  };
  const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=popularity`, { headers: headers });
  const data = await response.json();

  return data;
};
