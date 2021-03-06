import { StyledButton } from './ButtonStyle';

const Button = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;