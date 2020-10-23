import React from "react";
import Container from '@material-ui/core/Container'

export default function Main({ children }) {
  return <Container fixed={true}>{children}</Container>;
}
