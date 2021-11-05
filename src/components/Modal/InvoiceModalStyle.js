import styled from 'styled-components';
import { MdClose } from 'react-icons/md'


export const Background = styled.div`
    position: fixed;
    top: 0;
    left:0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const CreateModalWrapper = styled.div`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    margin: 0;
    padding: 50px;
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #2E3440;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: fixed;
    border-radius: 10px;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
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