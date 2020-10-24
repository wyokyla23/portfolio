import React from "react";
import styled from "styled-components";
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ProjectTile from "../../../components/ProjectTile/ProjectTile";
import accio from "../../../images/accio.png";
import rbg from "../../../images/rbg.png";
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
    }
  }
`;

const listOfProjects = [
  {
    img: rbg,
    title: "Random Book Generator",
    subtitle:
      "Random Book Generator suggests a random book to those who are looking for something new to read. It was built using React, Redux, Google Cloud Firestore, and Material-UI. The user signs up or logs in and a unique id will be stored in a Users Collection database on Firestore as well as in a Redux Users store. The user then has access to the Book Generator. When clicked, the Book Generator receives a single random book from the New York Times Books API. The user can favorite the book and a unique id will be assigned to the book where it will be stored in the specific user document as well as locally in a Redux Books store.",
    liveLink: "https://random-book-generator.netlify.app",
    githubLink: "https://github.com/wyokyla23/RandomBookGenerator.git",
    available: true
  },
  {
    img: accio,
    title: "Accio School Supplies",
    subtitle:
      "You've received your letter to Hogwarts! Accio School Supplies is your one stop shop to purchase all of your required school items. It was built using React, React Hooks, Context (for storing and sharing data from a centralized location), and Material-UI. Immediately upon entering the site, the user can begin adding items to their cart while crossing off their list. They can then check out, receive their total, and count down the days to when school begins! This project is still a work in progress.",
    githubLink: "https://github.com/wyokyla23/accio-school-supplies",
    available: false
  },
];

export default function MyProjects() {
  const classes = useStyles()
  return (
    <ProjectsWrapper>
      <Typography className={classes.header} variant="h2">My Projects</Typography>
      <Typography className={classes.body} variant="body1">
        I have kept myself busy working on a few small projects (and one very large project). I am always finding new ways to refactor or add new functionality to my projects as a way to learn and improve my skills.
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
