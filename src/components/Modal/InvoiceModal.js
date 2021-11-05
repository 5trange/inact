import React from 'react';
import styled from 'styled-components';
import { Background, CreateModalWrapper, ModalContent, CloseModalButton } from './InvoiceModalStyle'

export const InvoiceModal = ({ showNewInvoiceModal, setShowNewInvoiceModal }) => {
    return (
        <>
            {
                showNewInvoiceModal ? (
                    <Background>
                        <CreateModalWrapper showNewInvoiceModal={showNewInvoiceModal}>
                            <ModalContent>
                                Hello there! I'm the modal content.
                            </ModalContent>
                            <CloseModalButton aria-label='Close Modal' onClick={() => setShowNewInvoiceModal(prev => !prev)} />
                        </CreateModalWrapper>
                    </Background>
                ) : null
            }
        </>
    );
};