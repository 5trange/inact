import {
    StyledList, Invoiceid, Item, Link, ClientName, TotalPrice, PaymentDue, InvoiceStatus 
} from "./ListViewStyle";

import { useState } from "react";
import { InvoiceDetails } from "../../Modal/InvoiceDetails";

const List = () => {
    const [showInvoiceModal, setShowInvoiceModal] = useState(false)

    const openInvoiceDetails = () => {
        setShowInvoiceModal(prev => !prev)
    }

    return(
        <>
            <StyledList>
                <Item>
                    <Link to="/" onClick={openInvoiceDetails}>
                        <Invoiceid>No. 123</Invoiceid>
                        <ClientName>Strange</ClientName>
                        <PaymentDue>Due 13-13-2023</PaymentDue>
                        <TotalPrice>1200</TotalPrice>
                        <InvoiceStatus>Paid</InvoiceStatus>
                    </Link>
                </Item>
            </StyledList>
            <InvoiceDetails showInvoiceModal={showInvoiceModal} setShowInvoiceDetails={setShowInvoiceModal} />
        </>
    );
}

export default List;


