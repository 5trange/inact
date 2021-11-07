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
                                            required={true}
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
                                            required={true}
                                            locked={false}
                                            active={false} 
                                        />
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        <TextInput 
                                            id={'date'}
                                            label="Date"
                                            required={true}
                                            locked={false}
                                            active={false} 
                                        />
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        <TextInput 
                                            id={'amount'}
                                            label="Amount"
                                            required={true}
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
                                            required={true}
                                            locked={false}
                                            active={false} 
                                        />
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        <TextInput 
                                            id={'invoicestatus'}
                                            required={true}
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
                                        <Button type="button" type="submit" $agreeButton>
                                            Send
                                        </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Button type="submit" $agreeButton onClick={() => setShowNewInvoiceModal(prev => !prev)}>
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