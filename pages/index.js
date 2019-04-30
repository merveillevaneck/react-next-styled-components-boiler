import React from 'react';
import styled from 'styled-components';

/* basic styled component example implementation */

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    p {
        font-weight: normal;
        font-size: 20px;
        color: purple;
    }
`;

const Title = styled.h1`
    color: lightblue;
    font-weight: lighter;
    font-size: 100px;
`;

const Index = () => (
  <TitleContainer>
    <Title>Example Index Page</Title>
    <p>Happy Hacking!</p>
  </TitleContainer>
);

export default Index;
