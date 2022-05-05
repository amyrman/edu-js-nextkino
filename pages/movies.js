import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Box,
  Grid,
} from "@mui/material";
import dbConnect from "../lib/dbConnect";
import Movie from "../models/movie";
import Link from "next/link";

/* TODO:
- Import MUI grid - DOING
- Link cards to correct movie page:
  - href={`/movies/${encodeURIComponent(movie.id)}
  - unsure if links should be used in some special way when combining Next + MUI per https://mui.com/material-ui/guides/routing/#more-examples

- Display description and title from db:
  - movie.description
  - movie.title
*/

export default function MoviesPage({ movies }) {
  return (
    <>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <div key={movie._id}>
            {/* <Box sx={{ flexGrow: 1 }}> */}
            <Grid item xs={10}>
              <Card sx={{ maxWidth: 225 }}>
                <CardActionArea href={`/movies/${encodeURIComponent(movie.id)}`}>
                  <CardMedia
                    component="img"
                    height="275"
                    image={movie.imgUrl}
                    alt="movie picture"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {movie.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Book this movie
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* </Box> */}
          </div>
        ))}
      </Grid>
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
