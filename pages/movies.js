import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Grid,
  IconButton,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import dbConnect from "../lib/dbConnect";
import Movie from "../models/movie";

/* TODO:
- Refine styling of MUI cards and grid -- symmetrical etc
  - Make description collapsible - DOING
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
  - movie.description - DONE
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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MoviesPage({ movies }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (index) => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}
      >
        {movies.map((movie) => (
          <div key={movie._id}>
            {/* <Box sx={{ flexGrow: 1 }}> */}
            <Grid item xs={10}>
              <Card sx={{ maxWidth: 225 }}>
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
                    <Typography gutterBottom variant="h6" component="div">
                      {movie.title}
                    </Typography>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {movie.description}
                        </Typography>
                      </CardContent>
                    </Collapse>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Book this movie
                  </Button>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
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
