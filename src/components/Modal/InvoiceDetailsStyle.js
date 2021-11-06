import styled from 'styled-components';
import { MdClose } from 'react-icons/md'


export const Background = styled.div`
    position: fixed;
    top: 0;
    left:0;
    bottom: 0;
    right: 0;
    background: rgba(76, 86, 106, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

// Makes the modal appear on the center of the screen.
export const InvoiceDisplayWrapper = styled.div`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    margin: 0;
    padding: 50px;
    width: 800px;
    height: 600px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #2E3440;
    color: #000;
    display: grid;
    position: fixed;
    border-radius: 10px;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 31px 13px;
    grid-template-areas:
        "ModalHeader ModalHeader"
        "ModalValues ModalValues"
        "ModalValues ModalValues"
        "ModalCancel ModalProceed";
    flex-direction: column;
    justify-content: center;
    line-height: 1.8;
    color: #D8DEE9;
`;

export const ModalValues = styled.div`
    padding-left: 30px;
    grid-area: ModalValues;
`;

export const ModalHeader = styled.div`
    padding-left: 30px;
    grid-area: ModalHeader;
`;

export const ModalCancel = styled.div`
    grid-area: ModalCancel;
    padding-left: 30px;
    padding-bottom: 30px;
`;

export const ModalProceed = styled.div`
    grid-area: ModalProceed;
    padding-left: 30px;
    padding-bottom: 30px;
`;

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
`;
