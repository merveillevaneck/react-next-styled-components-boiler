import React from 'react';
import styled from 'styled-components';

/* basic styled component example implementation */

const Title = styled.h1`
    color: lightblue;
    font-weight: lighter;
    font-size: 100px;
    div {
        width: 75%;
        display: flex;
        justify-content: center;
    }
`;

const Index = () => <Title><div>My Page</div></Title>;

export default Index;
