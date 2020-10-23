import { string } from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  overflow: auto;
`;

const Container = ({ children }) => {
  return <Wrapper halfWidth>{children}</Wrapper>;
};

export default Container;
