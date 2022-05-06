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
} from "@mui/material";
import dbConnect from "../lib/dbConnect";
import Movie from "../models/movie";

/* TODO:
- Refine styling of MUI cards and grid -- symmetrical etc
  - Set max height for Title text area

  Optional:
  - Make cards responsive i.e. 4 per row on mobile
  - Change font style to correspond with rest of site
  - Change CardContent bg color to match site
  - hover effect on cards to stand out
  - Animate on hover
  - Link Book to bookings page
---
DONE:
- Display description and title from db: - DONE
  - movie.description - DONE - DELETED
  - movie.title - DONE
- Import MUI grid - DONE
- Link cards to correct movie page:
  - href={`/movies/${encodeURIComponent(movie.id)} per https://nextjs.org/docs/api-reference/next/link - DONE
- Refine styling
  - Center cards and 4 per row -- DONE
  - Make Title text a bit smaller -- DONE

- Questions...
  - Do changes to _app.js and addition of _document.js pose any risk for merge conflicts?
    - unsure if links should be used in some special way when combining Next + MUI per https://mui.com/material-ui/guides/routing/#more-examples
*/

export default function MoviesPage({ movies }) {
  return (
    <>
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
