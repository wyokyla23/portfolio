import React from "react";
import styled from "styled-components";

const Jumbo = styled.div`
  margin: 10% 0;
  display: flex;
`;

export default function JumboTron({
  children,
}) {
  return <Jumbo>{children}</Jumbo>;
};