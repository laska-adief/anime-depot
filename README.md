
# Anime Depot
An infinite web app anime list

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## API Reference
https://shikimori.one/api/doc/1.0/animes/index
#### Get all items

```http
  GET https://shikimori.one/api/animes
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | Must be a number between 1 and 100000 |
| `limit` | `number` | Must be a number 50 maximum |
| `order` | `enum` | popularity – by popularity|



## Screenshots

![App Screenshot](https://prnt.sc/4E9atQam7RBl)
![App Screenshot](https://prnt.sc/ZC9UCwHsrbNq)


## Tech Stack

**Techs:** Next.JS, React, TailwindCSS, React Intersection Observer

