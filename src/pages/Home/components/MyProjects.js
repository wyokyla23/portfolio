import React from "react";
import styled from "styled-components";
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ProjectTile from "../../../components/ProjectTile/ProjectTile";
import laptopImage from "../../../images/laptop-image.jpg";
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  root: {},
  bodyWrapper: {
    marginTop: 15,
  },
  header: {
    color: theme.palette.common.black,
    paddingBottom: 15,
  },
  body: {
    color: 'grey',
  },
  tileWrapper: {
    marginTop: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  }
}))

const ProjectsWrapper = styled.article`

  div.tile-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    div.individual-tile {
      flex: 1;
      padding: 15px;
      /* width: 50%;
      box-sizing: border-box;
      display: inline-block; */
    }
  }
`;

const listOfProjects = [
  {
    img: laptopImage,
    title: "Random Book Generator",
    subtitle:
      "Generate a random book based on your existing preferences attached to your Firestore user",
    link: "https://www.google.com/",
  },
  {
    img: laptopImage,
    title: "Accio School Supplies",
    subtitle:
      "Shop for your Hogwarts school supplies",
    link: "https://www.google.com/",
  },
];

export default function MyProjects() {
  const classes = useStyles()
  return (
    <ProjectsWrapper>
      <Typography className={classes.header} variant="h2">My Projects</Typography>
      <Typography className={classes.body} variant="body1">
        Mauris malesuada, elit a malesuada ornare,
        urna mi imperdiet ex, non imperdiet nunc
        magna ut turpis.
      </Typography>
      <Grid container spacing={4} className={classes.tileWrapper}>
        {listOfProjects.map((project) => (
          <Grid
            key={project.title}
            item
            xs={12}
            lg={6}
            className="individual-tile"
          >
            <ProjectTile {...project} />
          </Grid>
        ))}
      </Grid>
    </ProjectsWrapper>
  );
}
