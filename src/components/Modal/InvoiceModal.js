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
import BasicSelect from '../dist/DropDown/DropDown';

export const InvoiceModal = ({ showNewInvoiceModal, setShowNewInvoiceModal }) => {
    return (
        <>
            {
                showNewInvoiceModal ? (
                    <Background>
                        <CreateModalWrapper showNewInvoiceModal={showNewInvoiceModal}>
                            
                            <ModalContent>
                                <div>
                                    <ModalValues>
                                        <TextInput 
                                            id={'custname'}
                                            label="Customer Name"
                                            predicted="Strange"
                                            locked={false}
                                            active={false} 
                                        />
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        <TextInput 
                                            id={'custadd'}
                                            label="Customer Address"
                                            predicted="India"
                                            locked={false}
                                            active={false} 
                                        />
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        <TextInput 
                                            id={'workhours'}
                                            label="Work Hours"
                                            predicted="6"
                                            locked={false}
                                            active={false} 
                                        />
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        <TextInput 
                                            id={'materials'}
                                            label="Materials"
                                            predicted="Timber"
                                            locked={false}
                                            active={false} 
                                        />
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        <TextInput 
                                            id={'notes'}
                                            label="Invoice Notes"
                                            predicted="Cash"
                                            locked={false}
                                            active={false} 
                                        />
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalValues>
                                        <BasicSelect></BasicSelect>
                                    </ModalValues>
                                </div>
                                <div>
                                    <ModalCancel>
                                        <Button type="button" $cancelButton>
                                            Cancel
                                        </Button>
                                    </ModalCancel>     
                                </div>
                                <div>
                                    <ModalProceed>
                                        <Button type="button" $agreeButton>
                                            Send
                                        </Button>
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