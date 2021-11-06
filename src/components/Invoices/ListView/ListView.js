import {
    StyledList, Invoiceid, Item, Link, ClientName, TotalPrice, PaymentDue, InvoiceStatus 
} from "./ListViewStyle";

const List = () => {
    return(
        <>
            <StyledList>
                <Item>
                    <Link>
                        <Invoiceid>No. 123</Invoiceid>
                        <ClientName>Strange</ClientName>
                        <PaymentDue>Due 13-13-2023</PaymentDue>
                        <TotalPrice>1200</TotalPrice>
                        <InvoiceStatus>Paid</InvoiceStatus>
                    </Link>
                </Item>
            </StyledList>
        </>
    );
}

export default List;


