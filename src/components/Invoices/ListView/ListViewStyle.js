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
    border-radius: 8px;
    list-style-type: none;
    box-shadow: 0 10px 10px -10px #434C5E;
    transition: background-color 400ms ease-in-out;
`;

export const Link = styled(RouterLink)`
    display: grid;
    text-decoration: none;
    grid-template-rows: 1.5fr 1fr 1fr;
    grid-template-areas: 'invoiceid clientname' 'paymentdue status' 'totalprice invoicestatus';
    justify-content: space-between;
    padding: 24px;
    border: 1px solid transparent;
    border-radius: 8px;
    transition: border 350ms ease-in-out;
    &:focus {
        outline: none;
    }
    &:focus-visible {
        border: 1px solid #B48EAD;
    }
    @media (min-width: 768px) {
        grid-template-rows: unset;
        grid-template-areas: unset;
        grid-template-columns: 103px 151px 145px 103px 146px 28px;
        align-items: center;
        padding: 15px 20px 15px 32px;
        &:hover {
            border: 1px solid #A3BE8C;
        }
        svg {
            margin-left: auto;
        }
    }
`;

export const Invoiceid = styled.p`
    grid-area: invoiceid;
    @media (min-width: 768px) {
        grid-area: unset;
    }
`;

export const Slno = styled.span`
    color: #5E81AC;
`;

export const PaymentDue = styled.p`
    grid-area: paymentdue;
    color: #5E81AC;
    transition: color 400ms ease-in-out;
    @media (min-width: 768px) {
        grid-area: unset;
    }
`;

export const ClientName = styled.p`
    grid-area: clientname;
    justify-self: end;
    color: #5E81AC;
    transition: color 400ms ease-in-out;
    @media (min-width: 768px) {
        grid-area: unset;
        justify-self: start;
    }
`;

export const TotalPrice = styled.p`
    ${headingMedium}
    grid-area: totalprice;
    @media (min-width: 768px) {
        grid-area: unset;
    }
`;

export const InvoiceStatus = styled.p`
    grid-area: invoicestatus;
    @media (min-width: 768px) {
        grid-area: unset;
    }
`;