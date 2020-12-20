import { Typography, Grid } from "@material-ui/core";
import React from "react";
import makeStyles from '@material-ui/core/styles/makeStyles'
import { SiJavascript, SiReact, SiRedux, SiFirebase, SiMaterialUi, SiCss3, SiGithub, SiTypescript, SiPostgresql } from 'react-icons/si'
import { FaNode } from 'react-icons/fa'
import { GiPirateHook } from 'react-icons/gi'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10% 0',
    width: '100%',
  },
  header: {
    color: theme.palette.common.black,
    paddingBottom: 15,
  },
  body: {
    color: 'grey',
  },
  list: {
    width: '100%',
    listStyle: 'none',
    padding: 0,
    '& li': {
      marginTop: 25,
      '& p': {
        fontSize: '1.2rem',
        width: '100%',
      }
    }
  }
}))



const mySkills = [
  {
    Icon: SiJavascript,
    name: "Javascript ES6",
    color: 'rgb(240 219 79)'
  },
  {
    Icon: SiReact,
    name: "React",
    color: 'rgb(97 219 251)'
  },
  {
    Icon: GiPirateHook,
    name: "React Hooks",
    color: 'black'
  },
  {
    Icon: SiRedux,
    name: "Redux",
    color: 'rgb(118 74 188)'
  },
  {
    Icon: SiFirebase,
    name: "Firestore: NoSQL",
    color: 'rgb(255 196 0)'
  },
  {
    Icon: SiMaterialUi,
    name: "Material-UI",
    color: 'rgb(0 129 203)'
  },
  {
    Icon: SiCss3,
    name: "HTML & CSS",
    color: 'rgb(53 168 219)'
  },
  {
    Icon: SiGithub,
    name: "Git",
    color: 'black'
  },
  {
    Icon: SiTypescript,
    name: "TypeScript",
    color: '#2962ff'
  },
  {
    Icon: FaNode,
    name: "NodeJS",
    color: '#28a745'
  },
  {
    Icon: SiPostgresql,
    name: "PostgreSQL",
    color: '#336791'
  }
];

export default function Skills() {
  const classes = useStyles()
  return (
    <article className={classes.root}>
      <Typography className={classes.header} variant="h2">Technical Skills</Typography>
      <Grid className={classes.list} container component="ul">
        {mySkills.map(({ Icon, name, color }) => (
          <Grid key={name} component="li" item xs={6} sm={4} md={3}>
            <Typography variant="body1">
              <>
                <Icon color={color} />
                &nbsp;{name}
              </>
            </Typography>
          </Grid>
        ))}
      </Grid>
    </article>
  );
}
