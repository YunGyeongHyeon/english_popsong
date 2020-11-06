import React from "react";
import styled from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Main from "./main/main";

const Container = styled.div`
  width:100%;
  height:100%;
  position:absolute;
`;

const Image = styled.img`
  width:100%;
  height:100%;
  background:lightcyan;
`; 

const BackgroundColor = styled.div`
  background:rgba(255, 170, 141, 0.5);
  width:100%;
  height:100%;
  position:absolute;
`;

export default () => (
  <Container>
    <GlobalStyles />
    <Main />
    <BackgroundColor />
    <Image src="https://i.pinimg.com/originals/8a/98/e5/8a98e5da6602dca03ff3c5656b0561ce.jpg" />
  </Container>
);
