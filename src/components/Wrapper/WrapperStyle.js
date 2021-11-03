import styled from 'styled-components';

/* Primary wrapper stylesheet */
export const StyledWrapper = styled.main`
    position: relative;
    display: flex;
    flex-flow: column;
    min-height: 100vh;
    background-color: #2E3440;
    transition: background-color 400ms ease-in-out;
    @media (min-width: 1024px) {
        flex-flow: row;
    }
`;