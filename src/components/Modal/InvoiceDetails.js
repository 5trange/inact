import React from 'react';
import Button from '../dist/Button/Button';
import { 
        Background, 
        ModalContent, 
        ModalValues,
        ModalHeader,
        ModalCancel,
        ModalProceed,
        CloseModalButton,
        InvoiceDisplayWrapper
    }from './InvoiceDetailsStyle';

export const InvoiceDetails = ( props ) => {
    const details = props.dataobject;
    const showInvoiceModal = props.showInvoiceModal;
    const setShowInvoiceDetails = props.setShowInvoiceDetails;
    console.log(details.custname);

    return (
        <>
            {
                showInvoiceModal ? (
                    <Background>
                        <InvoiceDisplayWrapper showInvoiceModal={showInvoiceModal}>
                            <ModalContent>
                                <div>
                                    <ModalHeader>
                                        <h1>Invoice Details</h1>
                                    </ModalHeader>
                                </div>
                                <div />
                                <div>
                                    <ModalValues>
                                        Invoice ID: {details.id}
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        Customer Name: {details.custname}
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        Date: {details.duedate}
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        Amount: {details.amount}
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        Invoice Notes: {details.invoicenotes}
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        Status: {details.invoicestatus}
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalCancel>
                                        <Button type="button" $cancelButton onClick={() => setShowInvoiceDetails(prev => !prev)}>
                                            Close
                                        </Button>
                                    </ModalCancel>     
                                </div>
                                <div>
                                    <ModalProceed>
                                        <Button type="button" $agreeButton>
                                            Send
                                        </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Button type="button" $agreeButton onClick={() => setShowInvoiceDetails(prev => !prev)}>
                                            Ok
                                        </Button>
                                    </ModalProceed>  
                                </div>
                            </ModalContent>
                            <CloseModalButton aria-label='Close Modal' onClick={() => setShowInvoiceDetails(prev => !prev)} />
                        </InvoiceDisplayWrapper>
                    </Background>
                ) : null
            }
        </>
    );
};