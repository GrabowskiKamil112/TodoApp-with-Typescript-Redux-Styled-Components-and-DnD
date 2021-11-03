import React from 'react';
import styled, { css } from 'styled-components';
import themeContext from 'hoc/themeContext';
import switchTheme from 'utils/themeSwitch';

interface IStyledIcon {
    themeCtx: string;
    onClick: any;
}
const StyledIcon = styled.a<IStyledIcon>`
    color: white;
    background-image: url(${({ themeCtx, theme }) => switchTheme(themeCtx, 'themeIcon', theme)});
    background-size: contain;
    height: 27px;
    align-self: center;
    width: 27px;
    cursor: pointer;

    ${({ themeCtx }) =>
        themeCtx === 'light' &&
        css`
            height: 30px;
            width: 30px;
        `}
`;
interface ChildProps {
    onClickFn: null | (() => void);
    themeContext: 'dark' | 'light' | 'christmas';
}

const ThemeToggler: React.FC<ChildProps> = ({ onClickFn, themeContext }) => (
    <StyledIcon onClick={onClickFn} themeCtx={themeContext}></StyledIcon>
);

export default themeContext(ThemeToggler);
