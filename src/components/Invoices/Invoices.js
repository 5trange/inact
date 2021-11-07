import "./InvoiceStyle";
import List from "./ListView/ListView";
import { Header, Container, Title, Text, Info } from "./InvoiceStyle";
import Button from '../dist/Button/Button';
import { useState } from "react";
import { InvoiceModal } from "../Modal/InvoiceModal";



const Invoices = () => {
    const  [showNewInvoiceModal, setShowNewInvoiceModal] = useState(false)

    const openNewInvoiceModal = () => {
        setShowNewInvoiceModal(prev => !prev)
    }

    return ( 
        <Container>
            <Header>
                <Info>
                    <Title>Invoices</Title>
                    <Text>
                        Available invoices are listed below.
                    </Text>
                </Info>
                <Button type="button" $agreeButton onClick={openNewInvoiceModal}>
                    Create
                </Button>
            </Header>
            <List />
            <InvoiceModal showNewInvoiceModal={showNewInvoiceModal} setShowNewInvoiceModal={setShowNewInvoiceModal} />
        </Container>
     );
}
 
export default Invoices;