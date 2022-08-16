import React from "react"
import styled from "styled-components"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import ProjectTile from "../../../components/ProjectTile/ProjectTile"
import todo from "../../../images/todo.png"
import rbg from "../../../images/rbg.png"
import HPTrivia from '../../../images/HPTrivia.png'
import puzzleSociety from '../../../images/puzzle-society.png'
import makeStyles from "@material-ui/core/styles/makeStyles"

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
    img: puzzleSociety,
    title: "The Puzzle Society (PRIVATE REPO)",
    subtitle:
      "The Puzzle Society is where users go to play games and in the process, become a part of a secret society where playing games unlocks points, Society history secrets, and more! Play as a guest, a registered user, or a subscriber to fully maximize your experience. Invite friends, view your statistics, receive notifications on whether you've earned an achievement, etc. The Puzzle Society awaits you.",
    liveLink: "https://www.puzzlesociety.com/",
    githubLink: "https://www.puzzlesociety.com/",
    available: true
  },
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
    img: todo,
    title: "TypeScript/Postgres To-do App",
    subtitle:
      "I created this full stack application to add new technical skills as I learn them. The React app contains a simple to-do list but utilizes an Express and NodeJS server by making http requests, where the server queries the data stored in a postgres database. TypeScript is also used for type safety. ",
    githubLink: "https://github.com/wyokyla23/sandbox-app",
    available: false
  },
  {
    img: HPTrivia,
    title: "Harry Potter Trivia",
    subtitle:
      "This fun application was built with React.js, React-Router, Material-UI, and Lodash. Each question and its answers are stored in an object that is then randomly displayed one at a time.",
    liveLink: "https://harrypottertrivia.netlify.app/",
    githubLink: "https://github.com/wyokyla23/trivia",
    available: true
  }
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
