import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* Primary header stylesheet */
export const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr auto auto;
    background-color: #88C0D0;
    height: clamp(72px, 10.5vw, 80px);
    transition: background-color 400s ease-in-out;
    @media (min-width: 1024px) {
        position: sticky;
        top: 0;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto auto;
        height: 100vh;
        width: 120px;
        border-radius: 0px 0px 0px 0px;
    }
`;

/* Primary heading stylesheet */
export const StyledHeading = styled.h1`
    color: #4C566A;
    padding-left: 20px;
    padding-top: 15px;
`;

