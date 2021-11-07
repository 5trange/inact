import {
    StyledList, Invoiceid, Item, Link, ClientName, TotalPrice, PaymentDue, InvoiceStatus 
} from "./ListViewStyle";

import { useState } from "react";
import { InvoiceDetails } from "../../Modal/InvoiceDetails";
import PostData from '../../dat/dat.json';

const List = () => {
    const [showInvoiceModal, setShowInvoiceModal] = useState(false)

    const openInvoiceDetails = () => {
        setShowInvoiceModal(prev => !prev)
    }
    
    return(
        <>
            <StyledList>
                {PostData.map((postDetail, index) => {
                    return(
                    <Item>
                        <Link to="/" onClick={openInvoiceDetails}>
                            <Invoiceid>No:{postDetail.id}</Invoiceid>
                            <ClientName>{postDetail.custname}</ClientName>
                            <PaymentDue>Due:{postDetail.duedate}</PaymentDue>
                            <TotalPrice>{postDetail.amount}₹</TotalPrice>
                            <InvoiceStatus>{postDetail.invoicestatus}</InvoiceStatus>
                        </Link>
                        <InvoiceDetails 
                                invid={postDetail.id} 
                                invname = {postDetail.custname}
                                invdue = {postDetail.duedate}
                                invamount = {postDetail.amount}
                                invnotes = {postDetail.invoicenotes}
                                invstatus = {postDetail.invoicestatus}
                                showInvoiceModal={showInvoiceModal} 
                                setShowInvoiceDetails={setShowInvoiceModal} 
                        />
                    </Item>
                    );
                })}
            </StyledList>
        </>
    );
}

export default List;


