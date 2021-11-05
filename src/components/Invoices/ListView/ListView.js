import { useEffect } from 'react';
import { useTheme } from 'styled-components';
import {
    StyledList, Invoiceid, Item, Link, ClientName, TotalPrice, PaymentDue, Slno, InvoiceStatus 
} from "./ListViewStyle";

const List = () => {
    return(
        <>
            <StyledList>
                <Item>
                    <Link>
                        <Invoiceid>
                            <Slno>#</Slno>
                            123
                        </Invoiceid>
                        <PaymentDue>Due 13-13-2023</PaymentDue>
                        <ClientName>Adith K. Murali</ClientName>
                        <TotalPrice>1200</TotalPrice>
                        <InvoiceStatus>Paid</InvoiceStatus>
                    </Link>
                </Item>
            </StyledList>
        </>
    );
}

export default List;


