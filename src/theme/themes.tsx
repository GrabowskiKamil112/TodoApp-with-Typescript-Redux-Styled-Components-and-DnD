import darkBackground from 'assets/bg-desktop-dark.jpg';
import lightBackground from 'assets/bg-desktop-light.jpg';
import christmasBackground from 'assets/bg-desktop-christmas.jpg';
import mobileDarkBackground from 'assets/bg-mobile-dark.jpg';
import mobileLightBackground from 'assets/bg-mobile-light.jpg';
import mobileChristmasBackground from 'assets/bg-mobile-christmas.jpg';
import moonIcon from 'assets/icon-moon.svg';
import sunIcon from 'assets/icon-sun.svg';
import snowflakeIcon from 'assets/icon-snowflake.svg';
import trees1 from 'assets/trees-1.png';
import trees2 from 'assets/trees-2.png';
import santa from 'assets/santa.png';

export const theme = {
    darkTheme: {
        backgroundImg: darkBackground,
        mobileBacgroungImg: mobileDarkBackground,
        colorBg: 'hsl(235, 21%, 11%)',
        colorSurface: 'hsl(235, 24%, 19%)',
        colorBorder: '#393A4B',
        colorTextActive: 'hsl(234, 39%, 85%)',
        colorTextCompleted: 'hsl(233, 14%, 35%)',
        colorText1: 'hsl(235, 16%, 43%)',
        boxShadow: '0px 35px 50px -15px hsla(0, 0%, 0%, 0.699)',
        themeIcon: sunIcon,
    },
    lightTheme: {
        backgroundImg: lightBackground,
        mobileBacgroungImg: mobileLightBackground,
        colorBg: 'hsl(0, 0%, 98%)',
        colorSurface: 'hsl(0, 0%, 100%)',
        colorBorder: '#E3E4F1',
        colorTextActive: 'hsl(235, 19%, 35%)',
        colorTextCompleted: 'hsl(233, 11%, 84%)',
        colorText1: 'hsl(235, 9%, 61%)',
        boxShadow: ' 0px 35px 50px -15px rgba(76, 77, 82, 0.7)',
        themeIcon: snowflakeIcon,
    },
    christmasTheme: {
        backgroundImg: christmasBackground,
        mobileBacgroungImg: mobileChristmasBackground,
        colorBg: '#E1E1E1',
        colorSurface: '#f93838',
        colorBorder: '#ff7171',
        colorTextActive: '#f1faee',
        colorTextCompleted: '#ff7474',
        colorText1: '#ffa7a7',
        boxShadow: '0px 35px 50px -15px rgba(190, 0, 0, 0.5)',
        themeIcon: moonIcon,
        trees1: trees1,
        trees2: trees2,
        santa: santa,
    },
    gradientPrimary: 'linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
    light: 400,
    bold: 700,
    fontSize: {
        xxs: '1.2rem',
        xs: '1.4rem',
        s: '1.6rem',
        m: '2.1rem',
        l: '2.8rem',
        xl: '4rem',
    },
};
