import React from "react";
import JumboTron from "../../components/layouts/JumboTron";
import Section from "../../components/layouts/Section/Section";
import laptopImage from "../../images/laptop.png";
import Skills from "./components/Skills";
import MyProjects from "./components/MyProjects";
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles'
import IconButton from '@material-ui/core/IconButton'
import GithubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import Button from "@material-ui/core/Button";
import GetAppIcon from '@material-ui/icons/GetApp'
import resume from '../../public/kyla-gregory-resume.pdf'

const useStyles = makeStyles((theme) => ({
  root: {},
  headerContainer: {
    position: 'relative',
    padding: 0,
  },
  bodyWrapper: {
    marginTop: 15,
  },
  iconWrapper: {
    position: 'absolute',
    top: 10,
    right: 10,
    [theme.breakpoints.down('sm')]: {
      right: -20,
      top: 0
    }
  },
  twitterIconColor: {
    color: "rgb(29 161 242)"
  },
  resumeButton: {
    [theme.breakpoints.down('xs')]: {
      border: 'none'
    }
  }
}))

export default function Home() {
  const classes = useStyles()
  return (
    <>
      <JumboTron>
        <Grid className={classes.headerContainer} container direction="column">
          <Typography variant="h2">
            Hi, I’m Kyla.
          </Typography>
          <Typography variant="h2">
            I'm a Frontend Developer
          </Typography>
          <Typography variant="h2">
            awaiting my Hogwarts letter.
          </Typography>
          <div className={classes.iconWrapper}>
            <Button className={classes.resumeButton} href={resume} component="a" download variant='outlined'>
              Resumé
            </Button>
            <IconButton component="a" href="https://github.com/wyokyla23" target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </IconButton>
            <IconButton component="a" href="https://twitter.com/kyla_Christin_e" target="_blank" rel="noopener noreferrer">
              <TwitterIcon className={classes.twitterIconColor} />
            </IconButton>
          </div>
        </Grid>
      </JumboTron>
      <Section img={laptopImage}>
        <Grid className={classes.bodyWrapper} container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              I am a self-taught fullstack developer specializing in ReactJS. In my previous years, I have been exposed to many unique locations, people, and ideas. Because of that, I have acquired many useful skills that have helped me to pursue a career in development.
            </Typography>
            <ul>
              <li><strong>I am flexible.</strong> I easily adapt to change and look forward to it because for me, change typically means progress.</li>
              <li><strong>I am open-minded.</strong> I have a global perspective that allows me to view the world outside of myself. In this day and age, I believe it to be especially important. </li>
              <li><strong>I am driven.</strong> When I decided to pursue a career in development, I made decisions that were necessary to guide me to success. I purchased the necessary items, and dedicated every waking free time to studying and creating projects. I recently made the decision to work part time so that I could dedicate even more of my time to development.</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              My life experiences have shaped me to be thoughtful, curious, determined, eager, comedic, and empathetic. As I continue to create projects, I hope to infuse my personality into them and provide a safe, meaningful, and fun experience for future users.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h6' style={{ fontWeight: 'bold' }}>Experiences Unique To Me:</Typography>
            <ul>
              <li>I had success playing Blackjack professionally.</li>
              <li>I lived in Turkey and had the pleasure of experiencing diverse cultures. Unfortunately 9/11 happened during this time and my family was sent back to the United States.</li>
              <li>I lived in Monterey, California, a beautiful hub full of rich culture. </li>
            </ul>
          </Grid>
        </Grid>
        <Skills />
        <MyProjects />
      </Section>
    </>
  );
}
