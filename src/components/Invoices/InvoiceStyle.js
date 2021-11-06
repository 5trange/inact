import styled from 'styled-components';
import { headingTitle } from '../dist/CommonStyle';

// Invoice container style
export const Container = styled.section`
    padding: 0 24px;
    margin-bottom: 40px;

    @media (min-width: 768px) {
        width: 100%;
        max-width: 730px;
        margin: 0 auto 40px auto;
        padding-right: 120px;
    }
`;

// Invoice header style
export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 18px;
    align-items: center;
    margin: 32px 0;
    padding-left: 40px;

    @media (min-width: 768px) {
        gap: 40px;
    }

    @media (min-width: 1024px) {
        margin: 72px 0 64px 0;
    }
`;

// Invoice info style
export const Info = styled.div``;

// Invoice title style
export const Title = styled.h1`
    ${headingTitle}
    margin-bottom: 4px;
`;

// Basic text style
export const Text = styled.p`
    color: #5E81AC;
    transition: color 400ms ease-in;
`;