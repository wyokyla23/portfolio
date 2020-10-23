import React, { memo } from "react";
import styled from "styled-components";

const Jumbo = styled.div`
  margin: 10% 0;
  display: flex;
`;

export default memo(function JumboTron({
  children,
}) {
  return <Jumbo>{children}</Jumbo>;
});
