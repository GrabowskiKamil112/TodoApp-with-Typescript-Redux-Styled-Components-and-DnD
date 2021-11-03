import React from 'react';
import { GlobalStyle } from 'theme/globalStyle';
import { theme } from 'theme/themes';
import styled, { ThemeProvider } from 'styled-components';

const StyledWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: block;
    position: relative;
    overflow-x: hidden;
`;

const MainTemplate: React.FC = ({ children }) => (
    <StyledWrapper>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledWrapper>
);

export default MainTemplate;
