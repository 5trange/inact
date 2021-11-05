import styled, { css } from 'styled-components';

export const primaryButton = css`
    min-width: 100px;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    background: #8FBCBB;
    color: #fff;
    font-size: 0.75rem;
    cursor: pointer;
    @media (min-width: 768px) {
        &:hover {
            background-color: #A3BE8C;
        }
    }
`;

const newinvoiceButton = css`
    ${primaryButton}
`;

export const StyledButton = styled.button`
    ${({ $newInvoice }) =>
        $newInvoice &&
        css`
            ${newinvoiceButton}
        `};
    ${({ $primary }) =>
        $primary &&
        css`
            ${primaryButton}
        `};
`;