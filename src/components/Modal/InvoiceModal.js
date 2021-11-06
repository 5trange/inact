import React from 'react';
import Button from '../dist/Button/Button';
import { 
        Background, 
        CreateModalWrapper, 
        ModalContent, 
        ModalValues,
        ModalHeader,
        ModalCancel,
        ModalProceed,
        CloseModalButton
    }from './InvoiceModalStyle';
import TextInput from '../dist/TextInput/TextInput';

export const InvoiceModal = ({ showNewInvoiceModal, setShowNewInvoiceModal }) => {
    return (
        <>
            {
                showNewInvoiceModal ? (
                    <Background>
                        <CreateModalWrapper showNewInvoiceModal={showNewInvoiceModal}>
                            
                            <ModalContent>
                                <div>
                                    <ModalHeader>
                                        <h1>Create new Invoice</h1>
                                    </ModalHeader>
                                </div>
                                <div />
                                <div>
                                    <ModalValues>
                                        <TextInput 
                                            id={'invoiceid'}
                                            label="Invoice ID"
                                            locked={false}
                                            active={false} 
                                        />
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        <TextInput 
                                            id={'custname'}
                                            label="Customer Name"
                                            locked={false}
                                            active={false} 
                                        />
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        <TextInput 
                                            id={'invoiceamount'}
                                            label="Amount"
                                            locked={false}
                                            active={false} 
                                        />
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        <TextInput 
                                            id={'items'}
                                            label="Items"
                                            locked={false}
                                            active={false} 
                                        />
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        <TextInput 
                                            id={'invoicenotes'}
                                            label="Invoice Notes"
                                            locked={false}
                                            active={false} 
                                        />
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        <TextInput 
                                            id={'invoicestatus'}
                                            label="Status"
                                            locked={false}
                                            active={false} 
                                        />
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalCancel>
                                        <Button type="button" $cancelButton onClick={() => setShowNewInvoiceModal(prev => !prev)}>
                                            Cancel
                                        </Button>
                                    </ModalCancel>     
                                </div>
                                <div>
                                    <ModalProceed>
                                        <Button type="button" $agreeButton>
                                            Send
                                        </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Button type="button" $agreeButton>
                                            Create
                                        </Button>
                                    </ModalProceed>  
                                </div>
                            </ModalContent>
                            <CloseModalButton aria-label='Close Modal' onClick={() => setShowNewInvoiceModal(prev => !prev)} />
                        </CreateModalWrapper>
                    </Background>
                ) : null
            }
        </>
    );
};