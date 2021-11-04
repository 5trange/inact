import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* Invoice header stylesheet */
export const Header = styled.header`
    display: grid;
    grid-template-columns: ifr auto auto;
    gap: 17px;
    align-items: center;
    margin: 32px 0;

    @media  (min-width: 768px) {
        gap: 40px;
    }

    @media  (min-width: 1024px) {
        margin: 72px 0 64px 0;
    }
`;

/* Invoice content stylesheet */
export const Container = styled.section`
    padding: 0 24px;
    margin-bottom: 40px;
    @media (min-width: 768px) {
        width: 100%;
        max-width: 730px;
        margin: 0 auto 40px auto;
        padding: 0;
    }
`;

export const Info = styled.div``;

/* Invoice text stylesheet */
export const Text = styled.p`
    transition: color 400ms ease-in;
`;

/* Invoice title stylesheet */
export const Title = styled.h1`
    font-size: 2.0rem;
    letter-spacing: -0.03125rem;
    line-height: 2.14;
    margin-bottom: 4px;
`;