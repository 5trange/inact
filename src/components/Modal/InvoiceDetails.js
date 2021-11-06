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
        CloseModalButton,
        InvoiceDisplayWrapper
    }from './InvoiceDetailsStyle';
import TextInput from '../dist/TextInput/TextInput';

export const InvoiceDetails = ({ showInvoiceModal, setShowInvoiceDetails }) => {
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
                                        PlaceHolder
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        PlaceHolder
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        PlaceHolder
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        PlaceHolder
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        PlaceHolder
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        PlaceHolder
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
                                        <Button type="button" $agreeButton>
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