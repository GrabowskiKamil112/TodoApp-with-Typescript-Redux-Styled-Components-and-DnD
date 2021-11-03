import styled from 'styled-components';

const Header = styled.h1<{ big: boolean }>`
    font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
    font-weight: ${({ theme }) => theme.bold};
    color: white;
    @media (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    ::first-letter {
        text-transform: uppercase;
    }
`;

export default Header;
