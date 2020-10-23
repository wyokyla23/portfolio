import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const SectionDiv = styled.section`
  width: 100%;
  div.section-image {
    width: 100%;
    padding-top: 56.25%;
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0px 0px;
  }
  div.section-content {
    color: grey;
  }
`;

const PropTypes = {
  // image url
  img: propTypes.string,
};

export default function Section({
  children,
  img,
}) {
  return (
    <SectionDiv img={img}>
      <div className="section-image" />
      <div className="section-content">
        {children}
      </div>
    </SectionDiv>
  );
}

Section.propTypes = PropTypes;
