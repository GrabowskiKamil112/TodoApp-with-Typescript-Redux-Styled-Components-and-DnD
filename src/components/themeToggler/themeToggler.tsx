import React from 'react';
import styled, { css } from 'styled-components';
import themeContext from 'hoc/themeContext';
import switchTheme from 'utils/themeSwitch';

interface IStyledIcon {
    themeCtx: string;
    onClick: () => void;
    disableToggle: boolean;
}
const StyledIcon = styled.a<IStyledIcon>`
    color: white;
    background-image: url(${({ themeCtx, theme }) => switchTheme(themeCtx, 'themeIcon', theme)});
    background-size: contain;
    height: 27px;
    align-self: center;
    width: 27px;
    cursor: ${({ disableToggle }) => (!disableToggle ? 'pointer' : 'default')};

    ${({ themeCtx }) =>
        themeCtx === 'light' &&
        css`
            height: 30px;
            width: 30px;
        `}
`;
interface ThemeTogglerProps {
    onClickFn: null | (() => void);
    themeContext: 'dark' | 'light' | 'christmas';
    disableToggle: boolean;
}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ onClickFn, themeContext, disableToggle }) => (
    <StyledIcon onClick={() => onClickFn} themeCtx={themeContext} disableToggle={disableToggle}></StyledIcon>
);

export default themeContext(ThemeToggler);
