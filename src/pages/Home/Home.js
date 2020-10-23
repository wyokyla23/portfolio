import React from "react";
import JumboTron from "../../components/layouts/JumboTron";
import Section from "../../components/layouts/Section/Section";
import laptopImage from "../../images/laptop-image.jpg";
import githubImage from "../../images/githubImage.png";
import twitterImage from "../../images/TwitterLogo.png";
import styled from "styled-components";
import Skills from "./components/Skills";
import MyProjects from "./components/MyProjects";
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {},
  headerContainer: {
    padding: 0,
  },
  bodyWrapper: {
    marginTop: 15,
  }
})

export default function Home() {
  const classes = useStyles()
  return (
    <>
      <JumboTron>
        <Grid className={classes.headerContainer} container direction="column">
          <Typography variant="h2">
            Hi I’m Kyla.
          </Typography>
          <Typography variant="h2">
            Front End Developer,
          </Typography>
          <Typography variant="h2">
            awaiting my Hogwarts letter.
          </Typography>
        </Grid>
        {/* <button>
          <img
            src={githubImage}
            alt="Github Link"
          ></img>
        </button>
        <button>
          <img
            src={twitterImage}
            alt="Twitter Link"
          ></img>
        </button> */}
      </JumboTron>
      <Section img={laptopImage}>
        <Grid className={classes.bodyWrapper} container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc eget
              arcu at justo tincidunt bibendum a at
              ex. Ut et euismod justo, id convallis
              turpis. Maecenas fringilla tempus
              ultricies. Aenean non ante sed lectus
              auctor rhoncus. Ut commodo fringilla
              nisi quis accumsan. Nulla euismod diam
              sed nunc faucibus, a varius libero
              cursus. Nunc mattis, nunc et tincidunt
              pulvinar, dui turpis pretium nisi, et
              ornare ipsum tortor et ante. Nulla et
              interdum diam, a rutrum nibh.
              Curabitur auctor, sapien nec rutrum
              pretium, lacus dui aliquam libero,
              vitae vehicula arcu nulla semper orci.
              Ut auctor porttitor ultrices. Donec
              rhoncus metus at lorem cursus
              fermentum non volutpat mi. In viverra,
              leo eget porttitor pretium, tortor
              ante luctus diam, eget viverra libero
              enim ac lacus. Maecenas blandit
              hendrerit libero, vel vulputate felis
              pellentesque congue.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              Etiam felis erat, scelerisque sed
              imperdiet id, hendrerit quis leo.
              Vestibulum lacinia ornare massa at
              convallis. Morbi et orci dignissim,
              eleifend arcu sit amet, pellentesque
              nisl. Fusce pretium facilisis elit,
              sed viverra neque sagittis tincidunt.
              Nam tincidunt fermentum odio, a
              lobortis nisl dapibus eu. Donec in
              risus id justo ullamcorper
              sollicitudin. Mauris malesuada, elit a
              malesuada ornare, urna mi imperdiet
              ex, non imperdiet nunc magna ut
              turpis. Fusce bibendum elit eget dolor
              sodales hendrerit. Sed sagittis quam
              nec egestas vestibulum. Nulla lectus
              quam, feugiat non odio et, maximus
              sagittis nulla.
            </Typography>
          </Grid>
        </Grid>
        <Skills />
        <MyProjects />
      </Section>
    </>
  );
}
