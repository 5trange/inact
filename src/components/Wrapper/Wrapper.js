import { StyledWrapper } from './WrapperStyle';

/* Wrapping elements with the wrapper */
const Wrapper = ({ children }) => {
    return (
    <StyledWrapper>
        {children}
    </StyledWrapper>
    );
};

export default Wrapper;