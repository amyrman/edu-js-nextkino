import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import dbConnect from "../lib/dbConnect";
import Movie from "../models/movie";
import Link from "next/link";

/* TODO:
- Import MUI grid
- Link cards to correct movie page:
  - href={`/movies/${encodeURIComponent(movie.id)}
  - unsure if links should be used in some special way when combining Next + MUI

- Display description and title from db:
  - movie.description
  - movie.title
*/

export default function MoviesPage({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <div key={movie._id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="fit-content"
                image={movie.imgUrl}
                alt="movie picture"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Movie title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Book this movie
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </>
  );
}

/* Retrieve movies data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  const result = await Movie.find({});
  const movies = result.map((doc) => {
    const movie = doc.toObject();
    movie._id = movie._id.toString();
    return movie;
  });

  return { props: { movies: movies } };
}
