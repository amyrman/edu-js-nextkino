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
- Refine styling of MUI cards and grid -- symmetrical etc
  - Center cards and 4 per row -- DONE
  - Make cards responsive i.e. 4 per row on mobile
  - Make description collapsible - DOING
  - Make Title text a bit smaller
  - Set max height for Title text
  - Change font style to correspond with rest of site
  - Change CardContent bg color to match site
  - hover effect on cards to stand out
---
DONE:
- Display description and title from db: - DONE
  - movie.description - DONE
  - movie.title - DONE
- Import MUI grid - DONE
- Link cards to correct movie page:
  - href={`/movies/${encodeURIComponent(movie.id)} per https://nextjs.org/docs/api-reference/next/link - DONE


- Questions...
  - Do changes to _app.js and addition of _document.js pose any risk for merge conflicts?
    - unsure if links should be used in some special way when combining Next + MUI per https://mui.com/material-ui/guides/routing/#more-examples
*/

export default function MoviesPage({ movies }) {
  return (
    <>
      <Grid container spacing={2} style={{maxWidth: "900px", marginLeft: "auto", marginRight: "auto"}}>
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
                    <Typography gutterBottom variant="h6" component="div">
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
