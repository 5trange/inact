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
                                            //value={this.state.invoiceid}
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
                                            //value={this.state.custname}
                                        />
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        <TextInput 
                                            id={'date'}
                                            label="Date"
                                            locked={false}
                                            active={false} 
                                            //value={this.state.date}
                                        />
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        <TextInput 
                                            id={'amount'}
                                            label="Amount"
                                            locked={false}
                                            active={false} 
                                            //value={this.state.amount}
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
                                            //value={this.state.invoicenotes}
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
                                            //value={this.state.invoicestatus}
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
                                        <Button type="button" $agreeButton >
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