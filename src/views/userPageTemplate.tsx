import React, { Component, ReactFragment } from 'react';
import TodoList from 'components/todoList/todoList';
import Header from 'components/header/header';
import styled from 'styled-components';
import ThemeToggler from 'components/themeToggler/themeToggler';
import PageContext from 'context';
import switchTheme from 'utils/themeSwitch';
import Tooltip from 'utils/Tooltip';

interface Itheme {
    [key: string]: string;
}
export interface IthemeType {
    [key: string]: Itheme | number;
}
interface ThemeHandling {
    readonly themeCtx: string;
    readonly theme: IthemeType;
}

const StyledBackgroundTop = styled.div<ThemeHandling>`
    width: 100%;
    height: 300px;
    transition: background-image 1s;
    background-image: url(${({ themeCtx, theme }) => switchTheme(themeCtx, 'backgroundImg', theme)});
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 375px) {
        background-image: url(${({ themeCtx, theme }) => switchTheme(themeCtx, 'mobileBacgroungImg', theme)});
    }
`;

const StyledBackgroundBottom = styled.div<ThemeHandling>`
    width: 100%;
    min-height: calc(100vh - 300px);
    height: auto;
    display: flex;
    position: relative;
    justify-content: center;
    transition: background-color 1s;
    background-color: ${({ themeCtx, theme }) => switchTheme(themeCtx, 'colorBg', theme)};
`;
const StyledWrapper = styled.div`
    top: -250px;
    width: 540px;
    position: relative;
    z-index: 999;
    @media (max-width: 600px) {
        max-width: 85%;
    }
`;
const HeaderWrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
const StyledChristmas = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
`;
const StyledTree = styled.div`
    background-position: center;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 320px;
    height: 230px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${({ theme }) => theme.christmasTheme.trees2});
    animation: 0.7s ease-in-out slideLeft;
    animation-fill-mode: forwards;
    @media (max-width: 600px) {
        width: 160px;
        height: 120px;
    }
    :nth-of-type(2) {
        background-image: url(${({ theme }) => theme.christmasTheme.trees1});
        animation: 0.6s ease-in-out slideRight;
        bottom: 0;
        left: 0;
        animation-fill-mode: forwards;
    }
    @keyframes slideLeft {
        from {
            transform: translateX(280px);
        }

        to {
            transform: translateX(80px);
        }
    }
    @keyframes slideRight {
        from {
            transform: translateX(-280px);
        }

        to {
            transform: translateX(-60px);
        }
    }
`;
const StyledSanta = styled.div`
    position: absolute;
    top: 50px;
    right: 0px;
    width: 140px;
    height: 140px;
    background-size: cover;
    background-image: url(${({ theme }) => theme.christmasTheme.santa});
    animation: 0.7s ease-in-out slideLeft;
    animation-fill-mode: forwards;
    @media (max-width: 600px) {
        width: 100px;
        height: 100px;
    }

    @keyframes slideLeft {
        from {
            transform: translateX(280px);
        }

        to {
            transform: translateX(5px);
        }
    }
`;
interface IState {
    activeTheme: string;
    disableToggle: boolean;
}

class UserPageTemplate extends Component<unknown, IState> {
    state = { activeTheme: 'dark', disableToggle: false };

    handleThemeToggle = (): void => {
        this.setState((prevState) => ({
            disableToggle: !prevState.disableToggle,
            activeTheme:
                prevState.activeTheme === 'dark'
                    ? 'light'
                    : prevState.activeTheme === 'light'
                    ? 'christmas'
                    : 'dark',
        }));
        setTimeout(() => {
            this.setState((prevState) => ({
                disableToggle: !prevState.disableToggle,
            }));
        }, 1000);
    };

    render(): ReactFragment {
        const { activeTheme, disableToggle } = this.state;
        return (
            <PageContext.Provider value={{ activeTheme, Tooltip }}>
                <StyledBackgroundTop themeCtx={activeTheme} />
                <StyledBackgroundBottom themeCtx={activeTheme}>
                    <StyledWrapper>
                        <HeaderWrapper>
                            <Header big>T O D O</Header>
                            <ThemeToggler onClickFn={disableToggle ? null : this.handleThemeToggle} />
                        </HeaderWrapper>
                        <TodoList />
                    </StyledWrapper>
                    {activeTheme === 'christmas' && (
                        <StyledChristmas>
                            <StyledTree />
                            <StyledTree />
                            <StyledSanta />
                        </StyledChristmas>
                    )}
                </StyledBackgroundBottom>
            </PageContext.Provider>
        );
    }
}

export default UserPageTemplate;
