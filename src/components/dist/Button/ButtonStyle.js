import styled, { css } from 'styled-components';

export const primaryButton = css`
    min-width: 100px;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    color: #2E3440;
    font-size: 0.75rem;
    cursor: pointer;
    transition: background-color 300ms ease-in-out, color 400ms ease-in-out;
`;

const agreeButton = css`
    ${primaryButton}
    background: #8FBCBB;
    @media (min-width: 768px) {
        &:hover {
            background-color: #A3BE8C;
        }
    }
`;

const cancelButton = css`
    ${primaryButton}
    background: #EBCB8B;
    @media (min-width: 768px) {
        &:hover {
            background-color: #BF616A;
        }
    }
`;

export const StyledButton = styled.button`
    ${({ $agreeButton }) =>
        $agreeButton &&
        css`
            ${agreeButton}
        `};
    ${({ $primary }) =>
        $primary &&
        css`
            ${primaryButton}
        `};
    ${({ $cancelButton }) =>
        $cancelButton &&
        css`
            ${cancelButton}
        `};
`;