import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import styled from "styled-components";

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
  link: propTypes.string,
};

export default function ProjectTile({
  img,
  title,
  subtitle,
  link,
}) {
  return (
    <TileWrapper img={img}>
      <div className="project-img"></div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Link to={link}>VIEW PROJECT »</Link>
    </TileWrapper>
  );
}

ProjectTile.propTypes = PropTypes;
