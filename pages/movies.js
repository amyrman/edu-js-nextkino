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
      paper: "rgba(0.8)",
    },
  },
  typography: {
    fontFamily: ['"Playfair Display"'],
  },
});

export default function MoviesPage({ movies }) {

- Questions...
  - Do changes to _app.js and addition of _document.js pose any risk for merge conflicts?
    - unsure if links should be used in some special way when combining Next + MUI per https://mui.com/material-ui/guides/routing/#more-examples
*/

export default function MoviesPage({ movies }) {
  return (
    <ThemeProvider theme={moviesTheme}>
      <Grid
        container
        spacing={2}
        sx={{ maxWidth: "1000px", mx: "auto" }}
      >
        {movies.map((movie) => (
          <div key={movie._id}>
            {/* <Box sx={{ flexGrow: 1 }}> */}
            <Grid item xs={10}>
              <Card 
              sx={{
                maxWidth: 225,
                ':hover': { boxShadow: 20},
                }}>
                <CardActionArea
                  href={`/movies/${encodeURIComponent(movie.id)}`}
                >
                  <CardMedia
                    component="img"
                    height="275"
                    image={movie.imgUrl}
                    alt="movie picture"
                  />
                  <CardContent>
                    <Typography align="center" gutterBottom variant="h6" component="div">
                      {movie.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <Typography align="center">
                    Book this movie
                    </Typography>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* </Box> */}
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
