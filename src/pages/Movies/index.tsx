import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { SelfCarousel } from "../../components/SelfCarousel";
import { apiMCU } from "../../services/api";
import { HomeContainer } from "../Characters/styles";

type MovieShape = {
  id: number;
  name: string;
  // release_date: string;
  // duration: number;
  description: string;
  path: string;
  // trailer_url: string;
  // author: string;
  // chronology: number;
};


export function Movies() {
  const [movies, setMovies] = useState<MovieShape[]>([]);

  useEffect(() => {
    apiMCU.get("movies").then((response) => {
      const moviesvariables = response.data.data.map(
        (mov: {
          id: number;
          title: string;
          overview: string;
          cover_url: string;
        }) => {
          return {
            id: String(mov.id),
            name: mov.title,
            description: mov.overview,
            path: mov.cover_url,
          };
        }
      );
      setMovies(moviesvariables);
    });
  }, []);

  return (
    <HomeContainer>
      <Navbar />
      <SelfCarousel individualContent={movies} />
    </HomeContainer>
  );
}
