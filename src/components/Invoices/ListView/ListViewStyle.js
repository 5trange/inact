import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { headingExtraSmall, headingMedium } from '../../dist/CommonStyle';

// Invoice list styles

export const StyledList = styled.ul`
    display: flex;
    flex-flow: column;
    gap: 16px;
    padding-right: 40px;
`;

export const Item = styled.li`
    background-color: #4c566A;
    border-radius: 4px;
    list-style-type: none;
    box-shadow: 0 10px 10px -10px #434C5E;
    transition: background-color 400ms ease-in-out;
`;

export const Link = styled(RouterLink)`
    display: grid;
    text-decoration: none;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: 'invoiceid clientname paymentdue totalprice status';
    justify-content: space-between;
    padding: 24px;
    border: 3px solid transparent;
    border-radius: 4px;
    transition: border 150ms ease-in-out;
    &:focus {
        outline: none;
    }
    &:focus-visible {
        border: 1px solid #B48EAD;
    }
    @media (min-width: 768px) {
        grid-template-rows: unset;
        grid-template-areas: unset;
        grid-template-columns: 100px 150px 150px 100px 146px;
        align-items: center;
        padding: 15px 20px 15px 32px;
        &:hover {
            border: 3px solid #A3BE8C;
        }
        svg {
            margin-left: auto;
        }
    }
`;

export const Invoiceid = styled.p`
    ${headingMedium}
    grid-area: invoiceid;
    color: #D8DEE9;
    @media (min-width: 768px) {
        grid-area: unset;
    }
`;

export const ClientName = styled.p`
    ${headingMedium}
    grid-area: clientname;
    color: #D8DEE9;
    @media (min-width: 768px) {
        grid-area: unset;
    }
`;

export const PaymentDue = styled.p`
    ${headingMedium}
    grid-area: paymentdue;
    color: #D8DEE9;
    @media (min-width: 768px) {
        grid-area: unset;
    }
`;

export const TotalPrice = styled.p`
    ${headingMedium}
    grid-area: totalprice;
    color: #D8DEE9;
    @media (min-width: 768px) {
        grid-area: unset;
    }
`;

export const InvoiceStatus = styled.p`
    ${headingMedium}
    grid-area: status;
    color: #D8DEE9;
    @media (min-width: 768px) {
        grid-area: unset;
    }
`;