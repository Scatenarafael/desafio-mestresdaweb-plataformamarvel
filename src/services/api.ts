import axios from "axios";

console.log(process.env.MARVEL_PRIVATE_KEY, process.env.MARVEL_PUBLIC_KEY);

export const apiMARVEL = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
});

export const apiMCU = axios.create({
  baseURL: "https://mcuapi.herokuapp.com/api/v1/",
});
