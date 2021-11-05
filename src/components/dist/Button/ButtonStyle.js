import styled, { css } from 'styled-components';

export const primaryButton = css`
font-size: 0.75rem;
    letter-spacing: -0.016rem;
    line-height: 1.25;
    padding: 17px 24px 16px 24px;
    font-weight: 700;
    background-color: #8FBCBB;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    @media (min-width: 768px) {
        &:hover {
            background-color: #A3BE8C;
        }
    }

    &:focus {
        outline: none;
    }
`;

const newinvoiceButton = css`
    ${primaryButton}
    position: relative;
    padding: 15px 15px 14px 46px;

    &::before {
        position: absolute;
        content: '';
        top: 50%;
        left: 6px;
        width: 32px;
        height: 32px;
        background-color: #8FBCBB;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 50%;
        transform: translateY(-50%);
        @media (min-width: 768px) {
            left: 8px;
        }
    }
    
    @media (min-width: 768px) {
        padding: 17px 15px 16px 58px;
    }
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