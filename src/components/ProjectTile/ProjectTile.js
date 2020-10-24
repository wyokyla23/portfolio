import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import GitHubIcon from '@material-ui/icons/GitHub'

const TileWrapper = styled.div`
  div.project-img {
    width: 100%;
    padding-top: 56.25%;
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0px 0px;
  }
`;

const PropTypes = {
  img: propTypes.string,
  title: propTypes.string,
  subtitle: propTypes.string,
  liveLink: propTypes.string,
  githubLink: propTypes.string,
};

export default function ProjectTile({
  img,
  title,
  subtitle,
  liveLink,
  githubLink,
  available,
}) {
  return (
    <TileWrapper img={img}>
      <div className="project-img"></div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Grid container justify='space-between'>
        <Button disabled={!available} href={liveLink} style={{ backgroundColor: 'transparent', fontWeight: 'bold' }} component="a" rel="noopener noreferrer" target="_blank">
          {available ? 'Preview >' : 'Unavailable'}
        </Button>
        <Button href={githubLink} style={{ backgroundColor: 'transparent' }} startIcon={<GitHubIcon style={{ marginLeft: '10px' }} />} component="a" rel="noopener noreferrer" target="_blank">
        </Button>
      </Grid>
      {/* <a href={liveLink} rel="noopener noreferrer" target="_blank" >VIEW LIVE »</a>
      <a href={githubLink} rel="noopener noreferrer" target="_blank">VIEW CODE »</a> */}
    </TileWrapper >
  );
}

ProjectTile.propTypes = PropTypes;
