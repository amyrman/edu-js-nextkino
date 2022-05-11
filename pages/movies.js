import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import dbConnect from "../lib/dbConnect";
import Movie from "../models/movie";

// Create a theme for this component
const moviesTheme = createTheme({
  palette: {
    primary: {
      main: '#66aca6',
    },
    secondary: {
      main: '#233f3d',
    },
    background: {
      paper: "rgba(102, 172, 166, 0.1)",
    },
  },
  typography: {
    fontFamily: ['"Playfair Display"'],
  },
});

export default function MoviesPage({ movies }) {

  return (
    <ThemeProvider theme={moviesTheme}>
      <Grid
        container
        justifyContent="center"
        sx={{ maxWidth: 1200, mx: "auto", gap: 2, flexGrow: 1 }}
      >
        {movies.map((movie) => (
          <div key={movie.id}>
            <Grid item xs={12} p={2}>
              <Card
                sx={{
                  borderRadius: 2,
                  width: 225,
                  transition: "0.3s",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  ":hover": { boxShadow: 15, transform: "scale3d(1.06, 1.06, 1)" },
                }}
              >
                <CardActionArea
                  href={`/movies/${encodeURIComponent(movie.id)}`}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={movie.imgUrl}
                    alt="movie picture"
                  />
                  <CardContent>
                    <Typography
                      sx={{ height: "80px", marginBottom: "0" }}
                      color="primary"
                      align="center"
                      variant="h6"
                      component="div"
                    >
                      {movie.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button href={`/movies/${encodeURIComponent(movie.id)}`} size="small" color="primary" sx={{flexGrow: 1 }}>
                    <Typography align="center">Book this movie</Typography>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </div>
        ))}
      </Grid>
    </ThemeProvider>
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
