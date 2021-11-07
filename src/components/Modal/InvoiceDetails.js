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
    const invid = props.invid;
    const invname = props.invname;
    const invdue = props.invdue;
    const invamount = props.invamount;
    const invnotes = props.invnotes;
    const invstatus = props.invstatus;
    const showInvoiceModal = props.showInvoiceModal;
    const setShowInvoiceDetails = props.setShowInvoiceDetails;

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
                                        Invoice ID: {invid}
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        Customer Name: {invname}
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        Date: {invdue}
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        Amount: {invamount}
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        Invoice Notes: {invnotes}
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        Status: {invstatus}
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
                                            OK
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